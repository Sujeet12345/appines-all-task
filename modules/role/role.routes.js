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
];
