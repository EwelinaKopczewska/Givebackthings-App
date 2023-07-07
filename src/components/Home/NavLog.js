import React from "react";
import {Link } from "react-router-dom";

const NavLog = () => {
    return (
        <div className="navLog">
            <Link to="/logowanie" className="navLog_link" >Zaloguj</Link>
            <Link to="/rejestracja" className="navLog_link" >Załóż konto</Link>
        </div>
    )
}

export default NavLog