export const ItemListContainer = (props)=>{
    return(
        
        <div className="container-fluid">
            
            <h1> {props.greetings} </h1>
            <p> Tu página web de la moda que este de acuerdo a tu psycho </p>
            
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}