const authRoutes = require('express').Router();
const userController = require('../../controllers/user.controller');
const authController = require('../../controllers/auth.controller');
const { authTokenRefresh } = require('../../middlewares/auth.middleware');

authRoutes.post('/', userController.create);
authRoutes.post('/login', authController.login);
authRoutes.post('/refresh', authTokenRefresh, authController.refreshToken);

module.exports = authRoutes