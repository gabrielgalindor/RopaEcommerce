import { useState } from 'react';




export const Item = ({name, price, img}) =>{
    

    

    return(
        <div className="card">
        <img className="card-img-top" src={img} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p> {price} </p>
            <div className="inline-card">
                empty
            </div>
        </div>
        </div>
    )
}