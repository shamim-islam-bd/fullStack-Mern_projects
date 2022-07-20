//------All Steps------
// external imports
// internal imports
// config calling.
// database Connection
// response parses 
// Routings
// 404 error handling.
//Common error handling.
// app listing

//JOI Validation Schema to validate request body 
//mongoose relation




// external imports
const express = require('express')
const dotenv = require('dotenv');

// internal imports
const productRoute = require('./routes/productRouter')
const DataBaseConfiguration = require('./config/database');
const { notFoundPage, errorHandler } = require('./middlewires/errorHandler');

// config calling.
const app = express();
dotenv.config();

// response parses 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// database Connection
DataBaseConfiguration();

// Routings.
// app.use('/', getAllProducts);
app.use('/products', productRoute);


// 404 page error handling.
app.use(notFoundPage);


// Default | Server | Programmer Common error handling.
app.use(errorHandler);


// app listing
// exports.AppServer = 
app.listen(process.env.PORT, () =>{
    console.log(`App listing on ${process.env.PORT}`)
})