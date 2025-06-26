import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectMongo = async() => {

     try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected Successfully!");
        
     } catch (error) {

        console.error("error: ", error);
        process.exit(1);
        
     }
}

export default connectMongo;