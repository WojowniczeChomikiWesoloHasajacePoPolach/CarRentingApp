const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleStrategy = require('passport-google-oauth');
const localStrategy = require('passport-local');




//auth with google

// passport.use(new googleStrategy({
//     // options for the google start
//     clientID: '537803304374-l4t0hm7vq1s4em4febq4nh4r8re7morv.apps.googleusercontent.com',
//     clientSecret: 'TdeU89tEmy5kdC7FgNPQ3E9i'
// }), () =>{
//     //passport callback function
// }
// );


router.get('/google/auth', async (req,res) => {

    res.send('Logging in with google');

});

//logout

router.get('/logout', async(req,res) => {
    res.send('Logging out')
});

// U W A G A

// IZA I KAMIL, JAK BĘDZIECIE DODAWAĆ TUTAJ SWÓJ KOD TO PRZY ADRESIE
// DODAWAJCIE NAJPIERW NAZWĘ SWOICH SOCIAL MEDIÓW A PÓŹNIEJ RESZTĘ ŚCIEŻKI
// ABY SIĘ NIC NIE POGUBIŁO, TAK MOŻEMY ZROBIĆ WSZYSTKO W JEDNYM PLIKU
// BEZ WIĘKSZYCH KONFLIKTÓW.
// PRZYKŁAD MÓJ MACIE POWYŻEJ, PISAŁEM CAPS LOCKIEM ŻEBYŚCIE TO PRZECZYTALI
// Miłej zabawy :D



module.exports = router;