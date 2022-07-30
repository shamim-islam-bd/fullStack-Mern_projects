const jwt = require('jsonwebtoken');
const User = require("../models/UserSchema");;


// User Authentications form here.
exports.isAuthentication = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        // console.log(token);

        if(!token){
            res.status(401).json({error: "unAuthorised"});
            next();
        }else{
         const decodedData = jwt.verify(token, process.env.JWT_SECRET);
         req.user = await User.findById(decodedData.id);
         
         next();
        }

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


// Authorization By -----ROle
exports.authorizationROle = (...roles) => {
    try {
        return (req, res, next) => {
          const isAdmin = roles.includes(req.user.role)

          if(isAdmin){
            next() // getAllProducts a jabe if admin thake.
          }else{
            res.status(401).json({ success: false, Role: `${req.user.role} is not allowed this Route.`});
          }
        }
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}