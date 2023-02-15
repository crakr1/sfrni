var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        app : './src/index.js'
    },

    output: {
        path : path.join(__dirname, "/dist"),
        filename : "main.js",
        publicPath:''
    },

    mode : "development",

devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      port: 9000,
      devMiddleware: {
        writeToDisk: true,
      },
      hot: false, 
      liveReload: true,
      open: true,
    },

    module :{
        rules :[
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize : true,
                }
            },

            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                    {
                      loader: MiniCssExtractPlugin.loader, 
                      options: {
                        publicPath: '../' 
                      }
                    },
                    'css-loader',
                    'sass-loader'
                  ]
            },
            
              {
                test: /\.(jpg|png)$/i,
                use: {
                    loader:"image-webpack-loader",
                    options: {
                      name :"[name].[ext]",
                      outputPath :"images/",
                    },
                  },
              },
              {
                test: /\.(woff|woff2|ttf)$/,
                use: {
                  loader: 'url-loader',
                  options : {
                    outputPath: "fonts",
                  }
                },
              },

        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 
            "assets/css/style.css"
            }),
    ]
};