import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { approveEmployee, createDepartment, listAllEmployees } from "../controllers/admin.controller.js";
const router = Router()

router.post('/department', authenticate, authorize("admin"), createDepartment)
router.post('/approve/:id', authenticate, authorize("admin"), approveEmployee)
router.get('/employees', authenticate, authorize("admin"), listAllEmployees)

export default router