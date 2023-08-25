import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Beer-shop</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/category/Inicio">Inicio <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/category/Cervezas">Cervezas <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/category/Accesorios">Accesorios <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/category/Especiales">Especiales <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/category/Contacto">Contacto <span className="sr-only"></span></NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;



