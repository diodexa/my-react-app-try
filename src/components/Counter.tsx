import { useState } from "react";




function Count () {
    let [angka, setCount] = useState(0);
    let [angka2, setCount2] = useState(0);
    return (
        <>
        <div style={{display: "flex", gap: "20px", justifyContent:"Center"}}>

        <div>
            <h5> angka saat ini : {angka}</h5>
            <button onClick={()=> setCount(angka+1)}>+</button>
            <button onClick={()=> angka>0 && setCount(angka-1)}>-</button>
            <button onClick={()=> setCount(0)}>Reset</button>

        </div>
        <div>
            <h5> angka saat ini : {angka2}</h5>
            <button onClick={()=> setCount2(angka2+1)}>+</button>
            <button onClick={()=> angka2>0 && setCount2(angka2-1)}>-</button>
            <button onClick={()=> setCount2(0)}>Reset</button>

        </div>
        </div>
        </>
    )
}

export default Count