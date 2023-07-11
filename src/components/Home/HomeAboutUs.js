import React from "react";
import Decoration from "../../assets/Decoration.svg"
import Signature from "../../assets/Signature.svg"

const HomeAboutUs = () => {
    return (
    <div id="aboutUs" className="container_homeAboutUs">
        <div className="homeAboutUs-box">
            <p className = "homeAboutUs_title">O nas</p>
            <img src={Decoration} className= "decoration" alt="Decoration"/>
            <p className = "homeAboutUs_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img src={Signature} className= "signature" alt="Signarure"/>
        </div>
        <div className="people_img"></div>
    </div>
    )
}

export default HomeAboutUs