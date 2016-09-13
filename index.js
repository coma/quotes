const server = require('./server'),
      {PORT} = require('./config');

server()
    .listen(PORT, () => `server on port ${ PORT }`);