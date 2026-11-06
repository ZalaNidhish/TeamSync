import { Router } from "express";
import { registerUserController, sendOTPController, verifyOTPController } from "../controllers/auth.controller.js";
import { emailValidator, registerValidator } from "../validators/auth.validator.js";
const router = Router()

router.post('/register', registerValidator, registerUserController)
router.post('/sendOTP', emailValidator, sendOTPController)
router.post('/verifyOTP', emailValidator, verifyOTPController)

export default router