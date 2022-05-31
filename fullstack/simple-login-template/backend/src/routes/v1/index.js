const v1Routes = require('express').Router();
const authRoutes = require('./auth.routes');

v1Routes.use('/account', authRoutes);

module.exports = v1Routes;