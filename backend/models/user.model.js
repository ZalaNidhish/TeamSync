import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // department: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Department"
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
})

export const userModel = mongoose.model("User", userSchema);