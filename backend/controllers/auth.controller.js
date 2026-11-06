import {userModel} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import {createTokens} from '../utils/token.util.js'
import {generateOTP} from '../utils/generateOTP.util.js'
import {otpModel} from '../models/otp.model.js'

export const registerUserController = async (req, res)=>{

    const {name, email, phone, password, department, bio, dateOfBirth} = req.body

    const isAlreadyUserExist = await userModel.findOne({email})

    if(isAlreadyUserExist){
        return res.status(400).json({
            message: "User Already Exists with this email"
        })
    }

    const otpModelEmail = await otpModel.findOne({email})

    if(!otpModelEmail || !otpModelEmail.isEmailVerified){
        return res.status(400).json({
            message: "Email not verified"
        })
    }

    const user = await userModel.create({name, email, bio, phone, department, dateOfBirth, password: await bcrypt.hash(password, 10)})

    const {accessToken, refreshToken} = createTokens(user._id)

    await userModel.findByIdAndUpdate(user._id, {refreshToken})

    res.cookie("refreshToken", refreshToken, {maxAge: 7*24*60*60*1000})
    
    return res.status(200).json({
        message: "Registration Successfull",
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            dateOfBirth: user.dateOfBirth,
            bio: user.bio
        },
        accessToken
    })
}

export const sendOTPController = async (req, res)=>{
    const {email} = req.body
    const otp = generateOTP()

    const user = await otpModel.findOne({email})

    try{
        if(user){
            await otpModel.findByIdAndUpdate(user._id, {otp, isEmailVerified: false})
        }else{
            await otpModel.create({email, otp})
        }

        // const sentMail = await sendOTP({email, otp})

        // if(!sentMail){
        //     return res.status(400).json({
        //         message: "OTP email Failed"
        //     })
        // }

        return res.status(200).json({
            message: "OTP sent Successfully",
            data: {
                otp
            }
        })
    }catch(err){
        console.log(err);
        return res.status(400).json({
            message: "OTP email Failed"
        })
    }
}

export const verifyOTPController = async (req, res)=>{
    const {email, otp} = req.body

    const user = await otpModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "Email mismatch"
        })
    }

    if(otp !== user.otp){
        return res.status(400).json({
            message: "Invalid OTP"
        })
    }

    await otpModel.findByIdAndUpdate(user._id, {isEmailVerified: true})

    return res.status(200).json({
        message: "Email Verification Complete."
    })

}