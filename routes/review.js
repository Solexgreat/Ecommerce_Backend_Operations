const express = require('express');
const router = express.Router();
const {createReview} = require('../controller/reviewController');
const {updateReview} = require('../controller/reviewController');
const authMiddleware = require('../controller/authMiddleware')


router.post('/:productId/review',authMiddleware, createReview);
router.put('/:reviewId/update-comment',authMiddleware, updateReview);

module.exports = router;