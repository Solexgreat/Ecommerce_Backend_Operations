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

exports.productUpdate = async (productId, amount) => {
	try{
		if (typeof productId !== 'number' || typeof amount !== 'number')
			throw new Error("Expecting an Integer for productId and amount")

		const product = await Product.findbyPk(productId)
		if (!product)
			throw new Error('Product not found')

		const newAmount = product.amount - amount;
		if (newAmount < 0) {
      throw new Error('Insufficient stock to fulfill the order');
    }

		product.amount = newAmount;
		product.save();
		return {message: "order successfull", product}
	} catch (err) {
		return {error: err.message}
	}
}