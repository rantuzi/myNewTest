const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const {VueLoaderPlugin} =  require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = merge(baseConfig, {
    devServer: {
        port: '8000',
        host: 'localhost',
        hot: true // 热加载
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})

module.exports = config