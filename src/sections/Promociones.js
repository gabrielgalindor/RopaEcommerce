import { useState } from 'react';
import {NavBar} from '../components/NavBar/NavBar.js'
import {CartWidget} from '../components/CartWidget/CartWidget.js'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from '../components/ItemCount/ItemCount.js'
import { Item } from '../components/Item/Item.js';
import {ItemDetail} from '../components/ItemDetail/ItemDetail.js'
import {Presentation} from '../components/Presentation/Presentation.js'

const data = [
    {id: 0, price: "$20.500 COP", name: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
    {id: 1, price: "$20.500 COP", name: "Blusa M", img: './imgsproductos/producto1.jpg'},
    {id: 0, price: "$20.500 COP", name: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
    {id: 1, price: "$20.500 COP", name: "Blusa M", img: './imgsproductos/producto1.jpg'}
  ]
  
  

export const Promociones = () => {
    
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
          <Presentation titulo="Nuestras Promos Activas">
            <NavBar> 
              <CartWidget/>
            </NavBar>
          </Presentation>
          <ItemListContainer sectionTitle="Promociones">
          <div className="row">
                  <div className="col-12">
                      <h3 className="catTitle"> Por ahora por culpa de la pandemia ... ¡Sorry! ¡Somos Pobres! </h3>
                  </div>
              </div>
              <div className="row">
                     <div className="col-12">
                            <img className="catImg" src="./imgsproductos/catalogo.jpg"></img>
                     </div>
              </div>
          </ItemListContainer>
        </header>
      </div>
    )
}