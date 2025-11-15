
import { useState } from "react";




function AddList () { 
    const [input,setInput] = useState("")
    const [inputArray,setInputArray] = useState<string[]>([])

    function handleAdd () {
        if (input.trim() =="") return ;
    
        setInputArray ([...inputArray,input,"aba"]);
        setInput("")
    }
    return (
        <>
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={handleAdd}> Tambahkan</button>

        <ul>
            {inputArray.map((a,index)=>
            <li key={index} >{a}</li>
            )}
        </ul>
        </>

    )
}
export default AddList