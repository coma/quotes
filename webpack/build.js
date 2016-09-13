'use strict';

const webpack           = require('webpack'),
      path              = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      dir               = require('./dir');

module.exports = {
    entry  : [
        'babel-regenerator-runtime',
        path.join(dir.src, 'style.css'),
        path.join(dir.src, 'entry', 'prod')
    ],
    resolve: {
        modules: [dir.cwd, dir.deps]
    },
    output : {
        path      : dir.web,
        filename  : 'app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings : false,
                screw_ie8: true
            }
        }),
        new ExtractTextPlugin({
            filename : 'app.css',
            allChunks: false
        })
    ],
    module : {
        loaders: [
            {
                test   : /\.js$/,
                loader : 'babel',
                include: dir.src
            },
            {
                test  : /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader        : 'css-loader?minimize'
                })
            },
            {
                test  : /\.json/,
                loader: 'json-loader'
            }
        ]
    },
    stats  : {
        progress    : true,
        colors      : true,
        modules     : true,
        reasons     : true,
        errorDetails: true
    }
};
