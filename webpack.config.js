var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/js/main.js',
	watch: true,
	output: {
		path: __dirname+'/public/dist', 
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				unsafe: true
			}
		})
	],
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

};