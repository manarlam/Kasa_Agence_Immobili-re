import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <Outlet /> {/* Affiche la page actuelle ici */}
    </>
  );
}

export default Nav;