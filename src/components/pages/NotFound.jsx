import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <div className="notfound">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="notfound-link">Retourner sur la page d'accueil</Link>
        </div>
    )
  }
  
  export default NotFound;