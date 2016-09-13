const request                    = require('superagent'),
      {MASHAPE_URL, MASHAPE_KEY} = require('../config');

module.exports = res => request
    .get(MASHAPE_URL)
    .set('X-Mashape-Authorization', MASHAPE_KEY)
    .pipe(res);