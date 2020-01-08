//Importy
const express = require('express');
const router = express.Router();
const {User, validateUser, validateLogin} = require('../models/user');
const bcrypt = require('bcryptjs');
const verifyToken = require('../middleware/tokenVerify');

// router.get('/me', verifyToken, async (req, res) => {
    
//         const user = await User.findById(req.userLogin._id).select('-password');

//     res.send(user);
    

// });

getUsers = async (req, res) => {
    const users = await User.find().sort('login');
    res.send(users);
}

myProfile = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    res.send(user);
}
//Rejestracja
adminRegister = async (req, res) => {
    
    //Walidacja
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };
    
    //Sprawdzenie czy jest w bazie dany login lub mail
    let mailTaken = await User.findOne({email: req.body.email});
    let loginTaken = await User.findOne({login: req.body.login});

    if (mailTaken) {
        return res.status(400).send('User with that email already exists.');
    }
    
    if (loginTaken) {
        return res.status(400).send('User with that login already exists.');
    }
    //jeżeli hasła nie są takie same to błąd
    if (req.body.password != req.body.confirmPassword) {
        return res.status(400).send('passwords are not the same!');
    }

    //Hash'owanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Tworzenie nowego użytkownika
    const newUser = new User({
        login: req.body.login,
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    //Zapisywanie w bazie
    try {
        await newUser.save()
        const token = newUser.generateAuthToken();
        res.header('x-auth-token', token).send({
                message: 'User created',
                login: newUser.login,
                email: newUser.email,
                _id: newUser._id
        });
    } catch (err) {
            res.status(400).send(err);
    }
};

//Logowanie
adminLogin = async (req, res) => {
    //Walidacja
    const { error } = validateLogin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };

    //Sprawdzanie czy użytkownik istnieje w bazie
    let userLogin = await User.findOne({login: req.body.login});
    if (!userLogin) {
        return res.status(400).send('Login or password is wrong.');
    }

    //Sprawdzenie poprawności hasła
    let validationPassword = await bcrypt.compare(req.body.password, userLogin.password)
    if (!validationPassword) {
        return res.status(400).send('Login or password is wrong.');
    }
    //wywołanie metody dla utworzenia tokenu
    const token = userLogin.generateAuthToken();
    res.header('x-auth-token', token).send(
        { 
            id: userLogin._id,
            login: userLogin.login,
            name: userLogin.name,
            email: userLogin.email,
            isAdmin: userLogin.isAdmin
        }
        );
};

// aktualizacja danych użytkownika, 
router.put('/:id', verifyToken, async (req, res) => {

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send ('User does not exist!');

    let currentPassword = req.body.currentPassword;
    let validationPassword = await bcrypt.compare(currentPassword, user.password)


    if (!validationPassword) {
        return res.status(400).send('Password is incorrect.');
    }

    let newPassword = req.body.newPassword;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);


    user.set({
        name: req.body.name,
        password: hashPassword
    });
    

    user.save();
    res.send(user);
});

router.delete('/:id', verifyToken, async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id)

    if(!user) return res.status(404).send('User does not exist!');
    res.send(user);

});

//Eksportowanie
module.exports = {adminLogin, adminRegister, myProfile, getUsers};