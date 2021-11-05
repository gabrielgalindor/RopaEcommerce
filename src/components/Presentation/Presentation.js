import { useState } from 'react';


export const Presentation = (props) =>{

    return(
        <div id="presentationBlock" className="container-fluid" style={{backgroundImage: `url("./backgrounds/home-background.jpg")` }}>
            <div className="row">
                {props.children}
            </div>
           <div className="row">
                <h1 className="rockSalt"> {props.titulo} </h1>
           </div>
        </div>
    )
}