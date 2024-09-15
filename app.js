const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');


// Middleware to parse incoming requests as JSON
const app = express()

dotenv.config(); //Load variables from the env

app.use(bodyParser.json());

// Serve the routes
app.use('api', userRoutes);

// Default route for testing the server
app.get('/', (res, req) => {
	res.send('Welcome to the API!');
});

// Error handling middleware
app.use((err, res, req, next) =>{
	res.status(500).json({error: err.message})
});


//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
	console.log(`Server is running on port ${PORT}`);
});
