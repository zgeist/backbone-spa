var koutoSwiss = require('kouto-swiss');
var webpack = require("webpack");

require('es6-promise').polyfill();

module.exports = {
    entry: './app/main',
    output: {
        path: "./dist",
        filename: 'bundle.js',
        library: "app"
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html',
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus',
            }
        ]
    },
    stylus: {
        use: [koutoSwiss()]
    },
    watch: true,
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: "underscore",
            $: "jquery"
        })
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings:       false,
        //        drop_console:   true,
        //        unsafe:         true
        //    }
        //})
    ]
};