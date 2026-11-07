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
        required: function(){
            return this.role == "employee"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: function(){
            return this.role == "employee"
        }
    },
    bio: {
        type: String,
        required: function(){
            return this.role == "employee"
        }
    },
    dateOfBirth: {
        type: String,
        required: function(){
            return this.role == "employee"
        }
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