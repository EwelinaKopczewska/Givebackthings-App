import React , { useState } from 'react';
import {Link, useNavigate } from "react-router-dom";
import Decoration from "../assets/Decoration.svg"
import app from "../firebase"
import Nav from "./Home/Nav"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigate();

  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if (user) {
        console.log(user)
        setUser(user);
        navigation("/")
      }
    })
    .catch((error) => {
      if (error.code.includes('email')) {
        setEmailError(error.message);
        console.log(error.message)
        setPasswordError('');
      } 
      else if (error.code.includes('password')) {
        setPasswordError(error.message);
        setEmailError('');
      } 
    });
    setUser(user);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    login(); 
  };
  
  return (
    <div className="container_sign">

      <Nav></Nav>

      <div className="sign_box">
        <p className="sign_title">Zaloguj się</p>
        <img src={Decoration} className= "decoration" alt="Decoration"/>
        
          <form onSubmit={handleSubmit} className="sign_container">
            <label className="sign_text" >Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`sign_input ${emailError? 'error_border' : ''}`}
              /> 
            </label>
            { emailError ? <div className = "errorEmail" >Podany mail jest nieprawidłowy!</div> : "" }
            <label className="sign_text">Hasło
              <input
                className={`sign_input ${passwordError ? 'error_border' : ''}`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {passwordError ? <div className = "errorEmail" >Podane hasło jest nieprawidłowe!</div> : "" }
            <div className="sign_buttons">
              <Link to="/rejestracja" className="button_signup" style={{marginRight: "308px"}} >Załóż konto</Link>
              {user ? <Link to="/" className="button_signin" >Zaloguj się</Link> : 
              <button type="submit"  className="button_signin" onClick={login}>Zaloguj się</button> }
            </div>
          </form>
      </div>
    </div>
  );
};

export default SignIn

