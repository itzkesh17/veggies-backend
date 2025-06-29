import mongoose from "mongoose";

const users = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            unique: true
        }
    }
)

const user = mongoose.model("userDetails", users)

export default user;