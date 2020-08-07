import React, { useEffect, useState } from 'react';
import { Link, Route } from "react-router-dom";
import './Login.css';
import axios from "axios";
// import DailyGoals from './Daily';

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
        "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Coaches?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateCoaches(data.data.records);
      console.log(data);
    };
    apiCall();
  }, []);

  return (
    <div className="login">
        <header>Are you a Coach or a Client?</header>
        <h2>Clients</h2>
      <div className="client-div">
        {clients.map((client) => {
          return (
            <Link to={`/clientlandingpage/${client.id}`}>
             <div className="client-box">
             <h3>{client.fields.Name}</h3>
             </div>             
            </Link>
          );
        })}
      </div>
      <div>
        <h2>Coaches</h2>
        <div className="client-div">
        {coaches.map((coach) => {
          return (
            <Link to={`/coachlandingpage/${coach.id}`}>
              <div className="client-box">
              <h3>{coach.fields.Name}</h3>
              </div>            
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Which;