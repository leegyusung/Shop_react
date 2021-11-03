const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
    cartAmount: Number,
    cartSum: Number,
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;