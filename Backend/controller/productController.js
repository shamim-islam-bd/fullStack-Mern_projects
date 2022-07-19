
// internal imports
const Product = require('../models/Product'); //from Product Schama

// createing Product by-- Admin
exports.createProduct = async(req, res, next) => {
 try {
    const product = await Product.create(req.body)
    // console.log(product);

    res.status(201).json({ product, Success: true })
 } catch (error) {
    res.status(404).json({error: error.message})
 }

}


// geting all product --
exports.getAllProducts = async(req, res) => {
    try {
       const products = await Product.find();
        // console.log(products);
       res.status(201).json({ products, Success: true })
     } catch (error) {
       res.status(404).json({error: error.message})
     }
}


// Geting Single Product --
exports.getProduct = async(req,res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id);
        res.status(201).json({product, Success: true})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}



// Updating Products by--- Admin
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


// Delete Products by--- Admin
exports.deleteProduct = async(req, res, next) => {
    try {
      const product= await Product.findById(req.params.id);
      if(!product){
        return res.status(404).json({
            Success: false,
            message: "Product Not Found"
        })
    }

    await product.remove();

    res.status(200).json({
        Success: true,
        message: "Product remove successfully."
    })

    } catch (error) {
       res.status(404).json({error: error.message})  
    }
} 