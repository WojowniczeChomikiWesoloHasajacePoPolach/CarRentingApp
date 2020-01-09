const express = require('express');
const carsController = require('../controllers/cars')
const router = express.Router();

router.get('/', carsController.getCars);
router.get('/:id', carsController.getCar);
router.post('/', carsController.addCar);
router.put('/:id', carsController.updateCar);
router.delete('/:id', carsController.deleteCar);



// te dwie do przeniesienia do controllers/cars.js , powinny zastapić tamte
router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //sprawdzenie czy dane auto istnieje w bazie danych
    
    let car = await Car.findOne({model: req.body.model});
    car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        motor: req.body.motor,
        track: req.body.track,
        power: req.body.power,
        height: req.body.height,
        width: req.body.width,
        length: req.body.length,
        registryNumber: req.body.registryNumber,
        dailyRentalRate: req.body.dailyRentalRate,
    });

    await car.save();
    res.send(car);
});

router.put('/:id',async (req, res)=>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const car = await Car.findByIdAndUpdate(req.params.id,{
       $set: {
        brand: req.body.brand,
        model: req.body.model,
        motor: req.body.motor,
        track: req.body.track,
        power: req.body.power,
        height: req.body.height,
        width: req.body.width,
        length: req.body.length,
        registryNumber: req.body.registryNumber,
        dailyRentalRate: req.body.dailyRentalRate,
       }
   },{new:true})

    if(!car) return res.status(404).send('The car with the given ID was not found.');

    res.send(car);
});
module.exports = router;
