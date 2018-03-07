const webpack = require('webpack');

const config = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.devtool = 'cheap-module-eval-source-map';
config.devServer = {
    port: 8083,
    hot: true,
    historyApiFallback: {
        index: 'index.html'
    }
}
// config.module.rules.push(
//     {
//         test: /\.less$/,
//         use: ['style-loader',
//             {
//                 loader: 'css-loader',
//                 options: {
//                     modules: true
//                 }
//             },
//         'less-loader', 'postcss-loader']
//     }
// );
// config.plugins.push(
//     new webpack.SourceMapDevToolPlugin({
//         filename: '[file].map',
//         exclude: ['vendor.js']
//     })
// );
// Object.keys(config.entry).forEach((key) => {
//     if(Array.isArray(config.entry[key])){
//         config.entry[key].unshift(
//             'webpack-dev-server/client?htp://0.0.0.0:8083',
//             'webpack/hot/only-dev-server'
//         );
//     }
// });
console.log(config.entry);
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
);
module.exports = config;