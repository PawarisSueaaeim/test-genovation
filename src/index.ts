import express from "express";
import dotenv from "dotenv";
import { readdirSync } from "fs";
import connectDB from "./config/db";

const start = async () => {
    dotenv.config({
        path: "./.env",
    });
    const port: number | string = process.env.HTTP_PORT || 4000;

    const app = express();
    connectDB();
    

    app.get("/", (request, response) => {
        response.send("Hello World!");
    })


    app.listen(port, () => {
        console.log(`Server is running on port ${process.env.HTTP_PORT}`)
    });
};

start();