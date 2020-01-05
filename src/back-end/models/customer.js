const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const customerSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        minlenghth: 6,
        maxlenghth: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlenght: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    confirmPassword: {
        type: String,
        minlength: 8,
        maxlength: 255
    },
    dateOfBirth: {
        type: Date
    },
    driverLicenseNumber: {
        type: String,
    }
})

customerSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, 'S3cr3t');
    return token;
}


const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer){
    const schema = {
        login: Joi.string().min(6).max(50).required(),
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(100).required().email(),
        password: Joi.string().min(8).max(255).required(),
        confirmPassword: Joi.string().min(8).max(255).required()
        }
    return Joi.validate(customer, schema);
};
function validateLogin(customer) {
    const schema = {
        login: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(8).max(255).required()
    };
    
    return Joi.validate(customer, schema);
};

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;
exports.validateLogin = validateLogin;