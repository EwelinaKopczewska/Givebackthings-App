import React from "react";
import { HashLink } from 'react-router-hash-link';
import NavLog from "./NavLog";

const Nav = () => {
    return (
        <div>
            <NavLog></NavLog>
            <div className="nav">
                <HashLink smooth to="/">Start</HashLink>
                <HashLink smooth to="/#whatIsItAbout">O co chodzi?</HashLink>
                <HashLink smooth to="/#aboutUs">O nas</HashLink>
                <HashLink smooth to="/#whoWeHelp">Fundacja i organizacje</HashLink>
                <HashLink smooth to="/#homeContact">Kontakt</HashLink>
            </div>
        </div>
    )
}

export default Nav