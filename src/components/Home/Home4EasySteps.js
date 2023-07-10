import React from "react";
import {Link } from "react-router-dom";

import Decoration from "../../assets/Decoration.svg"
import Icon1 from "../../assets/Icon-1.svg"
import Icon2 from "../../assets/Icon-2.svg"
import Icon3 from "../../assets/Icon-3.svg"
import Icon4 from "../../assets/Icon-4.svg"

const Home4EasySteps = () => {
    return (
    <div id="whatIsItAbout" className = "container_home4EasySteps">
        <div>
            <p className = "home4EasySteps_title">Wystarczą 4 proste kroki</p>
            <img src={Decoration} className= "decoration" alt="Decoration"/>
        </div>
        <div className = "container_home4EasySteps-box">
            <div className = "container_home4EasySteps-boxes">
                <img src={Icon1} className= "icon" alt="Icon"/>
                <p className= "step-title">Wybierz rzeczy</p>
                <p className= "step-text" >ubrania, zabawki, <br></br>sprzęt i inne</p>
            </div>
            <div className = "container_home4EasySteps-boxes" >
                <img src={Icon2} className= "icon" alt="Icon"/>
                <p className= "step-title" >Spakuj je</p>
                <p className= "step-text" >skorzystaj z <br></br>worków na śmieci</p>
            </div>
            <div className = "container_home4EasySteps-boxes">
                <img src={Icon3} className= "icon" alt="Icon"/>
                <p className= "step-title" >Zdecyduj komu <br></br>chcesz pomóc</p>
                <p className= "step-text" >wybierz zaufane <br></br>miejsce</p>
            </div>
            <div className = "container_home4EasySteps-boxes">
                <img src={Icon4} className= "icon icon-four" alt="Icon"/>
                <p className= "step-title step-four" >Zamów kuriera</p>
                <p className= "step-text" >kurier przyjedzie <br></br>w dogodnym terminie</p>
            </div>
        </div>
        <Link to="/logowanie"><button className= "home4EasySteps_btn btn ">ODDAJ<br></br>RZECZY</button></Link>
    </div>
    )
}

export default Home4EasySteps