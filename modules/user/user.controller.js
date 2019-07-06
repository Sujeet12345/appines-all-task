const User = require('./user.model');
const Role = require('../role/role.model');
const Boom = require('boom');
const UtilService = require('../../services/util.service');
const JwtService = require('../../services/jwt.service');
module.exports = {
    async create(req, reply) {
        try {
            const user=await User.findOne({},'-password');
            if(!user){
                const role=await Role.findOne({role:"admin"});
                if(!role){
                    return reply.response({response_data:{message:'First add admin as a role.',data:{}},response_code:400});
                }else{
                    req.payload.roleId=role._id;
                    const user = new User(req.payload);
                    user.password = await UtilService.hashPassword(user.password);
                    const saved=await user.save();
                    return reply.response({response_data:{message:'Account created successfully.',data:{role:"admin"}},response_code:201});
                }
            }else{
                const role=await Role.findOne({role:"user"});
                if(!role){
                    return reply.response({response_data:{message:"Can't be registered,role is not added by admin.",data:{}},response_code:400});
                }else{
                    req.payload.roleId=role._id;
                    const user = new User(req.payload);
                    user.password = await UtilService.hashPassword(user.password);
                    const saved=await user.save();
                    return reply.response({response_data:{message:'Account created successfully.',data:{role:"user"}},response_code:201});
                }
            }
        }
        catch(err){
            if(err.code==11000){
                return reply.response({response_data:{message:"Email already exists,try with other email.",data:err},response_code:500})
            }
            return reply.response({response_data:{message:"Internal Server Error",data:err},response_code:500})
        }
    },
    async me(req,reply){
        try{
            var token=req.headers.authorization;
            var decode=JwtService.decodeToken(token);
            if(decode){
                const user=await User.findById(decode.id,'-password').populate("roleId",'role');
                if(!user){
                    return reply.response({response_data:{message:"No Account found.",data:{}},response_code:404});
                }
                else{
                    return reply.response({response_data:{message:"Success",data:user},response_code:200});
                }
            }
            else{
                return reply.response({response_data:{message:'You are not authorized.',data:{}},response_code:401})
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    },
    async login(req, reply){
        try {
            const user = await User.findOne({email: req.payload.email}).populate("roleId",'role');
            if (!user) {
                return reply.response({response_data:"Email not registered.",response_code:400});
            }
            const matched = await UtilService.comparePassword(req.payload.password, user.password);
            if(matched){
               const token = JwtService.issue({
                    payload:{
                        id: user._id,
                        email: user.email,
                        role:user.roleId.role
                    },
                    expiresIn : '1 day'
                });
                return reply.response({response_data:{message:"Success",data:{token:token,role:user.roleId.role}},response_code:200});
            }
            else{
                return reply.response({response_data:{message:"Password Incorrect.",data:{}},response_code:400});
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    },
}
