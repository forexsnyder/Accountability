import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import Which from "./Which";
import SignUpForm from "./SignUpForm";
import ClientHomepage from "./Client";
import CoachHomepage from "./Coach";
// import DailyGoals from "./Daily";
// import WeeklyGoals from "./Weekly";
// import MonthlyGoals from "./Monthly";
// import Appointments from "./Appointments";
import { Route } from "react-router-dom";

function App() {
const[fetchClients,updateFetchClients] = useState(false)

  return (
    <div className="App">
      <div>
        <Route path="/" component={Login} exact />
        <Route path="/which">
          <Which
            fetchClients={fetchClients}
          />
        </Route>
        <Route path="/signupform/">
          <SignUpForm
            fetchClients={fetchClients}
            updateFetchClients={updateFetchClients}
          />
        </Route>
        <Route path="/clientlandingpage/:id">
          <ClientHomepage />
        </Route>
        <Route path="/coachlandingpage/:id">
          <CoachHomepage />
        </Route>

      </div>
    </div>
  );
}

export default App;
