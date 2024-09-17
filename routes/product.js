const express = require('express');
const router = express.Router();
const {createProduct} = require('../controller/authcontroller')


router.post('/createProduct', createProduct);