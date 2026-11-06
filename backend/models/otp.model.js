import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true,
        expiresAt: new Date(Date.now() + 2 * 60 * 1000)
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
})

export const otpModel = mongoose.model("OTP", otpSchema)