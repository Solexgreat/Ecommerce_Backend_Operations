const express = require('express');
const {signup} = require('../controller/authController');
const {login} = require('../controller/authcontroller');
const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);

module.exports = router;