import React,{ useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import "./ModifyGoals.css"; 


function ModifyGoals(props) {
  const [name, updateName] = useState("");
  const [dGoal1, updateDGoal1] = useState("");
  const [dGoal2, updateDGoal2] = useState("");
  const [dGoal3, updateDGoal3] = useState("");
  const [wGoal1, updateWGoal1] = useState("");
  const [mGoal1, updateMGoal1] = useState("");
  const [coach, updateCoach] = useState("recMaR6APIP9U10ih");
  const params = useParams()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        "records": [
          {
            "id":`${params.id}`,
            "fields": {
              "DailyGoal1": dGoal1,
              
            },
          }
        ]

      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
 
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        "records": [
          {
            "id":`${params.id}`,
            "fields": {
              "DailyGoal2": dGoal2,
              
            },
          }
        ]

      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
 
  };
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        "records": [
          {
            "id":`${params.id}`,
            "fields": {
              "DailyGoal3": dGoal3,
              
            },
          }
        ]

      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
 
  };
  const handleSubmit4 = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        "records": [
          {
            "id":`${params.id}`,
            "fields": {
              "WeeklyGoal1": wGoal1,
              
            },
          }
        ]

      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
 
  };
  const handleSubmit5 = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        "records": [
          {
            "id":`${params.id}`,
            "fields": {
              "MonthlyGoal1": mGoal1,
              
            },
          }
        ]

      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
 
  };
  //Create Form
  return (
    <div className="main">
      <header>Update Your Goals</header>
    
        <div >
        <form classname="label-div" onSubmit={handleSubmit}>
        <label htmlFor="daily-goal1">Your first Daily Goal</label>
        <input
          type="Text"
          id="Daily Goal1"
          onChange={(e) => updateDGoal1(e.target.value)}
          value={dGoal1}
        />
        <input type="submit" value="Update Now" />
      </form>
      
      
      <form  onSubmit={handleSubmit2}>
        <label htmlFor="daily-goal2">Your second Daily Goal</label>
        <input
          type="Text"
          id="Daily Goal1"
          onChange={(e) => updateDGoal2(e.target.value)}
          value={dGoal2}
        />
        <input type="submit" value="Update Now" />
      </form>
      

      
      <form  onSubmit={handleSubmit3}>
        <label htmlFor="daily-goal3">Your third Daily Goal</label>
        <input
          type="Text"
          id="Daily Goal3"
          onChange={(e) => updateDGoal3(e.target.value)}
          value={dGoal3}
        />
        <input type="submit" value="Update Now" />
      </form>

      
      
      <form  onSubmit={handleSubmit4}>
        <label htmlFor="weekly-goal2">Your Weekly Goal</label>
        <input
          type="Text"
          id="Weekly Goal1"
          onChange={(e) => updateWGoal1(e.target.value)}
          value={wGoal1}
        />
        <input type="submit" value="Update Now" />
      </form>

      
      
      <form  onSubmit={handleSubmit5}>
        <label htmlFor="monthly-goal1">Your Monthly Goal</label>
        <input
          type="Text"
          id="Monthly Goal1"
          onChange={(e) => updateMGoal1(e.target.value)}
          value={mGoal1}
        />
        <input type="submit" value="Update Now" />
      </form>
      

      </div>
</div>
  );
}

export default ModifyGoals