import React  from "react";
import {Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App";
import { getAuth, signOut } from "firebase/auth";

const NavLog = () => {
    const user = useContext(AuthContext)

    console.log(user)

    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth).then(() => {

          }).catch((error) => {

          });
        setUser(null);
    };
    

    const email = user ?  user.email : '';


    return (
        <div className="navLog">
            {user ? (<>
                <p className="nav_email">Cześć {email}!</p> 
                <Link to="/oddajrzeczy" className="navLog_link">Oddaj rzeczy</Link>
                <Link to="/wylogowano" className="navLog_link" onClick={handleLogout} >Wyloguj</Link>
            </>) : 
            (<>
                <Link to="/logowanie" className="navLog_link" >Zaloguj</Link> 
                <Link to="/rejestracja" className="navLog_link" >Załóż konto</Link>
            </>)}

            
        </div>
    )
}

export default NavLog