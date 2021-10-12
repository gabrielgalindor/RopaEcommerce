export const NavBar = () =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div class="container px-5">
                <p class="navbar-brand fw-bold" href="#page-top"> Moda Psycho </p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#features"> Inicio </a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#download"> Catalogo </a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#download"> Promociones </a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#download"> Soporte </a></li>
                    </ul>
                    <button class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span class="d-flex align-items-center">
                            <i class="bi-chat-text-fill me-2"></i>
                            <span class="small">Compras</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}