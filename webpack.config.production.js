const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
	'./app/index'
  ],

  output: {
	path: path.join(__dirname, 'build'),
	filename: 'bundle-[hash].js'
  },

  plugins: [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({
	  minimize: true,
	  compress: {
		warnings: false
	  }
	}),
	new HtmlWebpackPlugin({
		inject: true,
		template: __dirname + '/build/' + 'index.html',
		filename: 'index.html'
	})
  ],

	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] },
			{ test: /\.scss$/, loader: 'style!css!sass' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
}
