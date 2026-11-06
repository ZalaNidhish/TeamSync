import { Router } from "express";
import { loginUserController, loginWithGoogleUserController, registerUserController, sendOTPController, verifyOTPController } from "../controllers/auth.controller.js";
import { emailValidator, registerValidator, loginValidator } from "../validators/auth.validator.js";
import passport from '../config/passport.js'
const router = Router()

router.post('/register', registerValidator, registerUserController)
router.post('/login', loginValidator, loginUserController)

router.post('/checkUser', emailValidator, checkUserExists)

router.get('/google', passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
        prompt: "select_account"
    })
)

router.get('/google/callback', passport.authenticate("google", {
    session: false,
    failureRedirect: '/'
}), loginWithGoogleUserController)

router.post('/sendOTP', emailValidator, sendOTPController)
router.post('/verifyOTP', emailValidator, verifyOTPController)

export default router