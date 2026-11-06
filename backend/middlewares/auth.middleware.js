import { userModel } from "../models/user.model.js"
import { readAccessToken } from "../utils/token.util.js"

export const authenticate = (req, res, next)=>{
   try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(400).json({
                message: "Access Token not found"
            })
        }
        const id = readAccessToken(token)
        
        if(!id){
            return res.status(400).json({
                message: "Corrupted Token"
            })
        }
        req.user = id
        next()
   }catch(err){
    return res.status(400).json({
        message: "Error in authentication",
        errors: err.message
    })
   }

}

export const authorize = (role)=>{
    return async(req, res, next)=>{
        const id = req.user

        if(!id){
            return res.status(400).json({
                message: "user id not found in request"
            })
        }

        const user = await userModel.findById(id)

        if(user.role !== role){
            return res.status(403).json({
                message: "Unauthorized User"
            })
        }
        next()
    }
}