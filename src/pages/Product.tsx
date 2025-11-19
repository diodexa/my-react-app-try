import { Link } from "react-router-dom"

const Product =() => {
    return (

        <ul>
        <h1>Ini Product</h1>
        <li>
            <Link to={"Kursi"}> Kursi </Link>
        </li>
        <li>
            <Link to={"Meja"}> Meja </Link>
        </li>
        <li>
            <Link to={"Pulpen"}> Pulpen </Link>
        </li>
        </ul>
    )
}

export default Product