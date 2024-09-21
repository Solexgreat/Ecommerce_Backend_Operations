const express = require('express');
const router = express.Router();
const {addToCart, removeFromCart, viewCart} = require("../controller/cartController")
const authMiddleware = require("../controller/authMiddleware")


router.post("/add", authMiddleware, addToCart);
router.delete("/remove/:productId", authMiddleware, removeFromCart);
router.get("/", authMiddleware, viewCart);

module.exports = router;

