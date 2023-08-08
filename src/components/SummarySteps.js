import React from "react";
import Icon1 from "../assets/Icon-1.svg"
import Icon4 from "../assets/Icon-4.svg"

const SummarySteps = () => {
   

    return(
        <div className="summarysteps_container">
            <p className="summarysteps_title">Podsumowanie Twojej darowizny</p>
            <p className="summarysteps_form-title">Oddajesz:</p>
            <div className="summarysteps_box">
                <img src={Icon1} className= "icon" alt="Icon"/>
                <p className="summarysteps_box-text">1</p>
            </div>
            <div className="summarysteps_box">
                <img src={Icon4} className= "icon" alt="Icon"/>
                <p className="summarysteps_box-text"></p>
            </div>
            <div className="summarysteps_container-form">
                <div className="summarysteps-form">
                    <p className="summarysteps_form-title">Adres odbioru </p>
                    <p className="summarysteps_text">Ulica 
                        <p className="summarysteps_dane"></p>
                    </p>
                    <p className="summarysteps_text">Miasto 
                        <p className="summarysteps_dane"></p>
                    </p>
                    <p className="summarysteps_text">Kod <br></br>pocztowy 
                        <p className="summarysteps_dane"></p>
                    </p>
                    <p className="summarysteps_text">Numer <br></br>telefonu 
                        <p className="summarysteps_dane"></p>
                    </p>
                </div>
                <div className="summarysteps-form">
                    <p className="summarysteps_form-title">Termin odbioru
                        <p className="summarysteps_dane"></p>
                    </p>
                    <p className="summarysteps_text">Data 
                        <p className="summarysteps_dane"></p>
                    </p>
                    <p className="summarysteps_text">Godzina
                        <p className="summarysteps_dane"></p>
                    </p>
                    <p className="summarysteps_text">Uwagi <br></br> dla kuriera 
                        <p className="summarysteps_dane"></p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SummarySteps