import mongoose, { Schema } from "mongoose";

export interface IDoctor {
    firstName: string;
    lastName: string;
    timeSlot: {day: Date, startTime: Date, endTime: Date}[];
    specialty: string;
}

const doctorSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    timeSlot: [{
        day: { type: Date, required: false },
        startTime: { type: Date, required: false },
        endTime: { type: Date, required: false },
    }],
    specialty: { type: String, required: true },
});

export default mongoose.model<IDoctor>("Doctor", doctorSchema);