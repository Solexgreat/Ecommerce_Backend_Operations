const express = require('express');
const router = express.Router();
const {createProduct} = require('../controller/productController');
const {deleteProduct} = require('../controller/productController');
const {updateProduct} = require('../controller/productController');
const {getProducts} = require('../controller/productController')
const authMiddleware = require("../controller/authMiddleware")


router.post('/create', authMiddleware, createProduct);
router.delete('/delete/:id', authMiddleware, deleteProduct);
router.put('/update/:id', authMiddleware, updateProduct);
router.get('/', authMiddleware, getProducts);

module.exports = router;