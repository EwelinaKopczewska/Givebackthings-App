import React from "react";
import {Link } from "react-router-dom";

const NavLog = () => {
    return (
        <div className="navLog">
            <Link to="/logowanie" className="navLog_btn" >Zaloguj</Link>
            <Link to="/rejestracja" className="navLog_btn" >Załóż konto</Link>
        </div>
    )
}

export default NavLog