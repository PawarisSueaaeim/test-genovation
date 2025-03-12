import mongoose, { Schema } from "mongoose";

export interface IAuth {
    username: string;
    password: string;
}

const authSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export default mongoose.model<IAuth>("auth", authSchema);



