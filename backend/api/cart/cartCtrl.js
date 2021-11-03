const Cart = require('../../models/cart')
const User = require('../../models/user');


exports.getCart = async (req, res) => {
    const { username } = req.params;
    try {
        const user_id = await User.find({ username: username }).select('_id').exec();
        const carts = await Cart.find({ user: user_id }).populate('product').exec();
        res.json(carts);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.registerCart = async (req, res) => {
    const { cartAmount, cartSum, product, user } = req.body;
    try {
        const cart = new Cart({
            cartAmount,
            cartSum,
            product,
            user
        })
        await cart.save();
        //const result = await Cart.find({ cartAmount: 1 }).populate('product').exec();
        res.json(cart);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteCart = async (req, res) => {
    const { cartId } = req.params;
    try {
        const cart = await Cart.findByIdAndRemove(cartId).exec();
        res.json(cart);
    } catch (error) {
        res.status(400).send(error);
    }
}