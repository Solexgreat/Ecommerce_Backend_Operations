const { INET } = require('sequelize')
const {Product} = require('../models')

exports.createProduct = async (req, res) => {
	if (!req.body)
		res.status(400).json({message: "Empty request"})
	try{
		const product = await Product.create(req.body)
		return res.status(201).json({message: "Product created sucessfully", product})
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.productStockUpdate = async (productId, amount, sign) => {
	try{
		if (typeof productId !== 'number' || typeof amount !== 'number' || typeof sign !== 'string')
			throw new Error("Expecting an Integer for productId and amount")

		const product = await Product.findByPk(productId)
		if (!product)
			throw new Error('Product not found')

		if (sign === '-') {
			const newAmount = product.stock - amount;
			if (newAmount < 0)
				throw new Error('Insufficient stock to fulfill the order');
			product.stock = newAmount;
		} else {
			const newAmount = product.stock + amount;
			product.stock = newAmount;
		}

		product.save();
		return {message: "success", product}
	} catch (err) {
		return {error: err.message}
	}
}