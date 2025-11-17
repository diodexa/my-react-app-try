
import { useState } from "react";




function AddList () { 
    const [input,setInput] = useState("")
    const [inputArray,setInputArray] = useState<string[]>([])
    const [On, SetOn] = useState(false);

    function Add1 () {
        if (input.trim() =="") return ;
    
        setInputArray ((prevInput) =>[...prevInput,input]);
        setInput("")
    }
    function Add2 () {
        if (input.trim() =="")  return ;
    
        setInputArray ((prevInput) =>[...prevInput,input,input])

        setInput("")
    }
  
    return (
        <>
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={Add1}> Tambahkan</button>
        <button onClick={Add2}> Add double</button>

        <ul>
            {inputArray.map((a,index)=>
            <li key={index} >{a} <button style={{display: On? "inline-block" : "none"}} onClick={()=> setInputArray ((prevInput)=> prevInput.filter((_,i) => i!= index ))}>Delete</button></li> 
            
        )
    }
    <button onClick={()=> SetOn(!On) }> Edit</button>
        </ul>
        </>

    )
}
export default AddList