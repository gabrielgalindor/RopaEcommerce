import { useState } from 'react';




export const Item = (props) =>{
    const ItemId = props.ItemId;
    const itemLink = "./item/"+ItemId;
    
    return(
        <div className="card">
            <img className="card-img-top" src={props.img} />
            <div className="card-body">
                <h5 className="card-title robotofont mediumfont">{props.name}</h5>
                <p className="rockSalt font14pt whiteback"> $ {props.price} COP </p>
                <span className="small">
                    <button onClick={() => {
                        const Order = {
                            'name': props.name,
                            'price': props.price
                        }
                        props.cartFunction(Order);
                    }}> 
                        Agregar al Carrito 
                    </button>
                 </span>
            </div>
        </div>
    )
}