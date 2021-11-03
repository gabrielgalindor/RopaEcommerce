import { useState } from 'react';

export const ItemtDetail = (props)=>{

    const [details,setDetails] = useState([]);
   
    const ItemDetailPromise = (data)=>{
        const p = new Promise ((resolve,reject) => {
            if(data){
                resolve(data);
            }else{
                reject("No tenemos información");
            }
        });

        p.then(res => { setDetails(res)}).catch(err => setDetails(err));
    };

    ItemDetailPromise('Traido de Inglaterra');

    return(
        
        <div className="row">
            <p> {details} </p>
        </div>
    )
}