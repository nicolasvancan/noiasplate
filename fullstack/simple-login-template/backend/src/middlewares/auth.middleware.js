const jwt = require('jsonwebtoken');
const { service } = require('../configuration/config.json');

const authToken = async (req, res, next) => {
    // Verify Valid Token and pass to controllers if it's Ok

    const incommingJwt = req.headers['x-auth-token'];

    let isValidJwt;
    let decodedJwt;

    if (!incommingJwt) {
        return res.status(400).json({ message: "No token provided" }).end();
    }

    try {
        decodedJwt = jwt.verify(incommingJwt, service.jwt);
        isValidJwt = true;
    } catch (err) {
        isValidJwt = false;
    }

    if (!isValidJwt) {
        return res.status(401).json({ message: "Unauthorized User" }).end();
    }

    if (Date.now() >= decodedJwt.exp * 1000) {
        return res.status(401).json({ message: "Expired Token" }).end();
    }

    next();
};

const authTokenRefresh = async (req, res, next) => {

    // Verify Valid Token and pass to controllers if it's Ok

    const incommingJwt = req.headers['x-auth-token'];
    const { refreshToken } = req.body;

    let isValidJwt;
    let decodedJwt;

    if (!incommingJwt) {
        return res.status(400).json({ message: "No token provided" }).end();
    }

    try {
        decodedJwt = jwt.verify(incommingJwt, service.jwt);
        isValidJwt = true;
    } catch (err) {
        isValidJwt = false;
    }

    if (!isValidJwt) {
        return res.status(401).json({ message: "Unauthorized User" }).end();
    }

    if (!refreshToken) {
        return res.status(400).json({ message: "No refresh token provider" }).end();
    }

    req.body = {
        refreshToken,
        ...decodedJwt
    };

    next();
};

module.exports = { authToken, authTokenRefresh }