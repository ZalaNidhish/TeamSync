import {userModel} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import {createTokens} from '../utils/token.util.js'

export const registerUserController = async (req, res)=>{

    const {name, email, phone, password} = req.body

    const isAlreadyUserExist = await userModel.findOne({email})

    if(isAlreadyUserExist){
        return res.status(400).json({
            message: "User Already Exists with this email"
        })
    }

    const user = await userModel.create({name, email, phone, password: await bcrypt.hash(password, 10)})

    const {accessToken, refreshToken} = createTokens(user._id)

    await userModel.findByIdAndUpdate(user._id, {refreshToken})

    res.cookie("refreshToken", refreshToken, {maxAge: 7*24*60*60*1000})

    return res.status(200).json({
        message: "Registration Successfull",
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone
        },
        accessToken
    })
}