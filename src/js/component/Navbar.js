function Navbar(){
    return(<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-info" href="#">Totilo1</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#myCarousel">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Services">titulo 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Articles">titulo 3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Footer">Contacto</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>)
}

export default Navbar;