import { useEffect, useState } from 'react';
import {NavBar} from '../components/NavBar/NavBar.js'
import {CartWidget} from '../components/CartWidget/CartWidget.js'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from '../components/ItemCount/ItemCount.js'
import { Item } from '../components/Item/Item.js';
import {ItemDetail} from '../components/ItemDetail/ItemDetail.js'
import {Presentation} from '../components/Presentation/Presentation.js'
import {hostEndpoint} from '../constants/index.js';


export const Compras = (props) => {
  
  const [compra, setCompra] = useState(null);

  const getCompra = async () =>{
    const res = await fetch(hostEndpoint+'/api/ReturnPO');
    const data = await res.json();
    console.log(data.compra);
    setCompra(data.compra);
  }
  useEffect(()=>{
    getCompra();
    
  })
  const [showForm, setShowForm] = useState(true);
  const [buyerName, setbuyerName] = useState("");
  const [buyerPhone, setbuyerPhone] = useState("00000000");
  const [buyerEmail, setbuyerEmail] = useState("");

  const AddBuyer = () =>{
    setbuyerName(document.getElementById("fname").value);
    setbuyerPhone(document.getElementById("lphone").value);
    setbuyerEmail(document.getElementById("lemail").value);

    setShowForm(false);
  }
    return(
        <div className="Home">
        <header className="App-header">
          <Presentation titulo="Nuestro Catalogo de Ropa">
            <NavBar> 
              <CartWidget/>
            </NavBar>
          </Presentation>
          <ItemListContainer sectionTitle="Orden de Compra">
            <div className="row"> 
               <div  className="formBuyer">
                  <h3 className="marginLeft-2 marginBottom-2 rockSalt"> Su orden de compra es : </h3>
                  <br></br>
                  <p  className="marginBottom-2 robotofont boldfont">{compra}</p>
               </div>
            </div>
            <div className="row"> 
               <h3 className="marginLeft-2 marginBottom-2 rockSalt"> Datos del Comprador : </h3>
               <br></br>
            </div>
            <div className="row">
                    {showForm &&
                      <div className="formBuyer">
                        <label for="fname">Nombre:</label><br/>
                        <input type="text" id="fname" name="fname"/><br/>
                        <label for="lemail">Email:</label><br/>
                        <input type="email" id="lemail" name="lemail"/><br/>
                        <label for="lphone">Télefono:</label><br/>
                        <input type="number" id="lphone" name="lphone"/><br/> <br/>
                        <input type="submit" value="Crear Comprador" onClick={AddBuyer}/>  <br/> <br/>
                      </div>
                    }
                    {!showForm &&
                        <div  className="formBuyer">
                            <h3 className="marginLeft-2 marginBottom-2 rockSalt"> Nombre </h3> 
                            <p className="marginBottom-2 robotofont boldfont">{buyerName}</p><br/>
                            <h3 className="marginLeft-2 marginBottom-2 rockSalt"> Email </h3> 
                            <p className="marginBottom-2 robotofont boldfont">{buyerEmail}</p><br/>
                            <h3 className="marginLeft-2 marginBottom-2 rockSalt"> Télefono </h3> 
                            <p className="marginBottom-2 robotofont boldfont">{buyerPhone}</p><br/>
                        </div>
                    }
            </div>
          </ItemListContainer>
        </header>
      </div>
    )
}