const jwt = require('jsonwebtoken');

//Funkcja sprawdzająca czy użytkownik posiada odpowiednie uprawnienia
module.exports = function (req, res, next) {
    //Sprawdzenie czy istnieje token
    token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('Access denied.');
    };
    // let token = localStorage.getItem('id');
    if (!token) {
        return res.status(401).send('Access denied.');
    };

    //Walidacja tokenu
    try {
        const verified = jwt.verify(token, 'S3cr3t');
        req.userLogin = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token.')
    };
};
