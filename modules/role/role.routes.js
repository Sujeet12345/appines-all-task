const RoleController = require('./role.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/role',
        method: 'GET', 
        config: {
            handler: RoleController.index,
            validate:{
            },
            description: 'role list ',
            tags: ['api','role'],
            notes: 'Returns all role information',
            auth:false
        }
    },
    {
        path: '/role',
        method: 'POST',
        config: {
            handler: RoleController.create,
            validate: {
                payload: Joi.object().keys({
                    role : Joi.string().lowercase().required()
                })
            },
            description: 'Create new Role',
            tags: ['api','role'],
            notes: 'Returns a role response',
            auth: false
        }
    },
];
