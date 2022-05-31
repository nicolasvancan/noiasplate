const User = require('../models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { service } = require('../configuration/config.json');
const crypto = require('crypto');
const redisClient = require('../databases/redis');

const login = async (req, res) => {
    const { body } = req;
    const { email, password } = body;

    // Check for required fields

    if (!body.email || !body.password) {
        return res.status(400).json({
            message: "Missing required fields",
            fields: {
                email: !!body.email,
                password: !!body.password
            }
        }).end();
    }

    const userInfo = await User.findOne({ email });

    // Check if there is an existing email

    if (!userInfo) {
        return res.status(400).json({ message: "Email not registered" });
    }

    const verifiedPassword = await argon2.verify(userInfo.password, password);

    // Check if the password matches the stored argon2 encoded password

    if (!verifiedPassword) {
        return res.status(403).json({ message: "Wrong password" });
    }

    const refreshToken = crypto.randomUUID();

    const token = await jwt.sign(
        {
            userId: userInfo._id,
            name: userInfo.name,
            email: userInfo.email,
        },
        service.jwt,
        {
            algorithm: "HS256",
            expiresIn: (2 * 60 * 60) // 2 h
        }
    );

    redisClient.setex(token, 10000, refreshToken);
    return res.status(200).send({ token, refreshToken, auth: true }).end();
};

const refreshToken = async (req, res) => {
    const oldToken = req.headers['x-auth-token'];
    const { body } = req;
    const { refreshToken, email, userId, name } = body;

    // Add to check if refreshToken is exact the same as in redis

    const savedRefreshToken = await redisClient.getAsync(oldToken);
    await redisClient.delAsync(oldToken);

    if (savedRefreshToken !== refreshToken) {
        return res.status(400).json({ message: "Refresh token not valid" });
    }

    const newRefreshToken = crypto.randomUUID();

    const token = await jwt.sign(
        {
            userId: userId,
            name: name,
            email: email,
        },
        service.jwt,
        {
            algorithm: "HS256",
            expiresIn: (2 * 60 * 60) // 2 h
        }
    );
    redisClient.setex(token, 10000, refreshToken);
    return res.status(200).json({ token, refreshToken: newRefreshToken, auth: true }).end();
}

module.exports = {
    login,
    refreshToken
}