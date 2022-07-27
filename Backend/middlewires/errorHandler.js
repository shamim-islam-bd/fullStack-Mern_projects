
// 404 not Found handler.
exports.notFoundPage =(req, res, next)=> {
    // next(createError(404, "Page not Found....!"))
    next(res.status(500).json("Page not Found!"))
}


// Default | Server | Programmer Common error handling.
exports.errorHandler = (req, res, next) => {
   if(res.headersSent){
    next("there was a Problem");
   }else{
    if(err.message){
        res.status(500).json(err.message)
    }else{
        res.status(500).json("There was an error!")
    }
   }
}


// Handle Unchaught Expressions.
process.on("uncaughtException",  err => {
    console.log(`error: ${err.message}`);
    process.exit(1);
})
