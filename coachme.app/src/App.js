import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import Which from "./Which";
import SignUpForm from "./SignUpForm";
import ClientHomepage from "./Client";
import CoachHomepage from "./Coach";
import ModifyGoals from "./ModifyGoals";
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
          <ClientHomepage
          clientId={clientId}
          />
        </Route>
        <Route path="/coachlandingpage/:id">
          <CoachHomepage />
        </Route>
        <Route path="/modifygoals">
          <ModifyGoals
          clientId={clientId}
          />
        </Route>
        {/* Modify Goals */}
        {/* Appointments */}

      </div>
    </div>
  );
}

export default App;
