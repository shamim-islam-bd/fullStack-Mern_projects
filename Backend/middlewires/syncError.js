
//syncronous error handling.
// app.use((req, res, next)=>{
//     next("Page not found!")
// })



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
