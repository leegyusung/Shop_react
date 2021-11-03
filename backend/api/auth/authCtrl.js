const passport = require('passport');
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const { jsonWebToken } = require('../middlewares');

exports.list = async (req, res) => {
    try {
        const users = await User.find().exec();
        res.send(users);
    } catch (error) {
        res.status(400)
    }
}
exports.register = async (req, res, next) => {
    const { username, password, admin } = req.body;
    try {
        const exist = await User.findOne({ username }).exec();
        if (exist) {
            return res.status(400).send("존재하는 유저입니다")
        }
        const hashed = await bcrypt.hash(password, 12);
        const user = new User({
            username,
            password: hashed,
            admin
        })
        await user.save();
        res.send(user);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.login = async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.status(400).json({ message: info.message });
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            };
            res.cookie('access_token', jsonWebToken(user), {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
            })
            // res.locals.user = user;
            // console.log(res.locals.user);
            return res.json(user);
        });
    })(req, res, next);
}

exports.logout = async (req, res) => {
    req.logout();
    req.session.destroy();
    res.cookie('access_token');
    res.redirect('/');
}

