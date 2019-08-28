const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const config = merge(baseConfig, {
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ]
})
module.exports = config;