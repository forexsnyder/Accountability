import React from 'react';
import { Link } from "react-router-dom";
import Poster from"./Poster.jpg";
import './Login.css';
import SignUpForm from './SignUpForm';
import Which from "./Which";

function Login() {
  return (
    <div className="App">
        <div className="poster">
        <img src={Poster} alt="demotivational poster"></img>
        </div>
        <div className="buttons">
            <Link to="/which">Login</Link>
            <Link to="/signupform">Sign Up</Link>
        </div>
    </div>
  );
}

export default Login;