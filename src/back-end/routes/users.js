//Importy
const express = require('express');
const usersController = require('../controllers/users')
const router = express.Router();


router.post('/login', usersController.adminLogin);
router.post('/register', usersController.adminRegister);
router.get('/:id', usersController.myProfile);
router.get('/', usersController.getUsers);


module.exports = router;

