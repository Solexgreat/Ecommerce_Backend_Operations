const {Product} = require('../models')

exports.createProduct = async (req, res) => {
	if (!req.body)
		res.status(400).json({message: "Empty request"})
	try{
		const product = await Product.create(req.body)
		res.status(201).json({message: "Product created sucessfully", product})
	} catch (err) {
		res.status(500).json({message: err})
	}
}

