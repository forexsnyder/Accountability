import { Link, Route } from "react-router-dom";
// import DailyGoals from "./Timeframe/DailyGoals";
// import WeeklyGoals from "./Timeframe/WeeklyGoals";
// import MonthlyGoals from "./Timeframe/MonthlyGoals";
import React,{ useEffect, useState } from "react";
import axios from "axios"

function CoachHomepage() {
  const [goals, updateGoals] = useState([]);
  const [apts, updateApts] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateGoals(data.data.records);
      console.log(data.data.records);
    };
    apiCall();
  }, []);
 

  useEffect(() => {
    const apiCall2 = async () => {
      const appointment = await axios.get(
        "https://api.airtable.com/v0/appjseX2kf4ig80GF/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateApts(appointment.data.records);
      console.log(appointment.data.records);
    };
    apiCall2();
  }, []);




  return (
    <div className="App">
      <div className="goals-box">
      <h1>Coach Home page</h1>
        <div className="time-frame">
        {goals.map((goal)=>{
      return(
      <h2>{goal.fields.Name}</h2>
      );
    })}
        {apts.map((appointments)=>{
          return(
            <div>
              <h2>{appointments.fields.Daytime}</h2>
              <h2>{appointments.fields.Date}</h2>
            </div>
          );
        })}
        </div>
    </div>
    </div>
  );
}

export default CoachHomepage;