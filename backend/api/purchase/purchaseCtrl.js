const Purchase = require('../../models/purchase');
const Product = require('../../models/product');


exports.getPurchase = async (req, res) => {
    const { userId } = req.params
    try {
        const purchase = await Purchase.find({ user: userId }).populate('user').populate('product').exec();
        console.log(purchase);
        res.json(purchase);
    } catch (error) {
        return res.status(400).send(error);
    }
}


exports.registerPurchase = async (req, res) => {
    const { product, user, purchaseAmount, purchaseSum } = req.body;
    try {
        const productAmount = await Product.findById(product).select('productAmount').exec();

        //수량체크
        if (productAmount.productAmount < purchaseAmount) return res.status(400).json({ error: "수량에러" })
        const purchase = new Purchase({
            product,
            user,
            purchaseAmount,
            purchaseSum
        })
        const result = await purchase.save();
        if (result) {
            await Product.findByIdAndUpdate(result.product, {
                productAmount: productAmount.productAmount - purchaseAmount
            }, {
                new: true
            })
        }
        res.json(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}