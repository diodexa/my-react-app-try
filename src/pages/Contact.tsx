const Contact =() => {
    return (

        <div>
        <h1>Ini Contact</h1>
        <form action="" style={{
            display:"flex",
            gap :"10px",
            flexDirection:"column"
        }}>
            <input placeholder="Tulis Nama"/> 
            <input placeholder="Tulis Pesan"/> 
            <button> Kirim</button>
        </form>
        </div>
    )
}

export default Contact