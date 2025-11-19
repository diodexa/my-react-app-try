import { useParams, useNavigate  } from "react-router-dom"

const ProductDetail =() => {
    const params = useParams()
    const navigate = useNavigate();
    return (

        <div>
        <h1>Ini {params.NameProduct}</h1>
        <button onClick={()=>navigate(-1)}> Kembali</button>
        </div>
    )
}

export default ProductDetail