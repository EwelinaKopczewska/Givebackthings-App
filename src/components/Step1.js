import React from "react";


const Step1 = ({ data, onChange }) => {
   
    const handleInputChange = (e) => {
    
        const { name, checked } = e.target;
        console.log(e.target)     
        onChange('step1Data', { ...data, [name]: checked });
    };

    

    return(
        <div className="step_container">
            <p className="step1_title">Zaznacz co chcesz oddać:</p>
            <label className="step1_text">
                <input 
                className="step1_input"
                type="checkbox" 
                name="reusableClothes" 
                checked={data.reusableClothes || false}
                onChange={handleInputChange} ></input> ubrania,które nadają się do ponownego użycia
            </label>
            <label className="step1_text">
                <input 
                className="step1_input"
                type="checkbox" 
                name="clothesToThrowAway" 
                checked={data.clothesToThrowAway || false}
                onChange={handleInputChange} ></input> ubrania, do wyrzucenia
            </label>
            <label className="step1_text">
                <input 
                className="step1_input"
                type="checkbox" 
                name="toys" 
                checked={data.toys || false}
                onChange={handleInputChange}></input> zabawki
            </label>
            <label className="step1_text">
                <input 
                className="step1_input"
                type="checkbox" 
                name="books"
                checked={data.books || false} 
                onChange={handleInputChange}></input> ksiązki
            </label>
            <label className="step1_text">
                <input 
                className="step1_input"
                type="checkbox" 
                name="other"
                checked={data.other || false}
                onChange={handleInputChange}></input> Inne
            </label>
        </div>
    )
}

export default Step1