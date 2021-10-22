import { useState } from 'react';
import item from './camisa-ejemplo.jpg'

export const ItemCount = () =>{

    const [itemNumber, setItemNumber] = useState(0);

    const OnAdd = () =>{
        setItemNumber(itemNumber+1);
    }

    const OnSub = () =>{
        if(itemNumber>0){
            setItemNumber(itemNumber-1);
        }
    }

    return(
        <div className="card">
        <img className="card-img-top" src={item} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Camisa</h5>
            <div className="inline-card">
                <button onClick={OnAdd} type="button" className="btn btn-primary">+</button>
                <p>{itemNumber}</p>
                <button onClick={OnSub} type="button" className="btn btn-primary">-</button>
            </div>
        </div>
        </div>
    )
}