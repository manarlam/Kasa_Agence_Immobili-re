import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/notfound.scss";

function NotFound() {
    return ( 
        <div>
            <div className="notfound">
                <h1 className="notfound-title">404</h1>
                <p className="notfound-text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="notfound-link">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
  }
  
  export default NotFound;