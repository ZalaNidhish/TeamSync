import { Router } from "express";
import {allDepartments} from '../controllers/department.controller.js'

const router = Router()

router.get('/', allDepartments)

export default router