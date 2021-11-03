const express = require('express');
const authCtrl = require('./authCtrl');
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

const auth = express.Router();

// auth.use((req, res, next) => {
//     console.log(res.locals.user);
//     next();
// })
auth.get('/', isLoggedIn, authCtrl.list);
auth.post('/register', isNotLoggedIn, authCtrl.register)
auth.post('/login', isNotLoggedIn, authCtrl.login);
auth.get('/logout', authCtrl.logout);
// auth.get('/check', isLoggedIn, authCtrl.check);


module.exports = auth;

