const Role = require('./role.model');
const Boom = require('boom');
module.exports = {
    async index(req,reply){
        try{
            const role=await Role.find({},{});
            if(role.length>0){
                return reply.response({response_data:{message:"Success",data:role},response_code:200});
            }else{
                return reply.response({response_data:{message:"No Role found.",data:{}},response_code:404});
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    },
    async create(req, reply) {
        try {
            const role=await Role.create(req.payload);
            if(!role){
                return reply.response({response_data:{message:"Role not added.",data:{}},response_code:404});
            }else{
                return reply.response({response_data:{message:"Role added successfully.",data:{}},response_code:201});
            }            
        }
        catch(err){
            if(err.code==11000){
                return reply.response({response_data:{message:"Role already exists,try with other role.",data:err},response_code:500})
            }
            return reply.response({response_data:{message:"Internal Server Error",data:err},response_code:500})
        }
    }
}
