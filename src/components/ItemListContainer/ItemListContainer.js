export const ItemListContainer = (props)=>{
    return(
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8 marginTop-2 marginBottom-2 rockSalt">
                    <h2> {props.sectionTitle} </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {props.children}
                </div>
            </div>
        </div>
    )
}