const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// first example
const userSchema = new Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        collection: "user",
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);