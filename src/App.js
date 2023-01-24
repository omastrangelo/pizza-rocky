
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Hero from './components/Hero';

function App() {
  return (
    <>
<NavBar background={"transparent"}/>
<ItemListContainer greeting="lista de productos"/>
<Hero title="Pizza Rocky"/>
</>
  );
}

export default App;
