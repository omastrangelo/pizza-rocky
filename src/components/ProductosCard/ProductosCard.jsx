import "./ProductosCard.css"

export function ProductosCard({producto}){

    const imgUrl = "https://i0.wp.com/rockypizzas.com/wp-content/uploads/2022/03/" + producto.image

    return(
        <li className="productCard">
            <div>{producto.title}</div>
            <img className="productImage" src={imgUrl} alt="" />

        </li>

    )
}