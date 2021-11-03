const express = require('express');
const purchaseCtrl = require('./purchaseCtrl');

const purchase = express.Router();

purchase.post('/', purchaseCtrl.registerPurchase)
purchase.get(`/:userId`, purchaseCtrl.getPurchase);

module.exports = purchase;