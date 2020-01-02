//kolekcja użytkownika
const Joi = require('joi');
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    model: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    motor: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    track: {
        type: Number,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    height:{
        type: String,
        required: true
    },
    width:{
        type: String,
        required: true
    },
    length:{
        type: String,
        required: true
    },
    registryNumber: {
        type: String,
        required: true
    },
    dailyRentalRate: {
        type: Number,
        required: true,
    }
});
const Car = mongoose.model('Car', carSchema);

//validacja

function validateCar(car){
    const schema = {
        brand: Joi.string().min(3).max(50).required(),
        model: Joi.string().min(3).max(50).required(),
        motor: Joi.string().min(1).max(10).required(),
        track: Joi.number().required(),
        power: Joi.string().required(),
        height: Joi.string().required(),
        width: Joi.string().required(),
        length: Joi.string().required(),
        amountOfCars: Joi.number()
    };

    return Joi.validate(car, schema)
};

//exportowanie

exports.Car = Car;
exports.validate = validateCar;