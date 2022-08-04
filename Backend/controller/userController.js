// internal imports
const User = require("../models/UserSchema");
const sendToken = require("../utils/jwtToken");
const { SendEmail } = require("../utils/sendEmail");
const crypto = require("crypto");
const Product = require("../models/ProductSchema");

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
    res.status(200).json({
        success: true,
        message: "profile Updated successfully"
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


// Get all users only -- ((Admin)) can access.
exports.getAllUsers = async(req, res, next) => {
 try {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user
  })
 } catch (error) {
   res.status(404).json({error: error.message})
 }
}

// Get single users only -- ((Admin)) can access.
exports.getSingleUser = async(req, res, next) => {
 try {
  const user = await User.findById(req.params.id);

  if(!user){
    return next("User doesn't excist!")
  }

  res.status(200).json({
    success: true,
    user
  })
 } catch (error) {
   res.status(404).json({error: error.message})
 }
}



// update User Role  -- ((Admin))
exports.updateRole = async(req, res, next) => {
  try {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    // we will add cloudinery later.

    const user = await User.findByIdAndUpdate(req.params.id, userData, {new: true})
    res.status(200).json({
        success: true,
        message: "User Role Updated successfully"
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


// Delete User -- ((Admin))
exports.DeleteUser = async(req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);

    if(!user){
      return next("User doesn't exist!");
    }else{
      user.remove();
    }

    res.status(200).json({
        success: true,
        message: "Deleted successfully"
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}



// create Product review & update review...
exports.createReview = async(req, res, next) => {
  try {
    const {rating, comment, productId} = req.body;
    const review = { 
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment
    }

    const product = await Product.findById(productId);

    // finding this user that has already reviewed on this product or not.
    const isReviewed = product.reviews.find(rev => rev.user === req.user._id );
    if(isReviewed){
      product.reviews.forEach(rev => {
        rev.rating = rating,
        rev.comment = comment
      })
    }else{
       product.reviews.push(review);
       product.numberOfReviews = product.reviews.length;
    }
  
    // calculate avarage rating & set on ratings.
    let avg = 0;
    product.ratings = product.reviews.forEach(rev => {
      avg =+ rev.rating
    })
    // 2, 3, 5, 6 = 16/4 => avg = 4
    product.ratings = avg / product.reviews.length;
  
    await product.save({validateBeforeSave: false})
    res.status(200).json({
      success: true,
    });

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


// Geting all reviews of a Products.
exports.getAllReviews = async(req, res, next) => {
  try {
    const product = await Product.findById(req.query.id);

    if(!product){
      return next("Product not Found!");
    }
    res.status(200).json({
      success: true,
      reviews: product.reviews
    })

  } catch (error) {
    res.status(404).json({error: error.message})
  }

}


// Delete Review
exports.DeleteReview = async(req, res, next) => {
  try {
    const product = await Product.findById(req.query.productId);
    if(!product){
      return next("Product not Found!");
    }

   const reviews  = product.reviews.filter(rev => {
     rev._id.toString() !== req.query.id.toString()
   })

   // calculate avarage rating & set on ratings.
    let avg = 0;
    reviews.forEach(rev => {
      avg =+ rev.rating 
    })

    const ratings = avg / reviews.length;

    const numberOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
      req.query.productId, 
      { reviews,
        rating: Number(ratings),
        numberOfReviews
      },{new: true});

    res.status(200).json({
      success: true,
      message: "successfully deleted"
    })

  } catch (error) {
    res.status(404).json({error: error.message});
  }

}
