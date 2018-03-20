const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
	target: 'web',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', {
					loader: 'postcss-loader',
					options: {
						sourceMap: true
					}
				}, 'stylus-loader']
			},
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				loader: 'url-loader?limit=1024&name=[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		}),
		new htmlWebpackPlugin()
	]
}

if(isDev){
	config.devtool = '#cheap-module-eval-source-map';
	config.devServer = {
		port: 8000,
		host: '0.0.0.0',
		overlay: {			//有错误显示到屏幕上
			errors: true
		},
		hot: true
	}
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
}

module.exports = config;
