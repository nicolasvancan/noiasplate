const User = require('../models/user.model');

// Will be used create users
const create = async (req, res) => {

    const { body } = req;
    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
        return res.status(400).send("Missing required fields").end();
    }

    // Validate if email already exists
    const isEmailUsed = await User.findOne({ email });

    if (isEmailUsed) {
        return res.status(409).json({ message: "e-mail already in use" }).end();
    }

    await User.create(body);

    return res.status(201).json({ message: "User Created" }).end();

}

module.exports = {
    create
}