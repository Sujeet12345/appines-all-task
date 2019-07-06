const CategoryController = require('./category.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/category',
        method: 'GET', 
        config: {
            handler: CategoryController.index,
            validate:{
            },
            description: 'category list with populated products [Task 3]',
            tags: ['api','category'],
            notes: 'Returns all category information',
            auth:false
        }
    },
    {
        path: '/category',
        method: 'POST',
        config: {
            handler: CategoryController.create,
            validate: {
                payload: Joi.object().keys({
                    description : Joi.string().required(),
                    title : Joi.string().lowercase().required()
                })
            },
            description: 'Create new category',
            tags: ['api','category'],
            notes: 'Returns a category response',
            auth: false
        }
    },
    {
        path: '/category/{id}',
        method: 'DELETE',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            },
            handler: CategoryController.delete,
            tags: ['api','category'],
            description: 'Category delete with product [Task 2]',
            notes: 'Returns a deleted info',
            auth:false
        }
    },
    
];
