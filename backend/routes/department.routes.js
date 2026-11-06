import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {allDepartments} from '../controllers/department.controller.js'

const router = Router()

router.get('/', allDepartments)

export default router