const userRoutes = require('express').Router();


userRoutes.post("/user", (req, res) => {
    console.log("Logs")
})

module.exports = userRoutes;