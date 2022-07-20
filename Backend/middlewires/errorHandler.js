
// const createError = require('http-errors');

// const { AppServer } = require("../app");


// 404 not Found handler.
exports.notFoundPage =(req, res, next)=> {
    // next(createError(404, "Page not Found....!"))
    next(res.status(500).send("Page not Found!"))
}


// Default | Server | Programmer Common error handling.
exports.errorHandler = (req, res, next) => {
   if(res.headersSent){
    next("there was a Problem");
   }else{
    if(err.message){
        res.status(500).send(err.message)
    }else{
        res.status(500).send("There was an error!")
    }
   }
}


// Handle Unchaught Expressions.
process.on("uncaughtException",  err => {
    console.log(`error: ${err.message}`);
    process.exit(1);
})


// Wrong mongodb ID error
// if(error.name === "CastError"){
//     const message = `Resource Not Found. Invailed : ${error.path}`;
//     res.status(400).send(error.message);
// }