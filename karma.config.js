var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config){
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        reporters: ['dots'],
        singleRun: true,

        browsers: ['Chrome'],
        files: [
            './node_modules/jquery/dist/jquery.js',
            './tests/*.js'
        ],
        preprocessors: {
            './tests/*.js': ['webpack'],
        },
        plugins: [
            require("karma-webpack"),
            require("karma-jasmine"),
            require("karma-chrome-launcher")
        ],
        webpack: webpackConfig,
        webpackMiddleWare: {
            noInfo: true
        }

    });
};