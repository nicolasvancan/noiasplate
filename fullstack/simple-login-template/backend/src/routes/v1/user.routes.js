const userRoutes = require('express').Router();


userRoutes.get("/", (req, res) => {
    return res.status(200).json({ bang: "DSASD" })
})

module.exports = userRoutes;