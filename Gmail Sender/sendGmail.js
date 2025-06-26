import nodemailer from 'nodemailer';

export const sendOrderGmail = async(userMail, orderData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS
        }
    })

    const itemList = orderData.cartItems.map(
        (item) => `<li>${item.title} x ${item.quantity} = ₹${item.price * item.quantity}</li>`).join('')

    const mailOptions = {
    from: `"Vegean" <${process.env.EMAIL_USER}>`,
    to: userMail,
    subject: '🛒 Your Order Confirmation from Vegean!',
    html: `
      <h3>Thanks for your order, ${orderData.deliveryInfo.name}!</h3>
      <p><strong>Order Date:</strong> ${new Date(orderData.createdAt).toLocaleString()}</p>
      <p><strong>Payment Method:</strong> ${orderData.paymentMethod.toUpperCase()}</p>
      <p><strong>Total Amount:</strong> ₹${orderData.totalAmount}</p>
      <p><strong>Delivery Address:</strong> ${orderData.deliveryInfo.address}</p>
      <h4>Items Ordered:</h4>
      <ul>${itemList}</ul>
      <p>We'll keep you posted with delivery updates!</p>
    `
  };   
  
  await transporter.sendMail(mailOptions);
}