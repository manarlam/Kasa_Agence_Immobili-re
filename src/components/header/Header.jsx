import React from 'react';
import logo from "../../assets/images/logo/LOGO.png";
import Nav from '../nav/Nav';

function Header() {
    return (
        <header className="header">

            <img src={logo} alt="Logo Kasa" className="logo"/>

            <Nav className="nav"/>
        </header>
    );
}

export default Header;