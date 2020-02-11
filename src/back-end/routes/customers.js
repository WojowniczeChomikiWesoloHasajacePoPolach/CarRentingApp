const express = require('express');
const customerController = require('../controllers/customers')
const router = express.Router();
const verifyToken = require('../middleware/tokenVerify');


router.post('/register', customerController.customerRegister);
router.post('/login', customerController.customerLogin);
router.get('/:id', customerController.getAccount);
router.get('/', customerController.getCustomers);
router.put('/:id', customerController.customerUpdate);
router.delete('/:id',customerController.customerDelete);


module.exports = router;