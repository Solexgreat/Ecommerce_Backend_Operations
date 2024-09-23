const {Review} = require('../models');
const {Product} = require('../models')


exports.createReview = async (req, res) => {
	const {rate, comment} = req.body;
	const {productId} = req.params;
	const {userId} = req.user.id;

	try{
		const product = await Product.findOne({where: {id: productId}});
		if (!product)
			return res.status(400).json({message: "Product not found"});
		const review = await Review.create({rate: rate,
			comment: comment,
			productId: productId,
			userId: userId
		})
		return res.status(200).json(review);
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message});
	}
}

exports.updateReview = async (req, res) =>{
	const {reviewId} = req.params;
	const {comment} = req.body;
	try{
		let review = await Review.findByPk(reviewId);
		if (!review)
			return res.status(400).json({message: "Review not found"});
		await Review.update({comment}, {where: reviewId});
		review = await Review.findByPk(reviewId)
		return res.status(200).json(review);
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message});
	}
}