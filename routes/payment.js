const express = require('express')
const router = express.Router();
const {createPaymentIntent} = require('../controller/paymentContoller')


router.post('create_payment_intent', createPaymentIntent)

module.exports = router;