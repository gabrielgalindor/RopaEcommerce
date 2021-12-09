import InstagramIcon from './instagram_icon.png'

export const NavBar = (props) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <p className="navbar-brand fw-bold robotofont boldfont" href="#page-top"> Moda Psycho </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto  my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3 robotofont mediumfont" href="/"> Inicio </a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3 robotofont mediumfont" href="/Catalogo"> Catalogo </a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3 robotofont mediumfont" href="/Promociones"> Promociones </a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3 robotofont mediumfont" href="/Support"> Soporte </a></li>
                    </ul>
                    <span className="small">  <a href="https://www.instagram.com/gabrielgalindor/"> <img id="instagram-icon" className="nav-icon" src={InstagramIcon}/> </a> </span>
                    <span className="small"> <a href="#"> {props.children} </a> </span>
                </div>
            </div>
        </nav>
    );
}