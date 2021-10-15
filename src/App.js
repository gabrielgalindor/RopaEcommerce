import logo from './logo.svg';
import './App.css';
import './components/NavBar.css'
import {NavBar} from './components/NavBar.js'
import './components/CartWidget/CartWidget.css'
import {CartWidget} from './components/CartWidget/CartWidget.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar> 
          <CartWidget/>
        </NavBar>
        <ItemListContainer greetings="Bienvenido a Psycho Moda"/>
      </header>
    </div>
  );
}

export default App;
