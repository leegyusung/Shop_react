const { Schema } = require('mongoose');
const mongoose = require('mongoose');


const ProductSchema = new Schema({
    productCategory: String,
    productName: String,
    productPrice: Number,
    productFile: String,
    productAmount: Number,
    productGrade: Number,
    productDescription: String,
    publishedDate: {
        type: Date,
        default: Date.now,
    },
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;