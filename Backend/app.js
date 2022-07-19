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


// external imports
const express = require('express')
const dotenv = require('dotenv');

// internal imports
const { getAllProducts } = require('./controller/ProductController');
const DataBaseConfiguration = require('./config/database');

// config calling.
const app = express();
dotenv.config();

// response parses 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// database Connection
DataBaseConfiguration();

// Routings.
app.use('/', getAllProducts)


// 404 error handling.


// Common error handling.


// app listing
app.listen(process.env.PORT, () =>{
    console.log(`App listing on ${process.env.PORT}`)
})