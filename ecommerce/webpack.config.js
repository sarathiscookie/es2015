const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    }, */
    entry: ['@babel/polyfill', './src/js/tree.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/treebundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        /* new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }), */
        new HTMLWebpackPlugin({
            filename: 'tree.html',
            template: './src/tree.html'
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  { loader: "css-loader", options: { importLoaders: 1 } },
                  "postcss-loader",
                ],
            },
        ]
    }
};