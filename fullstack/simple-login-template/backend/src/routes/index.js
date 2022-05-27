const routes = require('express').Router();
const { service } = require('../configuration/config.json')

routes.use(`${service.prefix}/`, routes);
routes.get(`${service.prefix}/`, (req, res) => {
    console.log("Server Online")
    res.status(200).json({ status: "Online" });
});

module.exports = routes;