import React,{ useEffect, useState } from "./node_modules/react";
import axios from "./node_modules/axios"
import './Goals.css';

function WeeklyGoals() {
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
    <h2>Weekly Goals</h2>
    <button>Add New Goal</button>
    </div>
    <div>
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.WeeklyGoal1}</h2>
      );
    })}
    <button>Completed</button>
    </div>
    <div>
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.WeeklyGoal2}</h2>
      );
    })}
    <button>Completed</button>
    </div>
    <div>
    {goals.map((goal)=>{
      return(
      <h2>{goal.fields.WeeklyGoal3}</h2>
      );
    })}
    <button>Completed</button>
    </div>

  </div>





}

export default WeeklyGoals;