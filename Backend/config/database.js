const mongoose = require('mongoose');

//1. Database connection.
const DataBaseConfiguration = () => {
    mongoose.connect(process.env.MONGO_CONNECTION)
   .then(()=>{console.log("Database connection Succesful")})
   .catch((err)=>{console.log(err)})

}

module.exports = DataBaseConfiguration;
