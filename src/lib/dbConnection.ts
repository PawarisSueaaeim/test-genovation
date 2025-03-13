import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectToDatabase = async () => {
    dotenv.config({
        path: "./.env",
    });

    const db = (await mongoose.connect(process.env.MONGODB_CONNECT_URL as string)).connection;

    db.on("error", console.error.bind(console, "connection error"));

    db.once("open", () => {
        console.log("Connected to MongoDB");
    });

    return db;
};