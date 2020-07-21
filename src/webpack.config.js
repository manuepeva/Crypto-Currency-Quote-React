const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle-js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/App.js'
        })
    ]
}
