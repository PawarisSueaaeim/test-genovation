import express from "express";
import dotenv from "dotenv";
import { readdirSync } from "fs";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connectToDatabase } from "./lib/dbConnection.js";

const start = async (): Promise<void> => {
    dotenv.config({
        path: "./.env",
    });
    await connectToDatabase();
    const port: number | string = process.env.HTTP_PORT || 4000;

    const app = express();

    app.use(cors());
    app.use(morgan("dev"));
    app.use(bodyParser.json({
        limit: '10mb'
    }));

    const routeFiles = readdirSync("./src/routes");
    for (const file of routeFiles) {
        const route = await import(`./routes/${file}`);
        app.use("/api", route.default);
    }

    app.listen(port, () => {
        console.log(`Server is running on port ${process.env.HTTP_PORT}`)
    });
};

start();