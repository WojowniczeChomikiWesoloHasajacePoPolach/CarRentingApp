const Joi = require('joi');
const mongoose = require('mongoose');

const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer: { 
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50
        },
        driverLicenseNumber: {
          type: Boolean,
          default: false
        },
        email: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
          unique: true
        }      
      }),  
      required: true
    },
    car: {
      type: new mongoose.Schema({
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
        registryNumber: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 8,
        },
        dailyRentalRate: {
            type: Number,
            required: true,
            min: 10
        }
      }),
      required: true
    },
    dateOut: { 
      type: Date, 
      required: true,
      default: Date.now
    },
    dateReturned: { 
      type: Date
    },
    rentalFee: { 
      type: Number, 
      min: 0
    }
  }));
  
  function validateRental(rental) {
    const schema = {
      customerId: Joi.objectId().required(),
      carId: Joi.objectId().required()
    };
  
    return Joi.validate(rental, schema);
  }
  
  exports.Rental = Rental; 
  exports.validate = validateRental;