import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import Which from "./Which";
import SignUpForm from "./SignUpForm";
import ClientHomepage from "./Client";
import CoachHomepage from "./Coach";
import DailyGoals from "./Daily";
import WeeklyGoals from "./Weekly";
import MonthlyGoals from "./Monthly";
import Appointments from "./Appointments";
import { Route } from "react-router-dom";

function App() {
// const[newGoal,updateNewGoal] = useState(false)

  return (
    <div className="App">
      <div>
        <Route path="/" component={Login} exact />
        <Route path="/which" component={Which} />
        <Route path="/signupform/" component={SignUpForm} />
        <Route path="/clientlandingpage/:id">
          <ClientHomepage />
        </Route>
        {/* <Route path="/clientlandingpage/:id" component={ClientHomepage}/> */}
        <Route path="/coachlandingpage/:id">
          <CoachHomepage />
        </Route>
        {/* <Route path="/dailygoals/:id">
          <DailyGoals />
        </Route>
        <Route path="/weeklygoals" component={WeeklyGoals} />
        <Route path="/monthlygoals" component={MonthlyGoals} />
        <Route path="/appointments" component={Appointments} /> */}
      </div>
    </div>
  );
}

export default App;
