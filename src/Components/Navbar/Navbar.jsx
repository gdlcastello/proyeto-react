import React from 'react';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Beer-shop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/"> Inicio <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bebidas">Bebidas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/accesorios">Accesorios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sobre-nosotros">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;



