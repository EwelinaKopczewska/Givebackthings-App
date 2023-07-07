import React from "react";
import {Link } from "react-router-dom";
import Nav from "./Nav";
import Decoration from "../../assets/Decoration.svg"
import HomeImage from "../../assets/Home-Hero-Image.jpg"

const HomeHeader = () => {
    return (
        <header className="header">
            <img src={HomeImage} className= "header_img" alt="Home"/>    
            <div className="header_container">
                <Nav></Nav>
                <div className="header_box">
                    <h1 className= "header_title" >Zacznij pomagać!<br></br><br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} className= "header_icon" alt="Decoration"/>
                    <div className= "header_btn">
                        <Link to="/logowanie"><button className= "header_btn-first btn ">ODDAJ<br></br>RZECZY</button></Link>
                        <Link to="/logowanie"><button className= "header_btn-second btn ">ZORGANIZUJ<br></br>ZBIÓRKĘ</button></Link>
                    </div>
                </div>
            </div>   
        </header>
    )
}

export default HomeHeader