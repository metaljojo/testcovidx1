const auth = require('./api/auth');
const users = require('./api/users');
const products = require('./api/products');

module.exports = (app) => {
    // use route
    app.use('/api', auth)
    app.use('/api/users', users)
    app.use('/api/products', products)
};