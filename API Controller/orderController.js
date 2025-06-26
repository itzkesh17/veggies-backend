import order from '../Schema Creation/Order.js';
import { sendOrderGmail } from '../Gmail Sender/sendGmail.js';

export const createOrder = async(req,res) => {

    try {

    const newOrder = new order(req.body);
    const savedOrder = await newOrder.save();
    await sendOrderGmail(req.body.deliveryInfo.email, savedOrder);

    res.status(201).json(
        { 
            success: true, 
            message: "Order saved and email sent successfully",
            data: savedOrder
         });

  } catch (err) {

    res.status(500).json(
        { 
            success: false,
            message: "order failed", 
            error: err.message 
        });
  }

}

export const getAllOrders = async(req,res) => {

    try {
        const getOrders = await order.find();
        res.status(201).json({
            success: true,
            message: 'Got the all orders',
            data: getOrders
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while fetching orders",
            error: error.message
        })
    }
}