import React from "react";


const Step3 = () => {
   

    return(
        <div className="step3_container">
          <div className= "step3_location">
            <label className= "step3_location-title">Lokalizacja:</label>
              <select className= "step3_location-select"> 
                <option value="">- wybierz -</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
              </select>
          </div>
          <div className= "step3_help">
            <p className= "step3_help-title">Komu chcesz pomoc?</p>
            <button className= "step3_help-btn">dzieciom</button>
            <button className= "step3_help-btn">samotnym matkom</button>
            <button className= "step3_help-btn">bezdomnym</button><br></br>
            <button className= "step3_help-btn">niepełnosprawnym</button>
            <button className= "step3_help-btn">osobom starszym</button>
          </div>
          <div className= "step3_organization">
            <p className= "step3_organization-title">Wpisz nazwę konkretnej organizacji(opcjonalnie)</p>
            <input className= "step3_organization-input" type="text"></input>
          </div>
        </div>
    )
}

export default Step3