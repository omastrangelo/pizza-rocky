
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
<NavBar background={"transparent"}/>
<ItemListContainer greeting="lista de productos"/>
</>
  );
}

export default App;
