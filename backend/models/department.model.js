import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

export const departmentModel = mongoose.model("Department", departmentSchema)