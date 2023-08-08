import React from "react";


const Step4 = () => {
   

    return(
      <div className="step4_container">
        <p className="step4_title">Podaj adres oraz termin odbioru rzecz przez kuriera</p>
        <div className="step4_container-box">
          <div className="step4_box">
            <p className="step4_text">Adres odbioru</p>
            <label className="step4_label">Ulica <input className="step4_input" type="text"/></label>
            <label className="step4_label">Miasto <input className="step4_input" type="text"/></label>
            <label className="step4_label">Kod <br></br>pocztowy <input className="step4_input" type="text"/></label>
            <label className="step4_label">Numer <br></br>telefonu <input className="step4_input" type="text"/></label>
          </div>
          <div className="step4_box">
            <p className="step4_text">Termin odbioru</p>
            <label className="step4_label">Data <input className="step4_input" type="text"/></label>
            <label className="step4_label">Godzina <input className="step4_input" type="text"/></label>
            <label className="step4_label">Uwagi <br></br>dla kuriera <input className="step4_input" type="text"/></label>
          </div>
        </div>
      </div>
    )
}

export default Step4