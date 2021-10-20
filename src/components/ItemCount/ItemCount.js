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
        <div class="card">
        <img class="card-img-top" src={item} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Camisa</h5>
            <div class="inline-card">
                <button onClick={OnAdd} type="button" class="btn btn-primary">+</button>
                <p>{itemNumber}</p>
                <button onClick={OnSub} type="button" class="btn btn-primary">-</button>
            </div>
        </div>
        </div>
    )
}