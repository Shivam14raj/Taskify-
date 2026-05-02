import mongoose from "mongoose";
import colors from 'colors'
import dotenv from 'dotenv'

export const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(
            process.env.MONGO_URI)
          console.log(`mongodb connected successfully`.bgGreen.white)
    } 
    catch (error) {
        console.log(`mongodb error ${error}`)
    }
}