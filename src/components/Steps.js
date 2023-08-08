import React , {useState} from "react";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import SummarySteps from "./SummarySteps";


const Steps = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        step1Data: '',
        step2Data: '',
        step3Data: '',
        step4Data: '',
        step5Data: '',
    });

    const handleChange = (stepName, data) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [stepName]: data,
        }));
    };
    
    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };
    
    const handlePrevious = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return(
        <div className="steps_container">
            {step <= 4 && <p className="steps_number">Krok {step}/4</p>}
            {step === 1 && <Step1 data={formData.step1Data} onChange={handleChange} />}
            {step === 2 && <Step2 data={formData.step2Data} onChange={handleChange} />}
            {step === 3 && <Step3 data={formData.step3Data} onChange={handleChange} />}
            {step === 4 && <Step4 data={formData.step4Data} onChange={handleChange} />}
            {step === 5 && <SummarySteps data={formData.step4Data} onChange={handleChange} />}
            
            {step === 1 ? "" : <button className=" stepsbtn btn" onClick={handlePrevious} >Wstecz</button>}
            {step < 5 && <button className=" stepsbtn btn" onClick={handleNext}>Dalej</button>}
        </div>
    )
}

export default Steps