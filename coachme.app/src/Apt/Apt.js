import React,{ useEffect, useState } from "react";
import axios from "axios";
import "./apt.css";

function Apt() {
  const [apts, updateApts] = useState([]);

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
      updateApts(data.data.records);
      console.log(data.data.records);
    };
    apiCall();
  }, []);




  return (
    <div className="big-div">
          <h1>Appointments</h1>
          <button>Create New</button> <br></br>
      
      <div>
        {apts.map((appointments)=>{
          return(
            <div>
              <h2>{appointments.fields.Daytime}</h2>
              <h2>{appointments.fields.Date}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Apt;