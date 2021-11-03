const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((_id, done) => {
        User.findById(_id).exec()
            .then((user) => {
                done(null, user)
            })
            .catch(err => (done(err)));
    });
    local();
}