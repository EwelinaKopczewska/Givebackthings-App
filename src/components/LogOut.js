import React  from 'react';
import Decoration from "../assets/Decoration.svg"
import {Link } from "react-router-dom";
import Nav from "./Home/Nav"

const LogOut= () => {

    return (
      <div className= "container_sign">
        <Nav></Nav>
        <div className="sign_box">
          <p className="logOut_title"> Wylogowanie nastąpiło <br></br> pomyślnie!</p>
          <img src={Decoration} className= "decoration" alt="Decoration"/>
          <Link to="/" className="logOut_button">Strona główna</Link>
        </div>
      </div>
    );
  };
  
  export default LogOut