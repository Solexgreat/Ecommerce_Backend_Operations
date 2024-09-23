const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')
const cartRoutes = require('./routes/cart')
const paymentRoutes = require('./routes/payment')
const reviewRoutes = require('./routes/review')
const {apiLimiter} = require('./limiter')

const app = express()

dotenv.config(); //Load variables from the env

//Middelware to parde incoming resquest JSON
app.use(bodyParser.json());

// Serve the routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/review', reviewRoutes);

// Limit the number of IP address
app.use(apiLimiter);

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
