const jwt = require('jsonwebtoken');
const User = require("../models/UserSchema");;


// User Authentications form here.
exports.isAuthentication = async (req, res, next) =>{
    try {
        const {token} = req.cookies;
        // console.log(token);

        if(!token){
            return next("Please login to access this.")
        }else{
         const decodedData = jwt.verify(token, process.env.JWT_SECRET);
         req.user = await User.findById(decodedData.id);
         
         next();
        }

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}



exports.authorizationROle = (...roles) =>{
    try {
        // console.log("first")
        return (req, res, next) => {
        //parameter a ja pabe otar ste ata mil na hole this.   
        console.log(req.user.role)
        console.log(roles)
           if(!roles.includes(req.user.role)){
             return next(`Role: ${req.user.role} is not allowed this Route.`);
           }
           
        }
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}