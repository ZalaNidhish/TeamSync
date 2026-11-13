import { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { googleAPi, improveBioApi, registerUserApi, sendOTP, verifyOTP, getDepartmentApi } from '../api/registerApi'
import { useSearchParams } from 'react-router'

export const useRegister = ()=>{
    const {register, handleSubmit, reset, formState:{errors}, watch} = useForm()

    const [registerData, setRegisterData] = useState( JSON.parse(localStorage.getItem("teamSync_registerData")) || {})
    const [currentStep, setCurrentStep] = useState(1)
    const [otpSent, setOtpSent] = useState(false)
    const [otpSending, setOtpSending] = useState(false)
    const [tempOtp, setTempOtp] = useState(null)
    const [resendOtp, setResendOtp] = useState(false)
    const [departments, setDepartments] = useState(null)
    const [improvingBio, setImprovingBio] = useState(false)
    const [bioField, setBioField] = useState(registerData.bio || '')

    const [sp, setSp] = useSearchParams();
    const stepFromUrl = Number(sp.get('currentStep'));
    
    useEffect(()=>{
        const func = async ()=>{
            const res = await getDepartmentApi()
            setDepartments(res.data.departments)
        }
        func()
    }, [])

    useEffect(()=>{
        localStorage.setItem("teamSync_registerData", JSON.stringify(registerData))
    }, [registerData])

    useEffect(()=>{
        if(registerData.email){
            setCurrentStep(2)
            if(!registerData.avatar){
                setRegisterData({...registerData, avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8dhSiHOEzW9_vEHj6VVV4GvlooCTlYB-4lyypRqsQw&s=10"})
            }
        }
    }, [])

    useEffect(() => {
        if (stepFromUrl === 2) {
            setCurrentStep(2);
            const user = JSON.parse(sp.get('user'));
            setRegisterData(user)
            const newParams = new URLSearchParams(sp);
            newParams.delete('currentStep');
            newParams.delete('user');
            setSp(newParams, { replace: true });
        }
    }, [stepFromUrl]); 

    const handleVerifyOTP = async (data)=>{
        const otp = Number(data.digit_1 + data.digit_2 + data.digit_3 + data.digit_4)
        const res = await verifyOTP({email: registerData.email, otp})
        if(res.verified){
            setCurrentStep(2)
            setResendOtp(false)
        }else{
            setResendOtp(true)
        }
        setOtpSent(false)
        reset()
    }

    const handleSendOTP = async (data)=>{
        setOtpSending(true)
        const response = await sendOTP(data)

        if(response.isUserAlreadyRegistered){
            return console.log("User Already Registered");
        }
        setRegisterData(data)
        setTempOtp(response.otp)
        setOtpSending(false)
        setOtpSent(true)
    }

    const improveBio = async(data)=>{
        setImprovingBio(true)
        const res = await improveBioApi(data)
        setRegisterData({...registerData, bio: res.bio})
        setBioField(res.bio)
        setImprovingBio(false)
    }

    const handleGoogle = async ()=>{
        window.location.href = import.meta.env.VITE_GOOGLE_API;
    }

    const handlePersonalDetails = async (data)=>{
        const updated_data = {
            googleID: registerData.id || '',
            email: registerData.email,
            name: data.name,
            department: data.department,
            phone: data.phone,
            bio: data.bio,
            dateOfBirth: data.dateOfBirth
        }
        console.log(updated_data);
        setRegisterData(updated_data)
        setCurrentStep(3)
    }

    const handleSecurityDetails = async(data)=>{
        setRegisterData({...registerData, password: data.password})
        setCurrentStep(4)
    }

    const handleRegister = async(data)=>{
        const updated_data = {
            googleID: registerData.id || '',
            avatar: registerData.avatar || '',
            email: data.email,
            name: data.name,
            department: data.department,
            phone: data.phone,
            bio: data.bio,
            dateOfBirth: data.dateOfBirth,
            password: data.password
        }
        console.log(updated_data);
        setRegisterData(updated_data)
        const res = await registerUserApi(updated_data)
        console.log(res.message);
    }

    return {register, registerData, handleVerifyOTP, handleRegister, handleSubmit, errors, watch, registerData, setRegisterData, currentStep, setCurrentStep, otpSending, otpSent, setOtpSending, setOtpSent, handleSendOTP, tempOtp, setTempOtp, resendOtp, setResendOtp, handleGoogle, improveBio, improvingBio, setImprovingBio, bioField, setBioField, handlePersonalDetails, handleSecurityDetails, watch, departments}

}