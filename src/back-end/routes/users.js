//Importy
const express = require('express');
const usersController = require('../controllers/users')
const router = express.Router();


router.post('/login', usersController.adminLogin);
router.post('/register', usersController.addUser);
router.get('/:id', usersController.getUser);
router.get('/', usersController.getUsers);
router.put('/:id', usersController.adminUpdate);
router.delete('/:id', usersController.deleteUser);


module.exports = router;

