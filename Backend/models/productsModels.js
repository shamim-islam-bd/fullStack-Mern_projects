const mongoose = require('mongoose');
// const { Schema } = mongoose;

const productSchema =  new mongoose.Schema({
    name: {
     type: strings,
     required: [true, "Please Enter Products Name."],
     trim: true,
    },
    description: {
     type: string,
     required: [true, "Please Enter Products Description."]
    },
    price: {
        type: number,
        required: [true, "Please Enter Products Price."],
        maxLength: [8, "Price can't exceed 8 character."] 
    },
    rating: {
        type: number,
        default: 0
    },
    image: [
      {
        public_id: {  
            type: string,
            required: true
         },
        url: {  
            type: string,
            required: true
         },
      }
    ],
    categories: {
        type: string,
        required: [true, "Please Enter Products Categories."],
    },
    stock: {
        type: number,
        required: [true, "Please enter Products Stock."],
        maxLength: [4, "Price can't exceed 8 character."],
        default: 1
    },
    numberOfReviews: {
        type: number,
        default: 0,

    },
    reviews: [
      {
        name: {
            type: String,
            required: true,
        },
        rating: {
            name: String,
            required: true,
        },
        comments: {
            type: string,
            required: true,
        }
      }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

})


module.exports = mongoose.model("Product", productSchema)