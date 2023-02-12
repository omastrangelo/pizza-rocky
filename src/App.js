
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer'
import CardProduct from './components/Card';

function App() {
  return (
    <>
<NavBar background={"transparent"}/>
<Hero title="Pizza Rocky"/>
<ItemListContainer greeting="lista de productos"/>
<CardProduct/>
</>
  );
}

export default App;
