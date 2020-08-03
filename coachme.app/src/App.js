import React from 'react';
import Login from './signup/Login';
import './App.css';
import Which from './signup/Which';
import SignUpForm from './signup/SignUpForm';
import ClientHomepage from './landingpage/Client';
import CoachHomepage from './landingpage/Coach';
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <div>
      <Login />
      </div> */}
      <div>
        <Route path="/" component={Login} exact />
        <Route path="/which" component={Which}/>
        <Route path="/signupform" component={SignUpForm} />
        <Route path="/clientlandingpage" component={ClientHomepage} />
        <Route path="/coachlandingpage"  component={CoachHomepage} />
      </div>
    </div>
  );
}

export default App;
