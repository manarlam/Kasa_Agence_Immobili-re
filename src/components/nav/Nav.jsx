import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout/nav.scss';


function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </>
  );
}

export default Nav;