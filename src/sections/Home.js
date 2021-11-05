import { useState } from 'react';
import {NavBar} from '../components/NavBar/NavBar.js'
import {CartWidget} from '../components/CartWidget/CartWidget.js'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from '../components/ItemCount/ItemCount.js'
import { Item } from '../components/Item/Item.js';
import {ItemDetail} from '../components/ItemDetail/ItemDetail.js'
import {Presentation} from '../components/Presentation/Presentation.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const data = [
    {id: 0, price: "$20.500 COP", name: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
    {id: 1, price: "$20.500 COP", name: "Blusa M", img: './imgsproductos/producto1.jpg'},
    {id: 2, price: "$20.500 COP", name: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
    {id: 3, price: "$20.500 COP", name: "Blusa M", img: './imgsproductos/producto1.jpg'}
  ]
  
  

export const Home = () => {
    
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


    return(
        <div className="Home">
        <header className="App-header">
          <Presentation titulo="Bienvenido a PsychoModa">
            <NavBar> 
              <CartWidget/>
            </NavBar>
          </Presentation>
          <ItemListContainer sectionTitle="Top 8 de la semana">
            <div className="row"> 
                  {itemData && itemData.map(({id, name, price, img}) =>(
                    
                      <Item ItemId={id} key={name} name={name} price={price} img={img}> 
                      </Item>
                    
                  ))}
              </div>
          </ItemListContainer>
        </header>
      </div>
    )
}