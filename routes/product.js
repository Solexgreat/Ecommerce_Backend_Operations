const express = require('express');
const router = express.Router();
const {createProduct} = require('../controller/productController');
const {deleteProduct} = require('../controller/productController');
const {updateProduct} = require('../controller/productController');
const {getProducts} = require('../controller/productController')


router.post('/create', createProduct);
router.delete('/delete', deleteProduct);
router.put('/update', updateProduct);
router.get('/', getProducts);

module.exports = router;