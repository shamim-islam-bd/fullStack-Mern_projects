const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const userSchama = new mongoose.Schema({
   
    name: {
     type: String,
     required: [true, "Please enter your name!"],
     maxlength: [30, "name should be with in 30 char"],
     minlength: [4, "name should be atleast 4 char"],
    },
    email: {
     type: String,
     required: [true, "Please enter your email!"],
     unique: true,
     validate: [
        validator.isEmail, "Please enter your valied email"
     ]
    },
    password: {
     type: String,
     required: [true, "Please enter your password!"],
     minlength: [6, "password should be atleast 6 char"],
    },
    avader: {
          public_id: {  
              type: String,
              required: true
           },
          url: {  
              type: String,
              required: true
           },
    },
    role:{
      type: String,
      default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

// password bcrption here...
userSchama.pre("save", async function(next){
  if(!this.isModified("password")){
    next();
  }
  this.password = await bcrypt.hash(this.password, 10)
})


// JWT Token generate- used it in userControler.
userSchama.methods.getJWTToken = function(){
  const jwtProcess = jwt.sign({id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return jwtProcess;
}


// compare password......
userSchama.methods.comparePassword = async function(enteredpassword){
  const pass = await bcrypt.compare(enteredpassword, this.password)
  return pass;
}

// Generating password Reset token....
userSchama.methods.getResetPasswordToken = function() {
  const resetToken =  crypto.randomBytes(20).toString("hex");

  //Hasing & adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
   .createHash("sha256")
   .update(resetToken)
   .digest("hex");

   this.resetPasswordExpire = Date.now() + 15*60*1000;

   return resetToken;
};


const User = mongoose.model("User", userSchama);

module.exports = User;
