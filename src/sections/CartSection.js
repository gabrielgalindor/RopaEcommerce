import { useState } from 'react';
import {NavBar} from '../components/NavBar/NavBar.js'
import {CartWidget} from '../components/CartWidget/CartWidget.js'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from '../components/ItemCount/ItemCount.js'
import { Item } from '../components/Item/Item.js';
import {ItemDetail} from '../components/ItemDetail/ItemDetail.js'
import {Presentation} from '../components/Presentation/Presentation.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


  

export const CartSection = (props) => {
    


    return(
        <div className="Home">
        <header className="App-header">
          <Presentation titulo="Detalles de tu prenda">
            <NavBar> 
              <CartWidget/>
            </NavBar>
          </Presentation>
          <ItemListContainer sectionTitle="¡Tu carrito de compras ya está listo!">
            <div className="row"> 
                {props.children}
            </div>
          </ItemListContainer>
        </header>
      </div>
    )
}