const jwt = require('jsonwebtoken');
const User = require("../models/UserSchema");;


// Authentications form here.
exports.isAuthentication = async (req, res, next) =>{
    try {
        const {token} = req.cookies;
        // console.log(token);

        if(!token){
            return next("Please login to access this.")
        }else{
         const decodedData = jwt.verify(token, process.env.JWT_SECRET);
         res.user = await User.findById(decodedData.id);
         
         next();
        }

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}