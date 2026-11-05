import mongoose from "mongoose";
import { _config } from "./config.js";

export const connectDB = async ()=>{
    await mongoose.connect(_config.MONGO_URI)
    console.log("MongoDB connected.");
}
