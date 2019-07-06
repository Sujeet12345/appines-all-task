
const categoryRoutes = require('./category.routes');
const CategoryModule = {
    name: 'CategoryModule',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(categoryRoutes);
    }
};
module.exports = CategoryModule;