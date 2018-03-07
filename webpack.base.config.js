const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var webpack = require('webpack');


module.exports = {
    resolve: {
        extensions: ['.jsx', '.js'],  // 同时支持 js 和 jsx
        alias: {
          'assets': __dirname + '/assets'
        }
    },
    entry: {
        index: './src/index',
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'eslint-loader' },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'less-loader',
                        'postcss-loader'
                    ],
                    fallback: 'style-loader'
                }),
                exclude: /node_modules/
            },
            { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { 
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192, name: './images/[name].[ext]' }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([__dirname + '/build'], { verbose: false }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            ignoreOrder: true
        })
    ]
}