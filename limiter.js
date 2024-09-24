const rateLimit = require('express-rate-limit');


const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	keyGenerator: (req, res) => req.user.id,
	message: "Too many request from this user, try again later"
})
