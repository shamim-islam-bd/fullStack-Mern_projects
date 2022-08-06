const Order = require("../models/orderSchema")
const Product = require("../models/ProductSchema")

// Adding a new order... 
exports.newOrder = async (req, res, next) =>{
  try {
    const {
        shippingInfo,orderItems, paymentInfo,itemsPrice,
        taxPrice, shippingPrice, totalPrice, orderStatus,
    } = req.body;

    const order = await Order.create({
        shippingInfo, orderItems,
        paymentInfo, itemsPrice,
        taxPrice, shippingPrice,
        totalPrice, orderStatus,
        paidAt: Date.now(),
        user: req.user._id
    });

    res.status(200).json({
        success: true,
        order,
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

// Geting logged in user Single Orders.
exports.getSingleOrder = async(req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    res.status(200).json({
        success: true,
        order
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

// Geting logged in user All Orders
exports.MyOrders = async(req, res, next) => {
  try {
    const orders = await Order.find({user: req.user._id});

    res.status(200).json({
        success: true,
        orders
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


// Geting logged in user All Orders by --- (Admin)
exports.getAllOrders = async(req, res, next) => {
  try {
    const orders = await Order.find()
    let totalAmout = 0;
    orders.forEach(order=>{
        totalAmout =+ order.totalPrice;
    })

    res.status(200).json({
        success: true,
        orders,
        totalAmout
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}



// Update Order Status by --- (Admin)
exports.updateOrder = async(req, res, next) => {
  try {
    // forntend theke order id ta pabo seta schamar ste validation hbe.
    const order = await Order.findById(req.params.id)

    // Order status checking from here.
    if(order.orderStatus === "Delivered"){
        return res.status(404).json({
            message: "You have already delivered Order."
        })
    }else {
        // Order delivery howar por jeno product quantity update hoy & product na thakle outOfStock dekhay.
        if(!order){
          res.status(404).json({message: "Order not found with this ID"});
        }else{
          order.orderItems.forEach(async(order) => {
            await updateStock(order.product, order.quantity);
          });

          order.orderStatus = req.body.status;
          // Order status sending from here.
          if(req.body.status === "Delivered"){
            order.delivereAt = Date.now();
          }
        }
    }

    await order.save({validateBeforeSave: false})

    res.status(200).json({
        success: true,
        order,
    })

  } catch (error) {
    res.status(404).json({error: error.message})
  }
};

// updating Product Stock
async function updateStock(id, quantity) {
  const product = await Product.findById(id)
  product.stock -= quantity;
  await product.save({validateBeforeSave: false})
}



// Delete Orders by --- (Admin)
exports.deleteOrder = async(req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if(!order){
      res.status(404).json({message: "No Products here!"})
    }

    await order.remove();
    res.status(200).json({
        success: true,
        message: "Deleted Successfully!"
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}
