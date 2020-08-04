import React from "react";
import Login from "./signup/Login";
import "./App.css";
import Which from "./signup/Which";
import SignUpForm from "./signup/SignUpForm";
import ClientHomepage from "./landingpage/Client";
import CoachHomepage from "./landingpage/Coach";
import DailyGoals from "./landingpage/goals/Daily";
import WeeklyGoals from "./landingpage/goals/Weekly";
import MonthlyGoals from "./landingpage/goals/Monthly";
import Appointments from "./landingpage/appointments/Appointments";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Route path="/" component={Login} exact />
        <Route path="/which" component={Which} />
        <Route path="/signupform" component={SignUpForm} />
        <Route path="/clientlandingpage" component={ClientHomepage} />
        <Route path="/coachlandingpage" component={CoachHomepage} />
        <Route path="/dailygoals" component={DailyGoals} />
        <Route path="/weeklygoals" component={WeeklyGoals} />
        <Route path="/monthlygoals" component={MonthlyGoals} />
        <Route path="/appointments" component={Appointments} />
      </div>
    </div>
  );
}

export default App;
