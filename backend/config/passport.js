import passport from "passport";
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { _config } from "./config.js";

passport.use(new GoogleStrategy({
    clientID: _config.GOOGLE_CLIENT_ID,
    clientSecret: _config.GOOGLE_CLIENT_SECRET,
    callbackURL: _config.GOOGLE_CALLBACK_URI,
},
async (accessToken, refreshToken, profile, done)=>{
    try{
        return done(null, profile)
    }catch(err){
        return done(err)
    }
}

))


export default passport