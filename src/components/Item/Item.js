import { useState } from 'react';




export const Item = (props) =>{
    const ItemId = props.ItemId;
    const itemLink = "./item/"+ItemId;
    console.log(ItemId);
    return(
        <div className="card">
            <a href={itemLink}>
            <img className="card-img-top" src={props.img} />
            <div className="card-body">
                <h5 className="card-title robotofont mediumfont">{props.name}</h5>
                <p className="rockSalt font14pt whiteback"> {props.price} </p>
                <span className="small"> {props.children} </span>
            </div>
            </a>
        </div>
    )
}