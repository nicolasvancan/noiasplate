const User = require('../models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { service } = require('../configuration/config.json');

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
    console.log(userInfo.password)
    // Check if there is an existing email

    if (!userInfo) {
        return res.status(400).json({ message: "Email not registered" });
    }

    const verifiedPassword = await argon2.verify(userInfo.password, password);

    if (!verifiedPassword) {
        return res.status(403).json({ message: "Wrong password" });
    }

    const token = await jwt.sign(
        {
            userId: userInfo._id,
            name: userInfo.name,
            email: userInfo.email
        },
        service.jwt,
        {
            algorithm: "HS256",
            expiresIn: (2 * 60 * 60) // 2 h
        }
    )

    return res.status(200).send({ token, auth: true }).end();
};

module.exports = {
    login
}