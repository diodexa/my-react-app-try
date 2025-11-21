import {FetchingAPI} from "../hook/FetchingAPI"
import { TambahEmployee} from "../hook/PostAPI"
import { useState } from "react";


const EmployeesPages = () => {
     const [InputEmployee,SetInputEmployee] = useState  ("");
     
    const {HandleTambahEmployee, InputEmployeeLoading, InputEmployeeError} = TambahEmployee();
    const {FetchEmployee, ErrorState, LoadingState, AmbilDataEmployee} = FetchingAPI()


    return (

    <>
    <table>
        <thead>
            <th> ID</th>
            <th> Nama</th>
        </thead>
        <tbody>
            {
                AmbilDataEmployee.map (employe => {
                    return (
                        <tr key={employe.id}>
                            <td>{employe.id}</td>
                            <td> {employe.Name} </td>
                        </tr>
                    )
                })
            }
        </tbody>
        <tfoot>
            <td colSpan={2}>

            <input type="text" onChange={(e)=>SetInputEmployee(e.target.value)} value={InputEmployee} />
            </td>
        </tfoot>
    </table>
    <button onClick={()=>{HandleTambahEmployee (InputEmployee); SetInputEmployee("");}} disabled={InputEmployeeLoading } >Tambahkan</button>
    <button onClick={FetchEmployee} disabled={LoadingState}> cek fetch</button>
    {
        LoadingState && <p>Loading....</p>
    }
    {
        InputEmployeeLoading && <p>Loading....</p>
    }
    {
        ErrorState && <p>{ErrorState}</p>
    }
    {
        InputEmployeeError && <p> {InputEmployeeError} </p> 
    }
    
    
    
    </>
    );
}

export default EmployeesPages