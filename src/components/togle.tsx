import { UseLike } from "../hook/like.ts"




function Saklar() {
    const {Like,SetLike} = UseLike ();
    return (
        <>
        <h1> Lampu : {Like? "Mati" : "Nyala"} </h1>
        <div >
            
            {/* {Like && <p style={{color:"White"}}>Lampu Mati</p>} */}
            <button onClick={()=> SetLike(!Like)} style={{background: Like? "Blue" : "White", color: Like? "white" : "Black", borderRadius: "50%"}}> {Like? "Dislike" : "Like"}</button>
        </div>
        </>
    )
}

export default Saklar