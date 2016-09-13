const path = require('path'),
      cwd  = path.join(__dirname, '..'),
      src  = path.join(cwd, 'src'),
      web  = path.join(cwd, 'web'),
      deps = path.join(cwd, 'node_modules');

module.exports = {src, cwd, web, deps};
