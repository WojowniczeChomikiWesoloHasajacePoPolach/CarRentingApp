//Importy modulow
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

//Importy z innych plików
const users = require('./routes/users')
const cars = require('./routes/cars');
const customers = require('./routes/customers');
const socialAuth = require('./routes/auth.js');
const rentals = require('./routes/rentals');

//Hello World na ścieżce / zapytania dla GET

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Nasluchuje portu ${port}...`);
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())



// Połączenie z bazą danych ONLINE

// mongoose.connect('mongodb+srv://dostepdobazy:chomikiwitka@chomikiwitka-a2ubx.gcp.mongodb.net/test?retryWrites=true&w=majority')
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...'));

// Połączenie z lokalną bazą danych

mongoose.connect('mongodb://localhost/test')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

//uzycie funkcji

app.use(express.json());
app.use('/admin/cars', cars);
app.use('/admin/user', users);
app.use('/customer', customers);
app.use('/auth', socialAuth);
app.use('/rental',rentals);
