import React from 'react';
import logo from "../../assets/images/LOGO.png";
import Nav from '../nav/Nav';

function Header() {
    return (
        <header className="header">
            <figure className="logo_kasa">
            <img src={logo} alt="Logo Kasa" className="logo"/>
            </figure>
            <Nav className="nav"/>
        </header>
    );
}

export default Header;