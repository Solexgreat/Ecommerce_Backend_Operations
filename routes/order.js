const express = require('express');
const router = express.Router();
const order = require('../controller/ordercontroller')


router.post('/order', order);

module.exports = router