const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')
const cartRoutes = require('./routes/cart')

const app = express()

dotenv.config(); //Load variables from the env

//Middelware to parde incoming resquest JSON
app.use(bodyParser.json());

// Serve the routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', cartRoutes);

// Default route for testing the server
app.get('/', (req, res) => {
	res.send('Welcome to the API!');
});

// Error handling middleware
app.use((err, req, res, next) =>{
	res.status(500).json({error: err.message})
});


//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
	console.log(`Server is running on port ${PORT}`);
});
