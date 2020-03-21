const path = require('path');

module.exports = (watch = false) => ({
	entry: path.resolve('./app/scripts/app.js'),
	output: {
		publicPath: './build/js',
		filename: "main.min.js",
		path: path.resolve('./build/js/'),
	},
	devServer: {
		inline: false,
		contentBase: "./build",
	},
	watch,
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		]
	}
});