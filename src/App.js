import logo from './logo.svg';
import './App.css';
import './components/NavBar.css'
import {NavBar} from './components/NavBar.js'
import './components/CartWidget/CartWidget.css'
import {CartWidget} from './components/CartWidget/CartWidget.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import './components/ItemCount/ItemCount.css'
import {ItemCount} from './components/ItemCount/ItemCount.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar> 
          <CartWidget/>
        </NavBar>
        <ItemListContainer greetings="Bienvenido a Psycho Moda"/>
        <div className="container-fluid">
          <div className="row"> 
              <ItemCount/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
