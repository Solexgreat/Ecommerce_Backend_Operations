const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next)=> {
	// Get token request
	const token = req.header('Authorization')

	// Check if token  exist
	if (!token) {
		return res.status(400).json({message: "No token, authorization denied"})
	}

	try {
		// Verify the token
		const jwtToken = token.split(" ")[1];
		console.log(jwtToken);
		console.log(process.env.JWT_SECRET);

		const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
		// Attach user information to user object
		req.user = decoded.user;
		next();
		return
	} catch (err) {
		return res.status(401).json({message: "Token is not valid", error: err.message})
	}
}

module.exports = authMiddleware;