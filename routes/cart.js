const express = require('express');
const router = express.Router();
const {addToCart, removeFromCart, viewCart} = require("../controller/cartController")


router.post("/addTocart", addToCart);
router.post("/removeFromCart", removeFromCart);
router.post("viewCart", viewCart);

module.exports = router;

