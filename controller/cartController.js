const {Cart} = require("../models");
const {Product} = require("../models");


exports.addToCart = (req, res) => {
	const {productId, quantity, userId} = req.body;
	if (!productId ||  !quantity){
		return res.status(403).json({
			message: "Missing 'productId' or 'quantity' from the request"});
	}
	try{
		const product = await Product.findByPk(productId);
		if (!product) {
			return res.status(400).json({message: "Product not found"});
		}

		let cartItem = await Cart.findOne({ where: {productId, userId}})
		if (!cartItem) {
			cartItem = await Cart.create(productId, quantity, userId);
		} else {
				cartItem.quantity += quantity;
				await cartItem.save();
		}
		return res.status(200).json({message: "product sucessfully added", cartItem})
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong', error: error.message });
	}
}

exports.removeFromCart = (req, res) => {
	const {productId, userId} = req.body;

	try{
		const cart = await Cart.findOne({ where: {id: cartId}})
		if (!cart) {
			return res.status(400).json({message: "Item not found in the cart"})
		}
		await cart.destroy();
		return res.status(200);
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.viewCart = {req, res}