import React from 'react';
import '../../styles/layout/footer.scss';
import logo from "../../assets/images/logo/LOGO_footer.png";

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" className="footer-logo"/>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
export default Footer; 