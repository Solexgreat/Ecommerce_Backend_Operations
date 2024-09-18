const Order = require('../models/order')
const {productUpdate} = require('./productController')

exports.order = async (req, res) => {
	const {amount, orderDate, productId} = req.body
	if (!amount || !orderDate || !productId)
		return res.status(400).json({message: "Incomplete request"})
	try{
		const orderStatus = await productUpdate(productId, amount)
		if (orderStatus.error)
			return res.status(403).json({message: orderStatus.error})
		const orderDetails = await Order.create(amount, orderDate, productId)

		return res.status(200).json({message: orderStatus.message, order: orderDetails, product: orderStatus.product,})
	} catch (err){
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}