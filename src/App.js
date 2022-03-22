import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
    </div>
   
  );
}

export default App;
