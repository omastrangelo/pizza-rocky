import productos from "../Data/productos.json"
import {ProductosCard} from "../ProductosCard/ProductosCard"
import "./ProductosGrid.css"

export function ProductosGrid (){

    return(
        <ul className="productosGrid">
            {productos.map((producto)=>(
                
                <ProductosCard key={producto.id} producto={producto}/>

            ))}

        </ul>
        
    )


}