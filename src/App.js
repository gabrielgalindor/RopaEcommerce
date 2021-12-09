import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar.css'
import './components/Presentation/Presentation.css'
import {NavBar} from './components/NavBar/NavBar.js'
import './components/CartWidget/CartWidget.css'
import {CartWidget} from './components/CartWidget/CartWidget.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import './components/ItemCount/ItemCount.css'
import {ItemCount} from './components/ItemCount/ItemCount.js'
import { Item } from './components/Item/Item.js';
import './components/Cart/cart.css'
import {Cart} from './components/Cart/Cart.js'
import './components/Item/Item.css'
import 'animate.css';
import {ItemDetail} from './components/ItemDetail/ItemDetail.js'
import {Home} from './sections/Home.js'
import {Catalogo} from './sections/Catalogo.js'
import {Promociones} from './sections/Promociones.js'
import {Support} from './sections/Support.js'
import {ItemSection} from './sections/ItemSection.js'
import { CartSection } from './sections/CartSection';
import {Compras} from './sections/Compras.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const data = [
  {id: 0, price: 10500, name: "Camisa Skull XL", img: 'http://localhost:3000/imgsproductos/producto0.jpg'},
  {id: 1, price: 20000, name: "Blusa M", img: 'http://localhost:3000/imgsproductos/producto1.jpg'},
  {id: 2, price: 20000, name: "Blusa S", img: 'http://localhost:3000/imgsproductos/producto1.jpg'}
]

export var MasterOrder = 2;

function App() {

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 50);
  })

  task.then(
    (result) => {
      setItem(data);
    },
    (err) => {
    
    }

  ).catch((err) => {}).finally(()=>{});

  

  const [itemData, setItem] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Catalogo">
           <Catalogo/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Promociones">
           <Promociones/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Support">
           <Support/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/Compras">
           <Compras/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

