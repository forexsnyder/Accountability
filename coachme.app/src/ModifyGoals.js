import React,{ useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";


function ModifyGoals(props) {
  const [name, updateName] = useState("");
  const [dGoal1, updateDGoal1] = useState("");
  const [dGoal2, updateDGoal2] = useState("");
  const [dGoal3, updateDGoal3] = useState("");
  const [wGoal1, updateWGoal1] = useState("");
  const [mGoal1, updateMGoal1] = useState("");
  const [coach, updateCoach] = useState("recMaR6APIP9U10ih");
  console.log(props)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        id:{props},
        fields: {
          Name: name,
          DailyGoal1: dGoal1,
          DailyGoal2: dGoal2,
          DailyGoal3: dGoal3,
          WeeklyGoal1: wGoal1,
          MonthlyGoal1: mGoal1,
          Coach:[coach],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
 
    updateDGoal1("");
    updateDGoal2("");
    updateDGoal3("");
    updateWGoal1("");
    updateMGoal1("");
    updateName("");
    updateCoach("");
  };


  //Create Form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Please Sign Up</h2>
        <label htmlFor="Name">Name</label>
        <input
          type="Text"
          id="Name"
          onChange={(e) => updateName(e.target.value)}
          value={name}
        />
        <label htmlFor="DailyGoal1">1st Daily Goal</label>
        <input
          type="Text"
          id="DailyGoal1"
          onChange={(e) => updateDGoal1(e.target.value)}
          value={dGoal1}
        />
        <label htmlFor="DailyGoal2">2nd Daily Goal</label>
        <input
          type="Text"
          id="DailyGoal2"
          onChange={(e) => updateDGoal2(e.target.value)}
          value={dGoal2}
        />
        <label htmlFor="DailyGoal3">3rd Daily Goal</label>
        <input
          type="Text"
          id="DailyGoal3"
          onChange={(e) => updateDGoal3(e.target.value)}
          value={dGoal3}
        />
        <label htmlFor="WeeklyGoal1">Weekly Goal</label>
        <input
          type="Text"
          id="WeeklyGoal1"
          onChange={(e) => updateWGoal1(e.target.value)}
          value={wGoal1}
        />
        <label htmlFor="MonthlyGoal1">Monthly Goal</label>
        <input
          type="Text"
          id="MonthlyGoal1"
          onChange={(e) => updateMGoal1(e.target.value)}
          value={mGoal1}
        />
        <div>
          <p>Select your coach</p>
          <select value={coach} onChange={(e) => updateCoach(e.target.value)}>
            <option value="recMaR6APIP9U10ih">Jenni</option>
            <option value="rechcqRKnyf0AFEC2">Jeff</option>
          </select>
        </div>
        <input type="submit" value="Finish sign up" />
      </form>
      <div>
      <Link to="/clients">back to your goals</Link>
      </div>
</div>
  );
}

export default ModifyGoals