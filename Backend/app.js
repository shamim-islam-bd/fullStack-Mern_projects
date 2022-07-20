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


//syncronous error handling.
// app.use((req, res, next)=>{
//     next("Page not found!")
// })


// Server or Programmer Common error handling.
app.use(errorHandler);


//syncronous error handling.
// app.use((err, req, res, next)=>{
//    if(res.headersSent){
//     next("there was a Problem");
//    }else{
//     if(err.message){
//         res.status(500).send(err.message)
//     }else{
//         res.status(500).send("There was an error!")
//     }
//    }
// })


// app listing
exports.AppServer = app.listen(process.env.PORT, () =>{
    console.log(`App listing on ${process.env.PORT}`)
})