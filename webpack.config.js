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

        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
          filename: "e-page.html",
          template: "./src/e-page.html",
      }),
      new HtmlWebpackPlugin({
        filename: "t-page.html",
        template: "./src/t-page.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sin.html",
      template: "./src/sin.html",
    }),
    new HtmlWebpackPlugin({
      filename: "log.html",
      template: "./src/log.html",
    }),
        new MiniCssExtractPlugin({
            filename: 
            "assets/css/style.css"
            }),
    ]
};