const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const argon2 = require('argon2');

// first example no complex data

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, default: null },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        collection: "user",
        timestamps: true
    }
);

// Obs: Cannot use Arrow functions, somehow it's not returning any Object data from "this"

userSchema.pre('save', async function (next) {

    // Replace the original password for a Hashed argon2.

    const a2Hash = await argon2.hash(this.password);
    this.password = a2Hash;
    next();
});

module.exports = mongoose.model("user", userSchema);