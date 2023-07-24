import React, {useState, useEffect, createContext} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from './components/Home/Home';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LogOut from "./components/LogOut";
import GiveThings from "./components/GiveThings";

import app from "./firebase";

export const AuthContext = createContext(null)

const App = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth(app);

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUser(user);
      } else {
       setUser(null)
      }
    });
  }, []);


  return (
    <AuthContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='logowanie' element={<SignIn />}/>
        <Route path='rejestracja' element={<SignUp />}/>
        <Route path="/wylogowano" element= {<LogOut/>}/>
        <Route path="/oddajrzeczy" element={<GiveThings/>}/>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
