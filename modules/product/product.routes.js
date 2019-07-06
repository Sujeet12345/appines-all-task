const ProductController = require('./product.controller');
const Joi = require('joi');
module.exports = [
    // {
    //     path: '/product/{id}',
    //     method: 'GET', 
    //     config: {
    //         handler: ProductController.getProductList,
    //         validate:{
    //             params: Joi.object().keys({
    //                 id: Joi.number().required()
    //             }),
    //             headers:Joi.object({
    //                 'authorization':Joi.string().required()
    //             }).unknown()
    //         },
    //         description: 'product list [user] app',
    //         tags: ['api','product'],
    //         notes: 'Returns all product information',
    //         auth:false
    //     }
    // },
    // {
    //     path: '/product/subcategory/{id}',
    //     method: 'GET', 
    //     config: {
    //         handler: ProductController.getProductListBySubcategoryId,
    //         validate:{
    //             params: Joi.object().keys({
    //                 id: Joi.string().required()
    //             }),
    //             headers:Joi.object({
    //                 'authorization':Joi.string().required()
    //             }).unknown()
    //         },
    //         description: 'product list by subcategory id[user] app',
    //         tags: ['api','product'],
    //         notes: 'Returns all product information',
    //         auth:false
    //     }
    // },
];
