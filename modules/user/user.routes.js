const UserController = require('./user.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/user/me',
        method: 'GET',
        config: {
            handler: UserController.me,
            validate: {
                headers:Joi.object({
                    'authorization':Joi.string().required()
                }).unknown()
            },
            description: 'User Account information(token)',
            tags: ['api','user'],
            notes: 'Returns particular user information',
            auth:false
        }
    }
];
