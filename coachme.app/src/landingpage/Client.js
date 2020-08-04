
import { Link, Route } from "react-router-dom";
import DailyGoals from "./goals/Daily";
import WeeklyGoals from "./goals/Weekly";
import MonthlyGoals from "./goals/Monthly";
import Appointments from './appointments/Appointments';
import React,{ useEffect, useState } from "react";
import axios from "axios"
import "./Landingpage.css"

function ClientHomepage() {
  const [goals, updateGoals] = useState([]);
  

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


  return (
    <div className="App">
      <div className="goals-box">
        <h1>Client Home page</h1>
        <div className="time-frame">
          <Link to="/monthlygoals">Monthly</Link>
          <Link to="/weeklygoals">Weekly</Link>
          <Link to="/dailygoals">Daily</Link>
        </div>

        <div className="overview-div">
        <div className="overview-box1">
          <h1>Monthly Goal:</h1>
          {goals.map((goal)=>{
          return(
            <h2>{goal.fields.MonthlyGoal1}</h2>
            );
          })}
          </div>
          <div className="overview-box2">
          <h1>Weekly Goal:</h1>
          {goals.map((goal)=>{
          return(
            <h2>{goal.fields.WeeklyGoal1}</h2>
            );
          })}
        
        </div>
        </div>


        <div className="goals-div">
          <DailyGoals />
        </div>
        
        <div>
          <Appointments />
        </div>
    </div>
    </div>
  );
}

export default ClientHomepage;