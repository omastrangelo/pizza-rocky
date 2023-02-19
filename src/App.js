
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {ProductosGrid} from "./components/ProductosGrid/ProductosGrid"
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
<NavBar background={"transparent"}/>
<Hero title="Pizza Rocky"/>
<ItemListContainer greeting="Lista de productos"/>
<Routes>
  <Route/>
  <Route/>
  <Route/>
</Routes>
<ProductosGrid/>
</BrowserRouter>
</>
  );
}

export default App;
