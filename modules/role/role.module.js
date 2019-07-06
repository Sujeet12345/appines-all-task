
const roleRoutes = require('./role.routes');
const RoleModule = {
    name: 'RoleModule',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(roleRoutes);
    }
};
module.exports = RoleModule;