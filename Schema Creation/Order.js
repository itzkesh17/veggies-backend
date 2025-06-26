import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userDetails",
            required: true
        },
        deliveryInfo: {
            name: String,
            email: String,
            phone: String,
            address: String
        },
        cartItems: [
            {
            id: String,
            title: String,
            price: Number,
            quantity: Number,
            image: String
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ["card", "upi", "netbanking", "cod"],
            required: true
        },
        paymentDetails: {
            cardDetails: {
            number: String,
            holder: String,
            expiry: String
            },
            upiId: String,
            bankName: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
})

const order = mongoose.model('OrderDetails', orderSchema);

export default order;