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

