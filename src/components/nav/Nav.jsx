import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layout/nav.scss';


function Nav() {
  return (
    <>
      <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        A propos
      </NavLink>
    </nav>
    </>
  );
}

export default Nav;