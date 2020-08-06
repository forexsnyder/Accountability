import React,{ useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import './Goals.css';

function DailyGoals(props) {
  const [goals, updateGoals] = useState([]);
  const params = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Table%201/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      // updateGoals(data.data.records);
      console.log(data);
    };
    apiCall();
  }, []);


  return <div className="goal-div">
    <Link to="/clientlandingpage/:id">Client</Link>
  </div>





}

export default DailyGoals;