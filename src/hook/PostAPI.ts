import { AxiosInstance } from "../lib/axios";
import { useState } from "react";

export const TambahEmployee = () => {
   
    const [InputEmployeeLoading,SetInputEmployeeLoading] = useState  (false)
    const [InputEmployeeError,SetInputEmployeeError] = useState  ("")

    const HandleTambahEmployee = async (payload:string)=>{
        try {
            SetInputEmployeeLoading(true)
            await AxiosInstance.post('/employees' ,{
                Name : payload,
            }
        );
        }
        catch (error) {
            SetInputEmployeeError((error as TypeError).message)
        }
        finally {
            SetInputEmployeeLoading(false)
            SetInputEmployeeError("")
        }

        
        
        
    };
    return{
        HandleTambahEmployee,
        InputEmployeeLoading,
        InputEmployeeError
    }


}


    
