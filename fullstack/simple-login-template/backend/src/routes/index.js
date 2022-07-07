const routes = require('express').Router();
const v1Routes = require('./v1');
const { service } = require('../configuration/config.json');
const {
    authToken,
} = require('../middlewares/auth.middleware');

routes.use(`${service.prefix}/`, v1Routes);
routes.get(`${service.prefix}/`, (req, res) => {
    console.log("Server Online")
    res.status(200).json({ status: "Online" });
});

routes.get(`${service.prefix}/teste`, authToken, async (req, res) => {
    return res.status(200).json("Bang")
});

module.exports = routes;