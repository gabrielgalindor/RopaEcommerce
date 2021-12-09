import { useHistory } from "react-router-dom";
import {hostEndpoint} from '../../constants/index.js';

export const Cart = (props) => {

    let history = useHistory();

    const postOrder = async (body) =>{
        const res = await fetch(hostEndpoint+'/api/setorder', 
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        );
        //const data = await res.json();
        //console.log(data.items);
        
      }

    return(
    <div className="FloatCart">
        {props.condition && 
            <div> 
                <h3 className=" cartTitle"> Tu carrito está actualizado </h3> 
                <button className="CartButton btn btn-success" onClick={() =>{
                    console.log(props.order);
                    const req = { 'ordenes': props.order};
                    postOrder(req);
                    history.push("/Compras");
                }}> 
                    ¡Comprar Ya! 
                </button>
            </div> }
        {!props.condition && <div></div>}
    </div>
        
    )
}