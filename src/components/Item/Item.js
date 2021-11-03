import { useState } from 'react';




export const Item = (props) =>{
    

    

    return(
        <div className="card">
        <img className="card-img-top" src={props.img} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p> {props.price} </p>
            <div className="inline-card">
                empty
            </div>
            <span className="small"> {props.children} </span>
        </div>
        </div>
    )
}