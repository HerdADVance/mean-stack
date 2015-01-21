var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports ={
	development: {
		db: 'mongodb://localhost/mean',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://herdadvance:Se7en645@ds047950.mongolab.com:47950/mean',
		port: process.env.PORT || 80
	}
}