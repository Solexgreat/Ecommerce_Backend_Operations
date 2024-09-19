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
		const decode = jwt.verify(token, process.env.)
	}
}