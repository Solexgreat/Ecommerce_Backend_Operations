const express = require('express');
const router = express.Router();
const {addToCart, removeFromCart, viewCart} = require("../controller/cartController")
const {authMiddelWare} = require("../controller/authMiddleware")


router.post("/add", authMiddelWare, addToCart);
router.delete("/remove/:productId", authMiddelWare, removeFromCart);
router.get("/", authMiddelWare, viewCart);

module.exports = router;

