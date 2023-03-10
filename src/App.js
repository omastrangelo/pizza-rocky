
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import {ProductosGrid} from "./components/ProductosGrid/ProductosGrid"
import {Routes,Route } from "react-router-dom";
import Conocenos from './components/Conocenos';
import Contactanos from './components/Contactanos';



function App() {
  return (
    <>
<NavBar background={"transparent"}/>
<Hero title="Pizza Rocky"/>
<Routes>
  <Route path='Conocenos' element={<Conocenos/>}/>
  <Route path='Contactanos' element={<Contactanos/>}/>
  <Route path='Productos' element={<ProductosGrid/>}/>
</Routes>
</>
  );
}

export default App;
