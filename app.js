const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes');


const app = express()

dotenv.config(); //Load variables from the env

//Middelware to parde incoming resquest JSON
app.use(bodyParser.json());

// Serve the routes
app.use('/api', routes);

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
