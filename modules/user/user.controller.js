const User = require('./user.model');
const Boom = require('boom');
const JwtService = require('../../services/jwt.service');
module.exports = {
    async me(req,reply){
        try{
            var token=req.headers.authorization;
            var decode=JwtService.decodeToken(token);
            if(decode){
                const user=await User.findById(decode.id,'-password');
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
    }
}
