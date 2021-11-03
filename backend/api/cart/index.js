const express = require('express');
const cartCtrl = require('./cartCtrl');

const cart = express.Router();

cart.get('/@:username', cartCtrl.getCart)
cart.post('/', cartCtrl.registerCart)
cart.delete('/:cartId', cartCtrl.deleteCart)

module.exports = cart;

