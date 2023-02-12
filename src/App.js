
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {ProductosGrid} from "./components/ProductosGrid/ProductosGrid"



function App() {
  return (
    <>
<NavBar background={"transparent"}/>
<Hero title="Pizza Rocky"/>
<ItemListContainer greeting="Lista de productos"/>
<ProductosGrid/>
</>
  );
}

export default App;
