import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/NavBar.css'
import {NavBar} from './components/NavBar.js'
import './components/CartWidget/CartWidget.css'
import {CartWidget} from './components/CartWidget/CartWidget.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import './components/ItemCount/ItemCount.css'
import {ItemCount} from './components/ItemCount/ItemCount.js'
import { Item } from './components/Item/Item.js';
import './components/Item/Item.css'
import 'animate.css';
import {ItemtDetail} from './components/ItemDetail/ItemDetail.js'


const data = [
  {id: 0, price: 10500, name: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
  {id: 1, price: 20000, name: "Blusa M", img: './imgsproductos/producto1.jpg'}
]



function App() {


  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
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
    <div className="App">
      <header className="App-header">
        <NavBar> 
          <CartWidget/>
        </NavBar>
        <ItemListContainer greetings="Bienvenido a Psycho Moda">
          <div className="row"> 
                {itemData && itemData.map(({name, price, img}) =>(
                  <Item key={name} name={name} price={price} img={img}> 
                      <ItemtDetail/>
                   </Item>
                ))}
            </div>
        </ItemListContainer>
      </header>
    </div>
  );
}

export default App;

