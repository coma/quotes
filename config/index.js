if (process.env.NODE_ENV === 'production') {

    module.exports = process.env;

} else {

    module.exports = require('./local.json');
}
