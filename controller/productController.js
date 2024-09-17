const {Product} = require('../models')

exports.createProduct = async (req, res) => {
	if (!req.body)
		res.status(400).json({message: "Empty request"})
	const product = await Product.create(req.body)
	res.status(201).json({message: "Product created sucessfully", product})
}