//webpack base config

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: {
		main: './main'
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist',
		filename: 'main.js'
	},
	module: {
		rules: [ 
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({ //提取散落的css样式文件
                    use:'css-loader',
                    fallback:'style-loader'
                })
            }
         ]
    },
    plugins:[ 
        //重命名提取后的css文件
        new ExtractTextPlugin("main.css")  
      ]
    
};

module.exports = config;
