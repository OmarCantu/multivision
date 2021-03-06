var path = require("path");
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://multivision:multivision@ds061751.mongolab.com:61751/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}