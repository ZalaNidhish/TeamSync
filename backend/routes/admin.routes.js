import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { createDepartment } from "../controllers/admin.controller.js";
const router = Router()

router.post('/department', authenticate, authorize("admin"), createDepartment)

export default router