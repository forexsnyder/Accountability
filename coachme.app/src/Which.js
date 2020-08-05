import React, { useEffect, useState } from 'react';
import { Link, Route } from "react-router-dom";
import './Login.css';
import axios from "axios";
import DailyGoals from './Daily';

function Which(props) {
  const [clients, updateClients] = useState([]);
  const [coaches, updateCoaches] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      console.log(data);
      updateClients(data.data.records);
      
    };
    apiCall();
  }, []);
  

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appjseX2kf4ig80GF/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateCoaches(data.data.records);
      console.log(data.data.records);
    };
    apiCall();
  }, []);

  return (
    <div className="App">
        <h1>Are you a Coach or a Client?</h1>
      <div>
        <h1>Clients</h1>
        {clients.map((client) => {
          return (
            <Link to={`/clientlandingpage/${client.id}`}>
              <h2>{client.fields.Name}</h2>
            </Link>
          );
        })}
      </div>
      <div>
        <h1>Coaches</h1>
        {coaches.map((coach) => {
          return (
            <Link to={`/coachlandingpage/${coach.id}`}>
              <h2>{coach.fields.Coach}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Which;