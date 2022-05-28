const v1Routes = require('express').Router();
const userRoutes = require('./user.routes');

v1Routes.use('/user', userRoutes);

module.exports = v1Routes;