import { useState } from "react";




function Saklar() {
    const [On, SetOn] = useState(false);
    return (
        <>
        <div style={{background: On? "Black" : "White", width: "100vw", justifyItems: "center"}}>
            
            <button onClick={()=> SetOn(!On)}>Saklar</button>
            {On && <p style={{color:"White"}}>Lampu Mati</p>}
        </div>
        </>
    )
}

export default Saklar