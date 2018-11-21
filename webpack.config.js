const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
	entry: "./index.js",
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	watch:true,
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use:['babel-loader']
				
			},
			{
				test:/\.css$/,
				exclude:/node_modules/,
				use:['style-loader', 'css-loader']
			}
		]
	},
	plugins:[
	    new BrowserSyncPlugin({
      	host:'localhost',
      	port:3000,
      	files:['./dist/*.html', '*.css', '*.js'],
      	server: {baseDir: ['dist']}})

	]
}