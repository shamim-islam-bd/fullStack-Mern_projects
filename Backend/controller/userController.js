// internal imports
const User = require("../models/UserSchema");
const sendToken = require("../utils/jwtToken");
const { SendEmail } = require("../utils/sendEmail");
const crypto = require("crypto");

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



// Forgot Password......
exports.forgotPassword = async(req, res, next) => {
  try {
     
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return next("User not found!")
    }else{
      // Geting reset password token.
      const resetToken = user.getResetPasswordToken();
      await user.save({validateBeforeSave: false});

      // insted of this  -- http://localhost:5000/user/restPassword
      const resetPassUrl = `${req.protocol}://${req.get("host")}/user/password/reset/${resetToken}`;
      
      const message = `your password reset token is :- \n \n ${resetPassUrl} \n \n if you have not resqusted this email then please ignore it.`

      try {
        await SendEmail({
          email : user.email,
          subject :  `Ecommerce Website Password Recovery`,
          message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })

      } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false});
        return next(error.message);
      }
    }

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


// Reset Password.....
exports.resetPassword = async(req, res, next) => {
  try {
    //creating token Hasing 
  const resetPasswordToken = crypto
  .createHash("sha256")
  .update(req.params.token)
  .digest("hex");

  const user = await User.findOne({
   resetPasswordToken,
   resetPasswordExpire: {$gt: Date.now()},
  });

  if(!user){
    return next("Reset Passwerd token invalied has be expired!")
  }

  if(req.body.password !== req.body.confirmPassword){
    return next("password doesn't matched.");
  }
  
  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, res)
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};


// GettUser detailes........
exports.getUserDetails = async(req, res, next) => {
  try {
    const user = await User.findById(req.body.id);
    res.status(200).json({
        success: true,
        user,
    })
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

// update & Change user password........
exports.updateUserPassword = async(req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
          res.status(401).json({message: 'invalid email or old password is incorrect'})
     }
    
    if(req.body.newPassword !== req.body.confirmPassword){
        res.status(401).json({message: "Password doesn't match"})
    }

    user.password = req.body.newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        user,
    })
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

// update Profile........
exports.updateProfile = async(req, res, next) => {
  try {
    const userData = {
        name: req.body.name,
        email: req.body.email
    }

    // we will add cloudinery later.

    const user = await User.findByIdAndUpdate(req.user.id, userData, {new: true})
    console.log( "after update", user);

    res.status(200).json({
        success: true,
        message: "profile Updated successfully"
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}



