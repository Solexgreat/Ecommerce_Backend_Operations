const argon2 = require('argon2')
const {User} = require('../models')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
	const {email, name, password} = req.body
	console.log(req.body);
	if (!email || !name || !password)
		return res.status(400).json({ message: "Incomplete user details" });
	try{
		//Checking if the user exist
		let user = await User.findOne({where: {email}})
		if (user)
			return res.status(403).json({message: "User already exsit"})
		//hashing password
		hash_password = await argon2.hash(password);
		user = await User.create({email, name, hashed_password: hash_password});
		res.status(201).json({ message: "User created successfully", user});
		} catch (err) {
			return res.status(500).json({message: "Internal server error", error: err.message})
		}

}


exports.login = async (req, res) => {
	const {email, password} = req.body
	let user = await User.findOne({where: {email}})
		if (!user)
			return res.status(403).json({message: "Email doesn't exsit"})
		try{
			const isPasswordValid = argon2.verify(user.hashed_password, password)
			if (!(isPasswordValid))
				res.status(400).json({message:"Incorrect password"})

			const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,
				{expiresIn: '1h'
				}
			);
 			res.status(200).json({message: "Login successfull", token });
		} catch (err){
			return res.status(500).json({message: "Internal server error", error: err.message})
		}
}