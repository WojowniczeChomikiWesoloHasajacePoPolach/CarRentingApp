const express = require('express');
const customerController = require('../controllers/customers')
const router = express.Router();

router.post('/register', customerController.customerRegister);

module.exports = router;