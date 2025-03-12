import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
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

export default connectDB;

