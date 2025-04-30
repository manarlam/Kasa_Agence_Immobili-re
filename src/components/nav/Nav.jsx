import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../header/header'; 
import '../../styles/components/header.scss'; 

function Nav() {
  return (
    <>
      <Header />
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;