const Order = require("../models/orderSchema")

// Adding a new order... 
exports.newOrder = async (req, res, next) =>{
  try {
    const {
        shippingInfo,orderItems,paymentInfo,itemsPrice,
        taxPrice, shippingPrice,totalPrice, orderStatus
    } = req.body;

    const order = await Order.create({
        shippingInfo, orderItems,
        paymentInfo, itemsPrice,
        taxPrice, shippingPrice,
        totalPrice, orderStatus,
        paidAt:Date.now(), user:req.user._id
    })

    res.status(200).json({
        success: true,
        order,
    })
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}
