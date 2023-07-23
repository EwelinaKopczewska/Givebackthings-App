import React , { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import {Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg"
import app from "../firebase"
import Nav from "./Home/Nav"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const auth = getAuth(app);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }
  return (
    <div className="container_sign">

      <Nav></Nav>

      <div className="sign_box">
        <p className="sign_title">Zaloguj się</p>
        <img src={Decoration} className= "decoration" alt="Decoration"/>
        <div className="sign_box-input">
          <div className="sign_container">
            <label className="sign_text" >Email
              <input
                className="sign_input" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> 
            </label>
            <label className="sign_text">Hasło
              <input
              className="sign_input" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="sign_buttons">
          <Link to="/rejestracja" className="button_signup" style={{marginRight: "308px"}} >Załóż konto</Link>
          <Link to="/" className="button_signin" onClick={() => createUserWithEmailAndPassword(email, password)}>Zaloguj się</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn