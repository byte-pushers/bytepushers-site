var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {},
    output: {
        path: path.resolve(__dirname, 'release/'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/(node_modules|bower_components)/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
