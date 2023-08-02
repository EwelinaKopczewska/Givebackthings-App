import React , { useState , useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import {Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg"
import app from "../firebase"
import Nav from "./Home/Nav"

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');


    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false);

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }
    const changeRepeatPassword = (event) => {
        setPasswordRepeat(event.target.value);
    }
    const auth = getAuth(app);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {
        
          if (error.code.includes('email')) {
            setEmailError(error.message);
            setPasswordError('');
            setPasswordErrorRepeat('');
          } else if (error.code.includes('password')) {
            setPasswordError(error.message);
            setEmailError('');
            setPasswordErrorRepeat('');
          } 
        }
    },[error , password , passwordRepeat]);

    useEffect(() => {
        if (password !== passwordRepeat) {
            setPasswordErrorRepeat(true);
        } else {
            setPasswordErrorRepeat(false);
        }
    }, [password, passwordRepeat]);

      console.log(passwordErrorRepeat)
    console.log(password)
    console.log(passwordRepeat)

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container_sign">

        <Nav className="navlog"></Nav>

        <div className="sign_box">
            <p className="sign_title">Załóż konto</p>
            <img src={Decoration} className= "decoration" alt="Decoration"/>
            <div className="sign_box-input">
                <form className="sign_container">
                    <label className="sign_text" >Email
                    <input
                        className={`sign_input ${emailError? 'error_border' : ''}`}
                        type="email"
                        value={email}
                        onChange={changeEmail}
                    /> 
                    </label>
                    { emailError ? <div className = "errorEmail" >Podany mail już istnieje!</div> : "" }
                    <label className="sign_text">Hasło
                    <input
                        className={`sign_input ${passwordError? 'error_border' : ''}`} 
                        type="password"
                        value={password}
                        onChange={changePassword}
                    />
                    </label>
                    {passwordError ? <div className = "errorEmail" >Podane hasło jest za krótkie!</div> : "" }
                    <label className="sign_text">Powtórz hasło
                    <input
                        className={`sign_input ${passwordErrorRepeat? 'error_border' : ''}`}
                        type="password"
                        value={passwordRepeat}
                        onChange={changeRepeatPassword }
                    />
                    </label>
                    { passwordErrorRepeat && <div className = "errorEmail" >Hasła muszą być takie same!</div> }
                    <div className="sign_buttons">
                        {user ? <><Link to="/logowanie" className="button_signin" style={{marginRight: "308px"}}>Zaloguj się</Link>
                        <Link to="/" className="button_signup" onClick={() => createUserWithEmailAndPassword(email, password)} >Załóż konto</Link> </> 
                        :<><Link to="/logowanie" className="button_signin" style={{marginRight: "308px"}}>Zaloguj się</Link>
                        <Link to="/rejestracja" className="button_signup" onClick={() => createUserWithEmailAndPassword(email, password)} >Załóż konto</Link></>}
                    </div>
                </form>
            </div>
            
        </div>
        </div>
    );
};
  
export default SignUp