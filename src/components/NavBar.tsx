import { Link } from "react-router-dom"

const NavBar  = ()=> {
    return (

    <div style={{
        display: "flex",
        gap: "60px",
        width: "100vw",
        padding: "10px  ",
        background: "#4e4a4af0",
        justifyContent:"end",
        position: "fixed",
        right: 0,
        top:0
        }}>
        <Link to={"/HomePage"}> Home </Link>
        <Link to={"/Product"}> Product </Link>
        <Link to={"/Terms"}> Terms </Link>
        <Link to={"/Contact"}> Contact </Link>
    </div>
    )

}

export default NavBar