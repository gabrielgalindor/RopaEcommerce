import icon from './carticon.png'

export const CartWidget = (props) => {
    return(
    <div>
        <img id='cart-icon' src={icon}/> 
        <span> {props.CartNumber} </span>
    </div>
        
    )
}