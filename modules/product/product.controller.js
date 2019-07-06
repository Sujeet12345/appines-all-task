const Product = require('./product.model');
const Category = require('../category/category.model');
const Boom = require('boom');
module.exports = {
    async index(req,reply){
        try{
            const product=await Product.find({},{}).populate('categoryId','title');
            if(product.length>0){
                return reply.response({response_data:{message:"Success",data:product},response_code:200});
            }else{
                return reply.response({response_data:{message:"No Product found.",data:{}},response_code:404});
            }
        }
        catch(err){
            throw Boom.badImplementation("Internal server error",err);
        }
    },
    async create(req, reply) {
        try {
            const product=await Product.create(req.payload);
            if(!product){
                return reply.response({response_data:{message:"Product not added.",data:{}},response_code:404});
            }else{
                const category=await Category.findById(req.payload.categoryId);
                category.productCount=category.productCount+1;
                category.product.push(product._id);
                await category.save();
                return reply.response({response_data:{message:"Product added successfully, category count updated.",data:{}},response_code:201});
            }            
        }
        catch(err){
            if(err.code==11000){
                return reply.response({response_data:{message:"Product title already exists,try with other Product.",data:err},response_code:500})
            }
            console.log(err)
            return reply.response({response_data:{message:"Internal Server Error",data:err},response_code:500})
        }
    }
}
