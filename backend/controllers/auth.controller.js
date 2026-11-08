import {userModel} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import {createTokens} from '../utils/token.util.js'
import {generateOTP} from '../utils/generateOTP.util.js'
import {otpModel} from '../models/otp.model.js'
import {userDraftModel} from '../models/userDraft.model.js'

export const registerUserController = async (req, res)=>{

    const {name, email, phone, password, department, bio, dateOfBirth, role="employee"} = req.body

    const isAlreadyUserExist = await userModel.findOne({email})

    if(isAlreadyUserExist){
        return res.status(400).json({
            message: "User Already Exists with this email"
        })
    }

    // const otpModelEmail = await otpModel.findOne({email})

    // if(!otpModelEmail || !otpModelEmail.isEmailVerified){
    //     return res.status(400).json({
    //         message: "Email not verified"
    //     })
    // }

    const user = await userModel.create({name, email, bio, phone, role, department, dateOfBirth, password: await bcrypt.hash(password, 10)})

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
            department: user.department,
            bio: user.bio,
            isApproved: user.isApproved,
            role: user.role
        },
        accessToken
    })
}

export const loginUserController = async (req, res)=>{
    
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "Inavalid credentials"
        })
    }

    const verify = bcrypt.compare(password, user.password)

    if(!verify){
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const {accessToken, refreshToken} = createTokens(user._id)

    await userModel.findByIdAndUpdate(user._id, {refreshToken})

    res.cookie("refreshToken", refreshToken)

    return res.status(200).json({
        message: "User Logged in Successfully.",
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            department: user.department,
            bio: user.bio,
            dateOfBirth: user.dateOfBirth,
            isApproved: user.isApproved
        },
        accessToken
    })

}

export const loginWithGoogleUserController = async (req, res)=>{
   
    const user = req.user

    const isUserRegistered = await userModel.findOne({email: user.emails[0].value})

    if(!isUserRegistered){
        console.log(user.id, user.displayName, user.emails[0].value, user.photos[0].value);
        const newUser = await userDraftModel.create({name: user.displayName, email: user.emails[0].value, googleID: user.id, avatar: user.photos[0].value})
        return res.json(newUser)
    }

    const {accessToken, refreshToken} = createTokens(isUserRegistered._id)

    const newUser = await userModel.findByIdAndUpdate(isUserRegistered._id, {refreshToken, googleID: user.id}, {returnDocument: 'after'})

    res.cookie("refreshToken", refreshToken)

    return res.status(200).json({
        message: "User Logged in Successfully.",
        data: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            phone: newUser.phone,
            department: newUser.department,
            bio: newUser.bio,
            dateOfBirth: newUser.dateOfBirth,
            isApproved: newUser.isApproved,
            googleID: newUser.googleID
        },
        accessToken
    })

}

export const sendOTPController = async (req, res)=>{
    const {email} = req.body
    const otp = generateOTP()

    const user = await otpModel.findOne({email})

    const userInUserModel = await userModel.findOne({email})

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
            otp,
            isUserAlreadyRegistered: !!userInUserModel
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
            message: "Email mismatch",
            verified: false
        })
    }

    if(otp !== user.otp){
        return res.status(400).json({
            message: "Invalid OTP",
            verified: false
        })
    }

    await otpModel.findByIdAndUpdate(user._id, {isEmailVerified: true})

    return res.status(200).json({
        message: "Email Verification Complete.",
        verified: true
    })

}
