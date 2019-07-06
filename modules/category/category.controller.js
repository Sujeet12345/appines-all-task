const Category = require('./category.model');
const Product = require('../product/product.model');
const Boom = require('boom');
module.exports = {
    async index(req,reply){
        try{
            const category=await Category.find({},'title description productCount product').populate('product','title');
            if(category.length>0){
                return reply.response({response_data:{message:"Success",data:category},response_code:200});
            }else{
                return reply.response({response_data:{message:"No Category found.",data:{}},response_code:404});
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    },
    async create(req, reply) {
        try {
            const category=await Category.create(req.payload);
            if(!Category){
                return reply.response({response_data:{message:"Category not added.",data:{}},response_code:404});
            }else{
                return reply.response({response_data:{message:"Category added successfully.",data:{}},response_code:201});
            }            
        }
        catch(err){
            if(err.code==11000){
                return reply.response({response_data:{message:"Category title already exists,try with other Category.",data:err},response_code:500})
            }
            return reply.response({response_data:{message:"Internal Server Error",data:err},response_code:500})
        }
    },
    async delete(req, reply) {
        try {
            const product = await Product.remove({categoryId:req.params.id});
            const category = await Category.findByIdAndRemove(req.params.id);
            if(!category){
                return reply.response({response_data:{message:"No id found.",data:{}},response_code:200});
            }else{
                return reply.response({response_data:{message:"Category deleted with related products successfully.",data:{}},response_code:200});
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    },
}
