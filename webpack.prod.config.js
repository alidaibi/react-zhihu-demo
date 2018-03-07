const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.base.config');
config.devtool = 'cheap-module-source-map';
// config.module.rules.push(
//     {
//         test: /\.less$/,
//         use: ExtractTextPlugin.extract({
//             use: [
//                 'css-loader',
//                 'less-loader',
//                 'postcss-loader'
//             ],
//             fallback: 'style-loader'
//         }),
//         exclude: /node_modules/
//     }
// );

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true })
);
module.exports = config;