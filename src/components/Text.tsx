import { useState } from "react";




function Ketik() {
    const [Text, SetText] = useState("");
    const [Lihat,SetLihat] = useState(false);
    return (
        <>
        <input 
        value={Text}
        onChange={(e) => SetText(e.target.value)}
        type={Lihat? "Text":"Password"}>
        </input>
        <button onClick={()=>SetLihat(!Lihat)}> Lihat</button>
        <h2>Kamu mengetik <br/> {Text}</h2>
        </>
    )
}

export default Ketik