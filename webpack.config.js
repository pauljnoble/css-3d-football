var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, './', 'build');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./js/index.js'],
    output: {
        path: buildPath,
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { 
                test: /\.styl$/, 
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader", { publicPath: '/foo'})
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CopyWebpackPlugin([
            { from: './assets/**/*', to:  buildPath },
            { from: './index.html', to:  buildPath + '/index.html' }
        ]),
        new ExtractTextPlugin("css/[name].css")
    ]
};