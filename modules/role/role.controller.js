const Role = require('./role.model');
const Boom = require('boom');
module.exports = {
    async index(req,reply){
        try{
            const role=await Role.find({},{});
            if(role.length>0){
                return reply.response({response_data:{message:"Success",data:user},response_code:200});
            }else{
                return reply.response({response_data:{message:"No Role found.",data:{}},response_code:404});
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    }
}
