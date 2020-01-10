const {Rental, validate} = require('../models/rental');
const {Car} = require('../models/car');
const {Customer}= require('../models/customer');
const admin = require('../middleware/admin');
const auth = require('../middleware/tokenVerify');
const validateId = require('../middleware/validateId');
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);

router.get('/',[auth,admin] ,async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
  });

  router.get("/me", auth, async (req, res) => {
    const rentals = await Rental.find({ "user._id": req.user._id }).sort(
      "-dateOut"
    );
    res.send(rentals);
  });

  router.get('/:id',[auth, admin, validateId], async (req, res) => {
    const rental = await Rental.findById(req.params.id);
  
    if (!rental) return res.status(404).send('The rental with the given ID was not found.');
  
    res.send(rental);
  });
  
  router.post('/',auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');
  
    const car = await Car.findById(req.body.carId);
    if (!car) return res.status(400).send('Invalid car.');

    let rental = await Rental.lookup(req.user._id, req.body.carId);
      if (rental && !rental.dateReturned)
      return res.status(400).send('Car is already in rental');
  
    if (car.numberInStock === 0) return res.status(400).send('Car not in stock.');
  
    rental = new Rental({ 
      customer: {
        _id: customer._id,
        name: customer.name, 
        email: customer.email
      },
      car: {
        _id: car._id,
        brand: car.brand,
        model: car.model,
        motor: car.motor,
        registryNumber: car.registryNumber,
        dailyRentalRate: car.dailyRentalRate
      }
    });
    
    try {
      new Fawn.Task()
        .save('rentals', rental)
        .update('cars', {_id: car._id} ,{
          $inc: {numberInStock: -1}
        })
        .run();

        res.status(201).send(rental);
    } catch(ex) {
      res.status(500).send('Something failed');
    }
  });

  router.put('/:id', auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if(!customer) return res.status(400).send('Invalid customer');

    const car = await Car.findById(req.body.carId);
    if(!customer) return res.status(400).send('Invalid car');



    const rental = await Rental.findById(req.params.id);
    if (!rental) return res.status(404).send ('Rental with the given ID does not exist!');

    rental.set({
      customer: {
        name: customer.name, 
        email: customer.email
      },
      car: {
        brand: car.brand,
        model: car.model,
        motor: car.motor,
        registryNumber: car.registryNumber,
        dailyRentalRate: car.dailyRentalRate
      }
    });
    
    rental.save();
    res.send(rental);
});

  router.delete('/:id',[auth,validateId], async (req, res) => {
    const rental = await Rental.findByIdAndRemove(req.params.id);
  
    if (!rental) return res.status(404).send('The rental with the given ID was not found.');
  
    res.send(rental);
  });
  

  router.post("/return", auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);


    const rental = await Rental.lookup(req.user._id, req.body.carId);
    if (!rental) return res.status(400).send("Rental does not exist or return already processed.");
  
    rental.return();
  
    await new Fawn.Task()
      .update(
        "rentals",
        { _id: rental._id },
        { dateReturned: rental.dateReturned, rentalFee: rental.rentalFee }
      )
      .update(
        "cars",
        { _id: rental.car._id },
        {
          $inc: { numberInStock: 1 }
        }
      )
      .run();
  
    res.send(rental);
  });
  
  module.exports = router; 