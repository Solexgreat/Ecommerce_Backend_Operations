const {Cart} = require("../models");
const {Product} = require("../models");


exports.addToCart = async (req, res) => {
	const {productId, quantity} = req.body;
	const userId = req.user.id;
	if (!productId ||  !quantity){
		return res.status(403).json({message: "Missing 'productId' or 'quantity' from the request"});
	}
	try{
		const product = await Product.findByPk(productId);
		if (!product) {
			return res.status(400).json({message: "Product not found"});
		}

		let cartItem = await Cart.findOne({ where: {productId, userId}})
		if (!cartItem) {
			cartItem = await Cart.create({productId, quantity, userId});
		} else {
				cartItem.quantity += quantity;
				await cartItem.save();
		}
		return res.status(200).json({message: "product sucessfully added", cartItem})
	} catch (err) {
		return res.status(500).json({ message: 'Something went wrong', error: err.message });
	}
}

exports.removeFromCart = async (req, res) => {
	const {productId} = req.params;
	const userId = req.user.id;

	try{
		const cart = await Cart.findOne({ where: {productId: productId, userId: userId}})
		if (!cart) {
			return res.status(400).json({message: "Item not found in the cart"})
		}
		await cart.destroy();
		return res.status(200).json({message: "sucessfull"});
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.viewCart = async (req, res) => {
	const {userId} = req.user.id;

	try{
		const cartItems = await Cart.findAll({ where: {userId: userId}})
		if (!cartItems)
			res.status(400).json({message: "Cart is empty"})
		return res.status(200).json(cartItems)
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}