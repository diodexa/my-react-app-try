import { useState } from "react";




function Count () {
    let [angka, setCount] = useState(0);
    return (
        <>
        <div style={{display: 'flex'}}>
            <h5> angka saat ini :</h5>
            {angka}
            <button onClick={()=> setCount(angka+1)}>+</button>
            <button onClick={()=> {if(angka>0) setCount(angka-1)}}>-</button>
            <button onClick={()=> setCount(0)}>Reset</button>

        </div>
        </>
    )
}

export default Count