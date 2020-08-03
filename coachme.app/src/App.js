import React from 'react';
import Login from './signup/Login';
import './App.css';
import Which from './signup/Which';
import SignUpForm from './signup/SignUpForm';
import ClientHomepage from './landingpage/Client';
import CoachHomepage from './landingpage/Coach';
import DailyGoals from './goals/Daily';
import WeeklyGoals from './goals/Weekly';
import MonthlyGoals from './goals/Monthly';
import Apt from './appointments/Apt';
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <div>
        <Route path="/" component={Login} exact />
        <Route path="/which" component={Which}/>
        <Route path="/signupform" component={SignUpForm} />
        <Route path="/clientlandingpage" component={ClientHomepage} />
        <Route path="/coachlandingpage"  component={CoachHomepage} />
        <Route path ="/dailygoals" component={DailyGoals} />
        <Route path ="/weekygoals" component={WeeklyGoals} />
        <Route path ="/monthlygoals" component={MonthlyGoals} />
        <Route path ="/apt" component={Apt} />

      </div>
    </div>
  );
}

export default App;
