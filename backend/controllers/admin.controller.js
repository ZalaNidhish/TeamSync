import { departmentModel } from "../models/department.model.js"
import { userModel } from "../models/user.model.js"

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

export const approveEmployee = async (req, res)=>{
    const {id} = req.params


    const emp = await userModel.findById(id)

    if(emp.isApproved){
        return res.status(400).json({
            message: "Employee already approved."
        })
    }

    const {department} = req.body || emp.department

    const newEmp = await userModel.findByIdAndUpdate(id, {department, isApproved: true}, {returnDocument: 'after'})

    return res.status(200).json({
        message: "Employee Approved Successfully.",
        data: {
            newEmp
        }
    })
}

export const listAllEmployees = async (req, res)=>{

    const {department, isApproved, name} = req.query

    const filter = {}

    if(department){
        filter.department = department
    }
    if(isApproved){
        filter.isApproved = isApproved
    }
    if(name){
        filter.name = name
    }

    const emps = await userModel.find(filter)

    return res.status(200).json({
        message: "Employees fetched successfully",
        data: {
            emps
        }
    })

}