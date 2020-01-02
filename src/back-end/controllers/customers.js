const express = require('express');
const router = express.Router();
const {Customer, validateCustomer} = require('../models/customer');
const bcrypt = require('bcryptjs');
const verifyToken = require('../middleware/tokenVerify');


router.get('/myaccount',verifyToken, async (req, res) => {
    
    const customer = await Customer.findById(req.userLogin._id).select('-password');
    res.send(customer);
});

customerRegister = async (req, res) => {

    const { error } = validateCustomer(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };
    
    let mail = await Customer.findOne({email: req.body.email});
    let login = await Customer.findOne({login: req.body.login});

    if (mail) {
        return res.status(400).send('That email is already used!');
    }
    
    if (login) {
        return res.status(400).send('User with that login is already registered!');
    }

    if (req.body.password != req.body.confirmPassword) {
        return res.status(400).send('passwords are not the same!');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newCustomer = new Customer({
        login: req.body.login,
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    try {
        await newCustomer.save()

        //zapis tokena do localstorage
        const token = newCustomer.generateAuthToken();
    
        res.header('x-auth-token', token).send({
                message: 'User created',
                login: newCustomer.login,
                email: newCustomer.email,
                _id: newCustomer._id
        });
    } catch (err) {
            res.status(400).send("blad w zapisie");
    }
};

module.exports = {customerRegister}