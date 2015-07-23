var config = {
    development: {
        serverPort: 3000,
        serverIp:'127.0.0.1'
    },
    test: {
        serverPort: 8888,
        serverIp:'127.0.0.1'
    },
    production: {
        serverPort: process.env.OPENSHIFT_NODEJS_PORT,
        serverIp: process.env.OPENSHIFT_NODEJS_IP
    }
};
module.exports = config;