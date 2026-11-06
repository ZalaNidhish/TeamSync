import {body, validationResult} from 'express-validator'

export const registerValidator = [
    body('email')
    .exists().withMessage("Email is required").bail()
    .trim()
    .isEmail().withMessage("Invalid Email format").bail(),

    body('phone')
    .exists().withMessage("Phone number is required").bail()
    .trim()
    .isLength({min:10, max:10}).withMessage("Phone number must be exactly 10 characters long.").bail()
    .isNumeric().withMessage("Phone number must contain only numeric vallues").bail(),

    body('name')
    .exists().withMessage("Name is required").bail()
    .trim(),

    body('dateOfBirth')
    .exists("Date of Birth is required").bail()
    .trim()
    .isDate({format: "DD-MM-YYYY"}).withMessage("Invalid date format").bail(),

    body('bio')
    .exists().withMessage("Bio is required")
    .trim(),

    body('password')
    .exists().withMessage("Password is required")
    .trim()
    .isLength({min: 6}).withMessage("Password must be atleast 6 characters long"),

    (req, res, next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid form input",
                errors: errors.array()
            })
        }
        next()
    }
]

export const emailValidator = [
    body('email')
    .exists().withMessage("Email is required").bail()
    .trim()
    .isEmail().withMessage("Invalid Email Format"),

    (req, res, next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid Form input",
                errors: errors.array()
            })
        }
        next()
    }
]