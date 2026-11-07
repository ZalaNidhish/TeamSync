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
        ref: "Department",
        required: true
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
        default: function(){
            return this.role == "admin"
        },
        required: function(){
            return this.role == "employee"
        }
    },
    isProfileComplete: {
        type: Boolean,
        default: function(){
            return this.role == "admin"
        },
        required: function(){
            return this.role == "employee"
        }
    },
    refreshToken: {
        type: String
    }
})

export const userModel = mongoose.model("User", userSchema);