import productos from "../Data/productos.json"
import {ProductosCard} from "../ProductosCard/ProductosCard"
import "./ProductosGrid.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

export function ProductosGrid (){

    return(
        <>        
        <ItemListContainer greeting="Lista de productos"/>
        <ul className="productosGrid">
            {productos.map((producto)=>(
                
                <ProductosCard key={producto.id} producto={producto}/>

            ))}

        </ul>
        </>
        
    )


}