
// internal imports
const Product = require('../models/ProductSchema'); //from Product Schama
const ApiFeathers = require('../utils/apiFeathers')


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

      //Pagination value...
      const resultPerPage = 5;
    //   const productCount = await Product.countDocuments();


    // Passing parameters on the ApiFeathers class component from here.
      const apiFeathers = new ApiFeathers(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage)
    //   .productCount();

      const products = await apiFeathers.query;
        // console.log(products);

       res.status(201).json({Success: true, products})
     } catch (error) {
       res.status(404).json({error: error.message})
     }
}


// Geting Single Product --
exports.getSingleProduct = async(req,res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id);
        res.status(201).json({Success: true, product})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}



// Updating Products by--- Admin
exports.updateProduct = async(req, res, next) => {
    const id = req.params.id
    const body = req.body
    try {
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({
                Success: false,
                message: "Product Not Found"
            })
        }

       updatedproduct = await Product.findByIdAndUpdate(
            id, 
            body, 
            {new: true}
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
        message: "Product Deleted successfully."
    })

    } catch (error) {
       res.status(404).json({error: error.message})  
    }
} 
