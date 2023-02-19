import "../NavBar/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars}from "@fortawesome/free-solid-svg-icons"
import CartWidget from "../CartWidget/CartWidget"
import Conocenos from "../Conocenos"
import Contactanos from "../Contactanos"
import { Link } from "react-router-dom"

const NavBar = ({background}) =>{
    /*const Logo =*/
    return(       
        <header className={`header background --${background}`}>



        <div className="header-container">
        {/*Boton de menu */}
            <div className="menu-button" >
                <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
                <small>Menu</small>
            </div> 
           {/*Links de navegacion */} 
           <nav>
               <ul className="nav-container">
                   <li className="products-item"><Link to={`/`}>Inicio</Link></li>
                   <li>
                       <a href="/">Productos <span className="arrow"></span></a>
                   </li>
                   <li>
                       <a href="/">Conocenos</a>
                   </li>
                   <li>
                       <a href="/">Contactanos</a>
                   </li>
                   <li><CartWidget/></li>
               </ul>
           </nav>
           <div className="logo-container">
               {/*<img src="{logo}" alt="logo"></img>*/}

           </div>

        </div>
        {/*cart-widget */}
        </header>






    )
}

export default NavBar