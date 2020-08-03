import React from 'react';
import Poster from"./Poster.jpg";
import './Login.css';

function Login() {
  return (
    <div className="App">
        <div className="poster">
        <img src={Poster} alt="demotivational poster"></img>
        </div>
        <div className="buttons">
            <button>Login</button>
            <button>Sign up</button>

        </div>
        

    </div>
  );
}

export default Login;