const argon2 = require('argon2')
const User = require('..models/user')

exports.signup = async (req, res) => {
	const {email, name, password} = req.body;
	if (!email || !name || !password )
		return req.status(400).json({ message: "Incomplete user details" });
	try{
		//Checking if the user exist
		let user = await User.findOne(email=email)
		if (user)
			return req.status(403).json({message: "User already exsit"})
		//hashing password
		hash_password = await argon2.hash(password);
		user = User.create({email, name, password: hash_password});
		res.status(201).json({ message: "User created successfully", user });
		} catch (err) {
			return res.status(500).json({message: "Internal server error", error: err.message})
		}

}