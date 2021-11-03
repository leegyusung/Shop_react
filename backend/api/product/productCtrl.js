const Product = require('../../models/product');
const Joi = require('joi');



exports.list = async (req, res) => {
    const page = parseInt(req.query.page || '1', 10);
    try {
        const products = await Product.find()
            .sort({ _id: -1 })
            .limit(4)
            .skip((page - 1) * 4)
            .lean()
            .exec();
        const productCount = await Product.countDocuments().exec();
        res.set('Last-Page', Math.ceil(productCount / 4));
        res.send(products);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.getProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId).exec();
        res.send(product)
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.register = async (req, res) => {
    const schema = Joi.object().keys({
        productCategory: Joi.string().required(),
        productName: Joi.string().required(),
        productPrice: Joi.number().required(),
        productFile: Joi.string().required(),
        productAmount: Joi.number().required(),
        productGrade: Joi.number().required(),
        productDescription: Joi.string().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error);
    }
    const { productCategory, productName, productPrice, productFile, productAmount, productGrade, productDescription } = req.body;
    try {
        const product = new Product({
            productCategory,
            productName,
            productPrice,
            productFile,
            productAmount,
            productGrade,
            productDescription
        })
        await product.save();
        res.json(product);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.registerFile = async (req, res) => {
    console.log(req.file)
    res.send({
        filePath: req.file.filename
    });
}