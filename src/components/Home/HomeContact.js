import React , { useState} from "react";
import ContactImg from "../../assets/Background-Contact-Form.jpg"
import Decoration from "../../assets/Decoration.svg"
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"

const HomeContact = () => {
    const [errorname , setErrorName] =useState("");
    const [erroremail , setErrorEmail] =useState("");
    const [errormsg , setErrorMsg] =useState("");

    const [form, setForm] = useState({
        name: "",
        email:"",
        message: "",
    });

    const [success , setSuccess] = useState(false)

    const validateName = form => {

        if(!form.name  ){
          return "Podane Imię jest nieprawidłowe!"
        }else if(!/^\S+$/.test(form.name)){
          return "Podane Imię jest nieprawidłowe!"
        }
    }

    const validateEmail = form => {
        if(!form.email){
          return "Podany mail jest nieprawidłowy!"
        }else if(form.email.length < 3){
          return"Adres mailowy jest za krótki"
        }
    }

    const validateMsg = form => {
        if(!form.message){
          return "Wiadomość musi mieć conajmniej 120 znaków!"
        }else if(form.message.length < 120){
          return "Wiadomość musi mieć conajmniej 120 znaków!"
        }
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const errorName = validateName(form)
      const errorEmail = validateEmail(form)
      const errorMsg = validateMsg(form)

        if(errorName) {
            setErrorName(errorName) 
            setErrorEmail("")
            setErrorMsg("")
            setSuccess(false)
            return
        } else if(errorEmail) {
            setErrorEmail(errorEmail)
            setErrorName("") 
            setErrorMsg("")
            setSuccess(false)
            return
        } else if(errorMsg) {
            setErrorMsg(errorMsg)
            setErrorName("") 
            setErrorEmail("")
            setSuccess(false)
            return
        } 

        setSuccess(true)

        if(setSuccess){
            setErrorName("") 
            setErrorEmail("")
            setErrorMsg("")
        }

        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);  
        })

        setForm({
            name: "",
            email:"",
            message: "",
        });
    }

    return  (
    <>
        <div id ="homeContact" className="container_contact" >
            <img src={ContactImg} className= "contact_img" alt="clothes"/> 
            <form className="container_form" onSubmit={handleSubmit}>
                <p className="contact_title">Skontaktuj się z nami</p>
                <img src={Decoration} className= "decoration" alt="Decoration"/>
                {success ? (<p style={{color:"darkgreen" ,marginTop: "-50px", marginBottom: "35px"}} >Wiadomość została wysłana! <br></br><br></br>Wkrótce się skontaktujemy.</p>) : <p></p>}
                <div className="contact_box">
                    <label className="contact_box-label">Wpisz swoje imię
                        <input className="contact_box-input" type="text" name="name" value ={form.name } placeholder="Krzysztof" onChange={handleInputChange}></input>
                        <div style={{color:"red" , marginTop: "10px"}}>{errorname ? errorname : ""}</div>
                    </label>
                    <label className="contact_box-label">Wpisz swój email
                        <input className="contact_box-input" type="email" name="email" value ={form.email } placeholder="abc@xyz.pl" onChange={handleInputChange} ></input>
                        <div style={{color:"red" , marginTop: "10px"}}>{erroremail ? erroremail : ""}</div>
                    </label> 
                </div>
                <label className="contact_box-message">Wpisz swoją wiadomość
                    <textarea className="contact_box-input-message" type="text" name="message" value ={form.message }  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." onChange={handleInputChange}></textarea>
                    <div style={{color:"red" , marginTop: "10px"}}>{errormsg ? errormsg : ""}</div>
                </label>
                
                <button className="button_contact">Wyślij</button>
            </form>
        </div>
        <div className="contact_footer">
            <p className="contact_footer-text" >Copyright by Coders Lab</p>
            <div className="">
                <img src={Facebook} className= "contact_footer-icon" alt="facebook"/> 
                <img src={Instagram} className= "contact_footer-icon" alt="instagram"/> 
            </div>
        </div>
    </>
    )
}

export default HomeContact