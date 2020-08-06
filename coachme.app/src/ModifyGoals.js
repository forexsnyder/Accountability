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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients`,
      {
        "records": [
          {
            "id":"recT3Fxj9OfAOq7hA",
            "fields": {
              "DailyGoal1": dGoal1,
              "DailyGoal2":dGoal2,
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Update Your Goals</h2>
        <label htmlFor="daily-goal1">Your first Daily Goal</label>
        <input
          type="Text"
          id="Daily Goal1"
          onChange={(e) => updateDGoal1(e.target.value)}
          value={dGoal1}
        />
        <input type="submit" value="Update your goal(s)" />
      </form>
  
      <div>
      <Link to="/clients/">back to your goals</Link>
      </div>
</div>
  );
}

export default ModifyGoals