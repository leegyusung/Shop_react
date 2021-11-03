const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const UserSchema = new Schema({
    username: String,
    password: String,
    admin: Boolean,
    publishedDate: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model("User", UserSchema);

module.exports = User;