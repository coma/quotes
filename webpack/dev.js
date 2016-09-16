'use strict';

const webpack = require('webpack'),
      Server  = require('webpack-dev-server'),
      browser = require('openurl'),
      path    = require('path'),
      {PORT}  = require('../config'),
      dir     = require('./dir'),
      quotes  = require('./quotes.json');

const compiler = webpack({
    devtool: 'eval',
    entry  : [
        path.join(__dirname, 'console.js'),
        'babel-regenerator-runtime',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(dir.src, 'style.css'),
        path.join(dir.src, 'entry', 'dev')
    ],
    resolve: {
        modules: [dir.cwd, dir.deps]
    },
    output : {
        path                         : dir.web,
        filename                     : 'app.js',
        publicPath                   : '/',
        devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('webpack')
            }
        })
    ],
    module : {
        loaders: [
            {
                test   : /\.js$/,
                loaders: ['babel'],
                include: dir.src
            },
            {
                test  : /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test  : /\.json/,
                loader: 'json-loader'
            }
        ]
    }
});

let first = true;

compiler.plugin('done', () => {
    if (first) {

        browser.open(`http://localhost:${ PORT }`);
        first = false;
    }
});

const server = new Server(compiler, {
    contentBase       : dir.web,
    publicPath        : '/',
    hot               : true,
    historyApiFallback: true,
    setup             : app => app
        .get('/app.css', (_, res) => res.set('Content-Type', 'text/css').send(''))
        .get('/quote', (_, res) => res.send(quotes[Math.floor(Math.random() * quotes.length)]))
});

server.listen(PORT, () => console.log(`quotes server on port ${ PORT }`));
