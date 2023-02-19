import "./ProductosCard.css"
import { Counter } from "../Counter"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"


export function ProductosCard({producto}){

    const imgUrl = "https://i0.wp.com/rockypizzas.com/wp-content/uploads/2022/03/" + producto.image

    return(
        <>
        <li className="productCard">
            <div>{producto.title}</div>
            <img className="productImage" src={imgUrl} alt="" />
            <Counter/>
           <Link to={`/Productos/${producto.id}`}><Button size="lg" variant="primary">Detalle</Button></Link>
           

        </li>

        </>

    )
}