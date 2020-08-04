import React,{ useEffect, useState } from "react";
import axios from "axios"
import { Link, Route } from "react-router-dom";
import './Goals.css';

function DailyGoals() {
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


  return <div className="goal-div">
    <div className="header">
      <h2>Daily Goals</h2>
      <button className="add-new">Add New Goal</button>
    </div>
    
    <div className="goal-box">
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.DailyGoal1}</h2>
      );
    })}
    <button className="completed">Completed</button>
    </div>
    <div className="goal-box">
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.DailyGoal2}</h2>
      );
    })}
    <button className="completed">Completed</button>
    </div>
    <div className="goal-box">
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.DailyGoal3}</h2>
      );
    })}
    <button className="completed">Completed</button>
    </div>
    <Link to="/clientlandingpage">Client</Link>
  </div>





}

export default DailyGoals;