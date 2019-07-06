const UserController = require('./user.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/user/signup',
        method: 'POST',
        config: {
            handler: UserController.create,
            validate: {
                payload: Joi.object().keys({
                    name            : Joi.string().required(),
                    email           : Joi.string().lowercase().email().required(),
                    password        : Joi.string().required(),
                    roleId          : Joi.string().optional(),
                    mobileNumber    : Joi.string().required()
                })
            },
            description: 'Create new Account (admin,user) [Task 1]',
            tags: ['api','users'],
            notes: 'Returns a signup response',
            auth: false
        }
    },
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
            description: 'Account information(token)',
            tags: ['api','user'],
            notes: 'Returns particular user information',
            auth:false
        }
    },
    {
        path: '/user/login',
        method: 'POST',
        config: {
            handler: UserController.login,
            validate: {
                payload: Joi.object().keys({
                    email: Joi.string().lowercase().email().required(),
                    password: Joi.string().required()
                })
            },
            description: 'Account Login.',
            tags: ['api','user'],
            notes: 'Returns a JSON Web Token',
            auth:false
        }
    },
];
