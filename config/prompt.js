'use strict';

const fs     = require('fs'),
      prompt = require('prompt'),
      path   = require('path'),
      file   = path.join(__dirname, 'local.json');

const schema = {
    properties: {
        PORT       : {
            description: 'local site port',
            type       : 'integer',
            default    : 3000
        },
        MASHAPE_URL: {
            description: 'random quotes api',
            type       : 'string',
            default    : 'https://andruxnet-random-famous-quotes.p.mashape.com'
        },
        MASHAPE_KEY: {
            description: 'get a new one for free here https://market.mashape.com/andruxnet/random-famous-quotes',
            type       : 'string'
        }
    }
};

if (fs.existsSync(file)) {

    const current = require(file),
          props   = schema.properties;

    Object
        .keys(props)
        .forEach(name => {

            if (current.hasOwnProperty(name)) {

                props[name].default = current[name];
            }
        });
}

prompt.message = '';
prompt.start();
prompt.get(schema, (error, result) => {

    fs.writeFileSync(file, JSON.stringify(result, null, 4));
});
