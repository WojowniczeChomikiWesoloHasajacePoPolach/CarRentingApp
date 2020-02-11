const express = require('express');
const carsController = require('../controllers/cars')
const router = express.Router();

router.get('/', carsController.getCars);
router.get('/:id', carsController.getCar);
router.post('/', carsController.addCar);
router.put('/:id', carsController.updateCar);
router.delete('/:id', carsController.deleteCar);

module.exports = router;
