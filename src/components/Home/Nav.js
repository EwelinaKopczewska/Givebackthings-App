import React from "react";
import { HashLink } from 'react-router-hash-link';
import NavLog from "./NavLog";


const Nav = () => {
    

    return (
        <div className="containerNav">
            <NavLog></NavLog>
            <div className="nav">
                <HashLink smooth to="/" className="nav_link">Start</HashLink>
                <HashLink smooth to="/#whatIsItAbout" className="nav_link">O co chodzi?</HashLink>
                <HashLink smooth to="/#aboutUs" className="nav_link">O nas</HashLink>
                <HashLink smooth to="/#whoWeHelp" className="nav_link">Fundacja i organizacje</HashLink>
                <HashLink smooth to="/#homeContact" className="nav_link">Kontakt</HashLink>
            </div>
        </div>
    )
}

export default Nav