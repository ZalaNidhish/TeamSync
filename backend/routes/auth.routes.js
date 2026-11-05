import { Router } from "express";
import { registerUserController, sendOTPController, verifyOTPController } from "../controllers/auth.controller.js";
const router = Router()

router.post('/register', registerUserController)
router.post('/sendOTP', sendOTPController)
router.post('/verifyOTP', verifyOTPController)

export default router