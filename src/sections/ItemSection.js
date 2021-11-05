import { useState } from 'react';
import {NavBar} from '../components/NavBar/NavBar.js'
import {CartWidget} from '../components/CartWidget/CartWidget.js'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from '../components/ItemCount/ItemCount.js'
import { Item } from '../components/Item/Item.js';
import {ItemDetail} from '../components/ItemDetail/ItemDetail.js'
import {Presentation} from '../components/Presentation/Presentation.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


  

export const ItemSection = (props) => {
    


    return(
        <div className="Home">
        <header className="App-header">
          <Presentation titulo="Detalles de tu prenda">
            <NavBar> 
              <CartWidget/>
            </NavBar>
          </Presentation>
          <ItemListContainer sectionTitle="¡Mira qué chévere!">
            <div className="row"> 
                {props.children}
            </div>
          </ItemListContainer>
        </header>
      </div>
    )
}