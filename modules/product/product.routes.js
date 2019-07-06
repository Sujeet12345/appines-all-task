const ProductController = require('./product.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/product',
        method: 'GET', 
        config: {
            handler: ProductController.index,
            validate:{
            },
            description: 'product list ',
            tags: ['api','product'],
            notes: 'Returns all product information',
            auth:false
        }
    },
    {
        path: '/product',
        method: 'POST',
        config: {
            handler: ProductController.create,
            validate: {
                payload: Joi.object().keys({
                    categoryId : Joi.string().required(),
                    title : Joi.string().required(),
                    volume : Joi.string().required(),
                    price : Joi.number().required(),
                    description : Joi.string().optional()
                })
            },
            description: 'Create new product',
            tags: ['api','product'],
            notes: 'Returns a product response',
            auth: false
        }
    },
];
