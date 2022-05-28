const routes = require('express').Router();
const v1Routes = require('./v1');
const { service } = require('../configuration/config.json')

routes.use(`${service.prefix}/`, v1Routes);
routes.get(`${service.prefix}/`, (req, res) => {
    console.log("Server Online")
    res.status(200).json({ status: "Online" });
});

module.exports = routes;