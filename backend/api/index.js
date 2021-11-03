const express = require('express');

const api = express.Router();

const auth = require('./auth/index');
const product = require('./product/index');
const cart = require('./cart/index');
const comment = require('./comment/index');
const reply = require('./reply/index');
const purchase = require('./purchase/index');

api.use('/auth', auth);
api.use('/product', product)
api.use('/cart', cart)
api.use('/comment', comment)
api.use('/reply', reply);
api.use('/purchase', purchase)

module.exports = api;