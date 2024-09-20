const jwt = require("jsonwebtoken")


const authMiddleWare = (req, res, next)=> {
	// Get token request
	const token = req.header('Authorization')

	// Check if token  exist
	if (!token) {
		return res.status(400).json({message: "No token, authorization denied"})
	}

	try {
		// Verify the token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// Attach user information to user object
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({message: "Token is not valid"})
	}
}

module.exports = authMiddleWare;