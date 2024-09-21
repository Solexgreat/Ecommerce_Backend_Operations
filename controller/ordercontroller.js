const {Order} = require('../models')
const {productStockUpdate} = require('./productController')

exports.order = async (req, res) => {
	const {amount, orderDate, productId, userId} = req.body;
	const sign = '-';
	if (!amount || !orderDate || !productId)
		return res.status(400).json({message: "Incomplete request"})
	try{
		const orderStatus = await productStockUpdate(productId, amount, sign)
		if (orderStatus.error)
			return res.status(403).json({message: orderStatus.error})
		const orderDetails = await Order.create({amount: amount,
			orderDate: orderDate,
			productId: productId,
			userId: userId
	})
		return res.status(200).json({message: orderStatus.message,
			order: orderDetails,
			product: orderStatus.product
		})
	} catch (err){
			return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.updateOrderStatus = async (req, res) => {
	const {status, orderId} = req.body;
	try{
		const order = await Order.update( {status},
			{where: {id: orderId}})
		return res.status(200).json({message: "Status updated sucessfully", order})
	} catch (err) {
		return res.status(500),json({message: "Internal server error", error: err.message})
	}
}

exports.getOrderStatus = async (req, res) => {
	const {orderId} = req.params;

	try{
		const orderStatus = await Order.findOne({ where: {id: orderId}})
		return res.status(200).json(orderStatus.status)
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.cancelOrder = async (req, res) =>{
	const {productId, orderId} = req.body;
	const sign = '+';
	if (!orderId || !productId)
		return res.status(400).json({message: "Incomplete request"})
	try{
		orderToBeDeleted = await Order.findByPk(orderId)
		if (!orderToBeDeleted)
			return res.status(403).json({message: "order not found"})

		const orderStatus = await productStockUpdate(productId, orderToBeDeleted.amount, sign)
		if (orderStatus.error)
			return res.status(403).json({message: orderStatus.error})
		await Order.destroy({ where :{id: orderId}});

		return res.status(200).json({message: orderStatus.message, order: 'Cancelled', product: orderStatus.product,})
	} catch (err){
			return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.getOrders = async (req, res) => {
	const {userId} = req.body;
try{
	if (!userId)
		return res.status(400).json({message: "Incomplete request"});
	const orders = await Order.findAll({ where: {userId: userId}});
	return res.status(200).json(orders);
} catch (err) {
	return res.status(500).json({message: "Internal server error", error: err.message})
}
}