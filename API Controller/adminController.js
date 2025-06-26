import order from "../Schema Creation/Order.js";

export const getAdminOrders = async(req,res) => {

    try {

    const orders = await order.find().sort({ createdAt: -1 });

    res.status(201).json({
        success: true,
        message: 'admin got the orders',
        data: orders
    });

  } catch (err) {

    res.status(500).json({
        success: false,
        message: 'admin failed to fetch orders',
        error: err
    });

  }

}

export const deleteAdminOrders = async(req,res) => {

    try {

    await order.findByIdAndDelete(req.params.orderId);
    res.status(201).json({
        success: true,
        message: 'order deleted successfully'
    });

  } catch (err) {

    res.status(500).json({
        success: false,
        message: "Failed to delete order",
        error: err
    });

  }

}

export const filterAdminOrders = async(req,res) => {

    try {

    const orders = await order.find({ paymentMethod: req.params.method });
    res.status(201).json({
        success: true,
        message: 'filtered orders successfully',
        data: orders 
    });

  } catch (err) {

    res.status(500).json({
        success: false,
        message: "Failed to filter orders",
        error: err
    });

  }

}



export const getAdminMetrics = async (req, res) => {

  try {

    const orders = await order.find();

    if (!orders.length) {
      return res.status(200).json({
        success: true,
        message: "No orders found",
        totalOrders: 0,
        totalRevenue: 0,
        paymentDistribution: {}
      });
    }

    let totalRevenue = 0;
    const paymentCount = {};

    orders.forEach((order) => {
      totalRevenue += order.totalAmount;

      const method = order.paymentMethod;
      paymentCount[method] = (paymentCount[method] || 0) + 1;
    });

    const totalOrders = orders.length;

    
    const paymentDistribution = {};
    Object.entries(paymentCount).forEach(([method, count]) => {
      paymentDistribution[method] = ((count / totalOrders) * 100).toFixed(2);
    });

    res.status(200).json({
      success: true,
      totalOrders,
      totalRevenue,
      paymentDistribution
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch metrics",
      error: err.message

    });
  }

};
