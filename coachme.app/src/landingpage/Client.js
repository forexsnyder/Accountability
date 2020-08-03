
import { Link, Route } from "react-router-dom";
// import DailyGoals from "./Timeframe/DailyGoals";
// import WeeklyGoals from "./Timeframe/WeeklyGoals";
// import MonthlyGoals from "./Timeframe/MonthlyGoals";
import React,{ useEffect, useState } from "react";
import axios from "axios"

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
          {/* <DailyGoals /> */}
        </div>
    </div>
    </div>
  );
}

export default ClientHomepage;