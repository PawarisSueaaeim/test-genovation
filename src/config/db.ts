import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectDB = async () => {
    dotenv.config({
        path: "./.env",
    });
    const HOST = process.env.DATABASE_HOST;
    const POST = process.env.DATABASE_PORT;
    const COLLECTION = process.env.DATABASE_COLLECTION;

    try {
        console.log(`Connecting to mongodb://${HOST}:${POST}/${COLLECTION}`);
        await mongoose.connect(`mongodb://${HOST}:${POST}/${COLLECTION}`);
        console.log(`Connected to mongodb://${HOST}:${POST}/${COLLECTION}`);   
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;

