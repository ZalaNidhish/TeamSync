import { departmentModel } from "../models/department.model.js"

export const createDepartment = async (req, res)=>{
    const {departmentName} = req.body

    const isAlreadyDepartmentExists = await departmentModel.findOne({departmentName})

    if(isAlreadyDepartmentExists){
        return res.status(400).json({
            message: "Department already exists"
        })
    }

    const department = await departmentModel.create({departmentName})

    return res.status(200).json({
        message: "Department created successfully",
        data: {
            department
        }
    })
}
