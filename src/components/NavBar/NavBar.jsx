import "../NavBar/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars}from "@fortawesome/free-solid-svg-icons"
import CartWidget from "../CartWidget/CartWidget"

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
                   <li className="products-item">
                       <a href="/">Inicio</a>
                   </li>
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