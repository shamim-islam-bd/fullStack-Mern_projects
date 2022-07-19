const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name: {
     type: String,
     required: [true, "Please Enter Products Name."],
     trim: true,
    },
    description: {
     type: String,
     required: [true, "Please Enter Products Description."]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Products Price."],
        maxLength: [8, "Price can't exceed 8 character."] 
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
      {
        public_id: {  
            type: String,
            required: true
         },
        url: {  
            type: String,
            required: true
         },
      }
    ],
    categories: {
        type: String,
        required: [true, "Please Enter Products Categories."],
    },
    stock: {
        type: Number,
        required: [true, "Please enter Products Stock."],
        maxLength: [4, "Price can't exceed 8 character."],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0,

    },
    reviews: [
      {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comments: {
            type: String,
            required: true,
        }
      }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;