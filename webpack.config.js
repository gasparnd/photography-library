const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
	},
	devServer: {
		open: false,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtract.loader,
					},
					'css-loader',
				]
			},
			{
				test: /\.js$/,
				use:'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.eot|svg|ttf|woff|png|jpg|webp$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 5000,
						outputPath: 'asset',
						name: '[name].[ext]'
					}
				},
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtract({
			filename: 'css/styles.css'
		})
	]
}