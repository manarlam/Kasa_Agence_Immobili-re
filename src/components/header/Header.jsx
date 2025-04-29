import React from 'react';
import logo from "../../assets/images/LOGO.png";



function Header() {
    return (
        <header class="logo_kasa">
            <img src={logo} alt="Logo Kasa" className="logo"/>
        </header>
    )
}

export default Header;