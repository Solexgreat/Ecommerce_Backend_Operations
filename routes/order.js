const express = require('express');
const router = express.Router();
const {order} = require('../controller/ordercontroller')
const {cancelOrder} = require('../controller/ordercontroller')
const {getOrders} = require('../controller/ordercontroller')
const {updateOrderStatus} = require('../controller/ordercontroller')
const {getOrderStatus} = require('../controller/ordercontroller')
const authMiddleware = require("../controller/authMiddleware")


router.post('/:productId/', authMiddleware,  order);
router.delete('/:orderId/cancel', authMiddleware, cancelOrder);
router.get('/', authMiddleware, getOrders);
router.get('/:orderId/Status', authMiddleware, getOrderStatus);
router.put('/update-status', authMiddleware, updateOrderStatus);

module.exports = router;