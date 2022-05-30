const authRoutes = require('express').Router();
const userController = require('../../controllers/user.controller');
const authController = require('../../controllers/auth.controller');

authRoutes.post("/", userController.create);
authRoutes.post('/login', authController.login);

module.exports = authRoutes