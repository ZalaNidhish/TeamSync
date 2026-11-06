import { departmentModel } from "../models/department.model.js"

export const allDepartments = async (req, res)=>{
    const departments = await departmentModel.find()
    if(!departments){
        return res.status(400).json({
            message: "Departments not found"
        })
    }
    
    return res.status(200).json({
        message: "Departments fetched successfully",
        data: {
            departments
        }
    })
}