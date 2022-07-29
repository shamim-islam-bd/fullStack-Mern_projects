// internal imports
const User = require("../models/UserSchema");
const sendToken = require("../utils/jwtToken");


//Register a user...
exports.RegisterUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        
        const user = await User.create({
            name, email, password,
            avader:{
               public_id: "this is sample ID",
               url: "ProfileUrl"
            }
        });

        // const token = user.getJWTtoken();
        // res.status(201).json({success: true, token})
        sendToken(user, res);

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}



// Login user
exports.loginUser = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        
       //Checking if user has given password & email both.
       if(!email || !password) {
        return next("please enter emnail or password!")
       }

       const user = await User.findOne({email})
       if(!user){
        return next("Invailed email or password");
       }

      const isPasswordMatched = await user.comparePassword(password);

      if(!isPasswordMatched){
            res.status(401).json({message: 'invalid email or password'})
       }else {
        sendToken(user, res)
       }
      
    } catch (error) {
        next(error)
        res.status(404).json({error: error.message})
    }
}



// LogOut USer...
exports.LogOut = async (req, res, next) => {
    try {
        // It also works....
        // if(req.cookie){
        //     req.cookie("token",null,{
        //         expires: new Date(Date.now()),
        //         httpOnly: true,
        //     });
        // }
        res.cookie("token",null,{
            expires: new Date(Date.now()),
            httpOnly: true,
        });

        res.status(200).json({
            success: true,
            message: "logOut successFully"
        })
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}