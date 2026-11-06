import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: function(){
            return !this.googleID
        }
    },
    googleID: {
        type: String,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
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
    role: {
        type: String,
        enum: ["employee", "admin"],
        default: "employee"
    },
    isApproved: {
        type: Boolean,
        default: false,
        required: true
    },
    isProfileComplete: {
        type: Boolean,
        default: false,
        required: true
    },
    refreshToken: {
        type: String
    }
})

export const userModel = mongoose.model("User", userSchema);