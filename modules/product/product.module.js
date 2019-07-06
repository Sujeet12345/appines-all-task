
const productRoutes = require('./product.routes');
const ProductModule = {
    name: 'ProductModule',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(productRoutes);
    }
};
module.exports = ProductModule;