import React from 'react';
import logo from "../../assets/images/LOGO.png";



function Header() {
    return (
        <header className="header">
            <div className="logo_kasa">
            <img src={logo} alt="Logo Kasa" className="logo"/>
            </div>
        </header>
    )
}

export default Header;