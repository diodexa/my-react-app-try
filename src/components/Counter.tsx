import { useState } from "react";

type mmmm ={
    initial?:number
    initial2?:number
}



function Count ({initial=5, initial2=10}: mmmm) {
    const [angka, setCount] = useState(initial);
    const [angka2, setCount2] = useState(initial2);
    return (
        <>
        <div style={{display: "flex", gap: "20px", justifyContent:"Center"}}>

        <div>
            <h5> angka saat ini : {angka}</h5>
            <button onClick={()=> setCount(angka+1)}>+</button>
            <button onClick={()=> angka>0 && setCount(angka-1)}>-</button>
            <button onClick={()=> setCount(initial)}>Reset</button>

        </div>
        <div>
            <h5> angka saat ini : {angka2}</h5>
            <button onClick={()=> setCount2(angka2+1)}>+</button>
            <button onClick={()=> angka2>0 && setCount2(angka2-1)}>-</button>
            <button onClick={()=> setCount2(initial2)}>Reset</button>

        </div>
        </div>
        </>
    )
}

export default Count