const verifyToken = require('../middleware/tokenVerify');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const {Car, validate} = require('../models/car.js');


getCars = async (req, res) => {
    const cars = await Car.find().sort('brand');
    res.send(cars);
}
getCar = async (req, res) => {
    const car = await Car.findById(req.params.id);
    if(!car) return res.status(404).send('The car with the given ID was not found.');
    res.send(car);
}
addCar = async (req, res) => {

    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //sprawdzenie czy dane auto istnieje w bazie danych

    let car = await Car.findOne({model: req.body.model});

    // jeśli auto znajduje się w bazie danych to powiększa ich ilość


   //jeśli nie znajduje się w bazie danych to doda do bazy i przypisze ilość = 1
    car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        motor: req.body.motor,
        track: req.body.track,
        power: req.body.power,
        height: req.body.height,
        width: req.body.width,
        length: req.body.length,
        amountOfCars: 1
    });

    await car.save();
    res.send(car);
};

updateCar = async (req, res) => {
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
        amountOfCars: req.body.amountOfCars
       }
   },{new:true})

    if(!car) return res.status(404).send('The car with the given ID was not found.');

    res.send(car);
};

deleteCar = async (req,res)=>{
    const car = await Car.findByIdAndRemove(req.params.id);

    if(!car) return res.status(404).send('The car with the given ID was not found.');

    res.send(car);
};


module.exports = {getCars, getCar, addCar, updateCar, deleteCar}; 
