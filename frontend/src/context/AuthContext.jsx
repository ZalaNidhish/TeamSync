import { createContext, useState } from "react";

const authContext = createContext()



export const AuthProvider = (children)=>{
    
    const [currentStep, setCurrentStep] = useState(1);

    return <authContext.Provider value={{currentStep, setCurrentStep}} >
        {children}
    </authContext.Provider>
}

export default authContext