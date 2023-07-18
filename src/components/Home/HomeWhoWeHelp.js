import React , {useState} from "react";
import Decoration from "../../assets/Decoration.svg"
import WhoWeHelpOrganization from "./WhoWeHelpOrganization";

import listOfFoundations from "../ListWhoHelp/listOfFoundations";
import listOfOrganizations from "../ListWhoHelp/listOfOrganizations ";
import listOfLocalCollections from "../ListWhoHelp/listOfLocalCollections";


const HomeWhoWeHelp = () => {

    const [clickedButton, setClickedButton] = useState(0);

    const descriptionFoundations = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    const descriptionOrganizations = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
    const descriptionLocalCollections = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."

    const l1 = listOfFoundations;
    const l2 = listOfOrganizations;
    const l3 = listOfLocalCollections;

    let whoWeHelpOrganization;

    if (clickedButton === 0) {
        whoWeHelpOrganization = < WhoWeHelpOrganization description={ descriptionFoundations } listOfItems={ l1 }/>;
    } else if (clickedButton === 1) {
        whoWeHelpOrganization = < WhoWeHelpOrganization description={ descriptionOrganizations } listOfItems={ l2 }/>;
    } else if (clickedButton === 2) {
        whoWeHelpOrganization = < WhoWeHelpOrganization description={ descriptionLocalCollections } listOfItems={ l3 }/>;
    }

    let foundationsClickButton =  () => {
        setClickedButton(0);
    };
    let organizationsClickButton =  () => {
        setClickedButton(1);
    };
    let localsCollectionsClickButton =  () => {
        setClickedButton(2);
    };

    return (
        <div id="whoWeHelp" className= "container_homewhowehelp">
            <div >
                <p className= "homewhowehelp-title">Komu pomagamy?</p>
                <img src={Decoration} className= "decoration" alt="Decoration"/>
            </div>
            <div className= "homewhowehelp_buttons">
                <div className="whoWeHelpButton" onClick={foundationsClickButton}> Fundacjom </div>
                <div className="whoWeHelpButton" onClick={organizationsClickButton}>Organizacjom <br></br> pozarządowym</div>
                <div className="whoWeHelpButton" onClick={localsCollectionsClickButton}>Lokalnym <br></br> zbiórkom</div>
            </div>
            {whoWeHelpOrganization}
        </div>
    )
}

export default HomeWhoWeHelp;