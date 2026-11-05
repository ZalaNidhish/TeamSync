import jwt from 'jsonwebtoken'
import { _config } from '../config/config.js'

export const createTokens = (id)=>{
    const accessToken = jwt.sign({id}, _config.ACCESS_TOKEN_SECRET)
    const refreshToken = jwt.sign({id}, _config.REFRESH_TOKEN_SECRET)
    return {accessToken, refreshToken}
}