import {AxiosInstance} from "../lib/axios"
import { useState } from "react";

type employee = {
    id : number,
    Name : string
}

export const FetchingAPI = ()=>{
    const [AmbilDataEmployee,setAmbilDataEmployee] = useState<employee[]> ([])
        const [LoadingState,SetLoadingState ] = useState (false)
        const [ErrorState,SetErrorState ] = useState (false)
        const FetchEmployee = async() => {
            try {
                SetLoadingState(true)
                // const requestAPI = await fetch ("http://localhost:2000/employees")
            
                // const Employees = await requestAPI.json() as employee [];
                // setAmbilDataEmployee(Employees)
                const response = await AxiosInstance.get<employee []>("/employees")
                setAmbilDataEmployee(response.data)
                SetErrorState(false)
            }
            catch {
                SetErrorState(true)
            }
            finally{
                SetLoadingState(false)
            }
};
return {

    FetchEmployee,
    ErrorState,
    LoadingState,
    AmbilDataEmployee
}


}