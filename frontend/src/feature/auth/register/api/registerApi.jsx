import {api} from '../../../../config/axiosInstance'

export const sendOTP = async (email)=>{

    try{
        const res = await api.post('/auth/sendOTP', email)
        return res.data
    }catch(err){
        return err.message
    }
}

export const verifyOTP = async ({email, otp})=>{

    try{
        const res = await api.post('/auth/verifyOTP', {email, otp})
        return res.data
    }catch(err){
        console.log(err.response.data.message);
        return err
    }
}

export const googleAPi = async ()=>{
    try{    
        const res = await api.get('/auth/google')
        return res.data
    }catch(err){
        return err.response.data.message
    }
}

export const improveBioApi = async(bio)=>{
    try{
        const res = await api.post('/auth/bio', {bio})
        return res.data
    }
    catch(err){
        console.log(err.response.data.message);
        return err
    }
}