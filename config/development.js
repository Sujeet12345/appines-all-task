var ip = require("ip");
module.exports = {
    host:ip.address()?ip.address():"0.0.0.0",
    port: '3000',
    secret: '12333TASKNODEJS',
    mongodbURI:process.env.NODE_ENV=='production'?"mongodb://root:root@ds241065.mlab.com:41065/demo3":"mongodb://root:root@ds241065.mlab.com:41065/demo3"
};
