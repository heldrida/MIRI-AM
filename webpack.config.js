var path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/dev-server',
		'./app/index.js'
	],
	output: {
		path: __dirname + '/build',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] },
            { test: /\.scss$/, loader: 'style!css!sass' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};