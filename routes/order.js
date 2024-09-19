const express = require('express');
const router = express.Router();
const {order} = require('../controller/ordercontroller')
const {cancelOrder} = require('../controller/ordercontroller')
const {getOrders} = require('../controller/ordercontroller')



router.post('/order', order);
router.delete('/cancelOrder', cancelOrder);
router.get('/getOrders', getOrders);

module.exports = router;