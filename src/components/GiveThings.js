import React from "react";
import Nav from "./Home/Nav";
import HomeContact from "./Home/HomeContact";
import Steps from "./Steps";
import Info from "./Info";
import GiveThingsImg from "../assets/Form-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"

const GiveThings = () => {
    return(
        <div>
            <div className="container_givethings">
                <img src={GiveThingsImg} className= "givethings_img" alt="Sweater"/> 
                <div className="containerNav">
                    <Nav></Nav>
                    <div className="givethings_box">
                        <h1 className= "givethings_title">Oddaj rzeczy, których już nie chcesz <br></br> POTRZEBUJĄCYM</h1>
                        <img src={Decoration} className= "decoration" alt="Decoration"/>
                        <p className= "givethings_text">Wystarczą 4 proste kroki:</p>
                        <div className="givethings_steps">
                            <div className="givethings_step">
                                <p>1</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                            <div className="givethings_step">
                                <p>2</p>
                                <p>Spakuj je w worki</p>
                            </div>
                            <div className="givethings_step">
                                <p>3</p>
                                <p>Wybierz fundację</p>
                            </div>
                            <div className="givethings_step">
                                <p>4</p>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Info></Info>
            <Steps></Steps>
            <HomeContact></HomeContact>
        </div>
    )
}

export default GiveThings