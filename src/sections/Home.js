import { useEffect, useState } from 'react';
import {NavBar} from '../components/NavBar/NavBar.js'
import {CartWidget} from '../components/CartWidget/CartWidget.js'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from '../components/ItemCount/ItemCount.js'
import { Item } from '../components/Item/Item.js';
import {ItemDetail} from '../components/ItemDetail/ItemDetail.js'
import {Presentation} from '../components/Presentation/Presentation.js'
import {Cart} from '../components/Cart/Cart.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { createContext } from 'react';
import { getFirestore} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import {hostEndpoint} from '../constants/index.js';

const data = [
  {id: 0, price: "$20.500 COP", title: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
  {id: 1, price: "$20.500 COP", title: "Blusa M", img: './imgsproductos/producto1.jpg'},
  {id: 2, price: "$20.500 COP", title: "Camisa Skull XL", img: './imgsproductos/producto0.jpg'},
  {id: 3, price: "$20.500 COP", title: "Blusa M", img: './imgsproductos/producto1.jpg'}
]



//Testing Pull

const CartContext = createContext();
  

export const Home = () => {

  const [camisas,setCamisas] = useState(null);

  const getCamisas = async () =>{
    const res = await fetch(hostEndpoint+'/api/');
    const data = await res.json();
    //console.log(data.items);
    setCamisas(data.items);
  }

  useEffect(()=>{
    getCamisas();
    
  })

 // console.log(camisas);
    
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

  //Logica de agregar al carrito

  const AddToCart = () =>{
    
    setConditional(true);
    setCartCounts(CartCounts+1);
    setTotalprice(Totalprice+10000);
  }

  const [CartCounts, setCartCounts] = useState(0);
  const [Conditional, setConditional] = useState(false);
  const [Totalprice, setTotalprice] = useState(0); 

  //Logica del Buyer
 
  const [itemData, setItem] = useState(null);
  const [buyerData, setBuyer] = useState(null);
  //Vars from Buyer
  const [buyerName, setbuyerName] = useState("");
  const [buyerPhone, setbuyerPhone] = useState("00000000");
  const [buyerEmail, setbuyerEmail] = useState("");


 
  const AddBuyer = () =>{
    setbuyerName(document.getElementById("fname").value);
    setbuyerPhone(document.getElementById("lphone").value);
    setbuyerEmail(document.getElementById("lemail").value);
    setBuyer({buyerName, buyerPhone, buyerEmail});
    
  }
  
  

  //Logica de agregar Order

  const [order, setOrder] = useState([]);
  const [ordenes, setOrdenes] = useState([]);

  const CartFun = (AddOrder) =>{
    setConditional(true);
    ordenes.push(AddOrder);
    console.log(ordenes);
} 

    return(
        <div className="Home">
        <header className="App-header">
          <Presentation titulo="Bienvenido a PsychoModa">
            <div/>
              <NavBar> 
                <CartWidget CartNumber={CartCounts}/>
              </NavBar>
          </Presentation>
          <ItemListContainer sectionTitle="Top 8 de la semana">
            <div className="row"> 
                  <h2 className=" marginBottom-2 rockSalt"> Camisas </h2>
                  {camisas ? camisas.map( camisa =>
                     (<Item ItemId={camisa.id} key={camisa.title} name={camisa.title} price={camisa.price} img={camisa.img} cartFunction={CartFun}>
                      </Item>)
                  ):null}
                  
              </div>
              <div className="row"> 
                  <h2 className=" marginBottom-2 rockSalt"> Camisas </h2>
                  {camisas ? camisas.map( camisa =>
                     (<Item ItemId={camisa.id} key={camisa.title} name={camisa.title} price={camisa.price} img={camisa.img} cartFunction={CartFun}>
                      </Item>)
                  ):null}
                  
              </div>
              <div className="row">
                    <Cart condition={Conditional} order={ordenes}></Cart>
              </div>
          </ItemListContainer>
          <div className="row">
              <div>
                    <label for="fname">Nombre:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lemail">Email:</label><br/>
                    <input type="email" id="lemail" name="lemail"/><br/>
                    <label for="lphone">Télefono:</label><br/>
                    <input type="number" id="lphone" name="lphone"/><br/> <br/>
                    <input type="submit" value="Crear Comprador" onClick={AddBuyer}/>  <br/> <br/>
                </div> 
          </div>
        </header>
      </div>
    )
}