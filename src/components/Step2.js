import React from "react";


const Step2 = () => {
   

    return(
      <div className="step_container">
        <p className="step2_title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
        <label className="step2_text">Liczba 60l worków: 
          <select className="step2_select">
            <option value="">- wybierz -</option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
    )
}

export default Step2