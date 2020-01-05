const express = require('express');
const customerController = require('../controllers/customers')
const router = express.Router();
const verifyToken = require('../middleware/tokenVerify');


router.post('/register', customerController.customerRegister);

router.post('/login', customerController.customerLogin);

router.get('/myaccount',verifyToken, customerController.getAccount);

router.put('/myaccount/update',verifyToken, customerController.customerUpdate);

router.delete('/myaccount/delete',verifyToken,customerController.customerDelete);

module.exports = router;