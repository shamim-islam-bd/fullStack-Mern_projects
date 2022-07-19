
// internal imports
const Product = require('../models/Product'); //from Product Schama

// createing Product -- Admin
exports.createProduct = async(req, res, next) => {
 try {
    const product = await Product.create(req.body)
    // console.log(product);
    res.status(201).json({ product, Success: true })
 } catch (error) {
    res.status(404).json({error: error.message})
 }

}

// geting all product
exports.getAllProducts = async(req, res) => {
    try {
       const products = await Product.find();
        // console.log(products);
       res.status(201).json({ products, Success: true })
     } catch (error) {
       res.status(404).json({error: error.message})
     }
}


// Updating Products --- Admin
exports.updateProduct = async(req, res, next) => {
    try {
        const Product = await Product.findByID(req.params.id);
        if(!Product){
            return res.status(500).json({
                Success: false,
                message: "Product Not Found"
            })
        }

        const updatedproduct = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true, runValidators: true, useFindAndModify: false}
        )

        res.status(200).json({
            Success: true,
            updatedproduct
        })

    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
