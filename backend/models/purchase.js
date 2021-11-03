const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const PurchaseSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    purchaseAmount: Number,
    purchaseSum: Number,
    publishedDate: {
        type: Date,
        default: Date.now,
    },
})

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = Purchase;