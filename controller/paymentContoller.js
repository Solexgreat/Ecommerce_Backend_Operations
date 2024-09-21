const Stripe  = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


exports.createPaymentIntent = async (req, res) => {
	const {amount, currency} = req.body;

	try{
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			payment_method_types: ['card']
		})
		res.status(200).json({clientSecret: paymentIntent.client_secret})
	} catch (err) {
		res.status(500).json({error: err.message})
	}
}