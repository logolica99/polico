const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,


    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    phone: {
        type: String,
        required: true,
        unique: true,

    },
    university: {
        type: String,
        required: true,

    },

}, { timestamps: true });


//encrypting the password
userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});


User = mongoose.model("users", userSchema);
module.exports = User;
