const express = require('express');
const router = express.Router();
const {Customer, validateCustomer,validateLogin} = require('../models/customer');
const bcrypt = require('bcryptjs');
const verifyToken = require('../middleware/tokenVerify');


// router.get('/myaccount',verifyToken, async (req, res) => {
    
//     const customer = await Customer.findById(req.userLogin._id).select('-password');
//     res.send(customer);
// });

getAccount = async (req, res) => {
    
    const customer = await Customer.findById(req.userLogin._id).select('-password');
    res.send(customer);
};

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

customerLogin = async (req, res) => {
    
    const { error } = validateLogin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };

    let customerLogin = await Customer.findOne({login: req.body.login});
    if (!customerLogin) {
        return res.status(400).send('Login or password is wrong.');
    }

    let validPassword = await bcrypt.compare(req.body.password, customerLogin.password)
    if (!validPassword) {
        return res.status(400).send('Login or password is wrong.');
    }
    const token = customerLogin.generateAuthToken();
    localStorage.setItem('currentCustomer', JSON.stringify({ token: token}));
    res.header('x-auth-token', token).send(`${customerLogin.login} you are logged in.`);
};

customerUpdate = async (req, res) => {

    const customer = await User.findById(req.params.id);
    if (!customer) return res.status(404).send ('Customer does not exist!');

    let currentPassword = req.body.currentPassword;
    let validationPassword = await bcrypt.compare(currentPassword, customer.password)


    if (!validationPassword) {
        return res.status(400).send('Password is incorrect.');
    }

    let newPassword = req.body.newPassword;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);


    customer.set({
        name: req.body.name,
        password: hashPassword
    });
    

    customer.save();
    res.send(customer);
};

customerDelete = async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id)

    if(!user) return res.status(404).send('User does not exist!');
    res.send(user);

};

module.exports = {customerRegister, customerLogin, getAccount, customerUpdate,customerDelete}