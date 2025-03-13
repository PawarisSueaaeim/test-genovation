import { Response } from "express";

exports.createDoctor = async (reqeust: Request, response: Response) => {
    try {
        // response.status(200).send("created successfully");
    } catch (error) {
        response.status(500).send("Internal Server Error");
    }
};