

export const Cart = (props) => {


    return(
    <div>
        {props.condition && <div> <h3> Tu carrito está actualizado </h3> <span> Total Items: {props.CartNumber} </span> <span> Total: $ {props.CartPrice} COP </span> </div>}
        {!props.condition && <div></div>}
    </div>
        
    )
}