const express = require('express'),
      path    = require('path'),
      quote   = require('./quote');

const init = () => express()
    .use(express.static(path.resolve(__dirname, '..', 'web')));

module.exports = (app = init()) => app
    .get('/quote', (req, res) => quote(res));