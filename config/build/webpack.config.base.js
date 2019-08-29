const path = require('path');
const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.(gif|png|jpg|svg)$/, use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: 'resourse/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
module.exports = config