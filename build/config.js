const path = require('path');
const ROOT = process.cwd();
const ENTRY = path.resolve(ROOT, './src');
const OUTPUT = path.resolve(ROOT, './dist');

module.exports = {
	path: {
		root: ROOT,
		entry: ENTRY,
		output: OUTPUT,
	},

	devServer: {
		port: '7001',
		host: '127.0.0.1',
	}
}
