import { useState } from "react";




function Saklar() {
    const [On, SetOn] = useState(false);
    return (
        <>
        <h1> Lampu : {On? "Mati" : "Nyala"} </h1>
        <div style={{background: On? "Black" : "White", width: "100vw", justifyContent: "center"}}>
            
            {On && <p style={{color:"White"}}>Lampu Mati</p>}
            <button onClick={()=> SetOn(!On)}>Saklar</button>
        </div>
        </>
    )
}

export default Saklar