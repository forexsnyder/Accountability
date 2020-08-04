import React,{ useEffect, useState } from "react";
import axios from "axios"
import { Link, Route } from "react-router-dom";
import './Goals.css';

function MonthlyGoals() {
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


  return <div className="goal-box">
    <div className="header">
    <h2>Monthly Goals</h2>
    <button>Add New Goal</button>
    </div>
    <div>
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.MonthlyGoal1}</h2>
      );
    })}
    <button>Completed</button>
    </div>
    <div>
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.MonthlyGoal2}</h2>
      );
    })}
    <button>Completed</button>
    </div>
    <div>
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.MonthlyGoal3}</h2>
      );
    })}
      <button>Completed</button>
      <Link to="/clientlandingpage">Client</Link>
    </div>
    


  </div>





}

export default MonthlyGoals;