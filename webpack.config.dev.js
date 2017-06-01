var path = require('path');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    //config typescript compilation
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    transpileOnly: true
                }
            }, {
                loader: 'angular2-template-loader',
                loader: 'angular2-router-loader'
            }]
        }]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
})