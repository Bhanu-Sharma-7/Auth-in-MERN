import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is connected successfully`)
    } catch (error) {
        console.log(`MongoDB is not connected successfully`)
    }
}