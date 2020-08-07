import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Landingpage.css";

function CoachHomepage(props) {
  const [client, updateClient] = useState([]);
  const [dgoal1, updateDGoal1] = useState([]);
  const [dgoal2, updateDGoal2] = useState([]);
  const [dgoal3, updateDGoal3] = useState([]);
  const [wgoal1, updateWGoal1] = useState([]);
  const [mgoal1, updateMGoal1] = useState([]);
  // const [dGCompleted1, updateDGCompleted1] = useState([]);
  // const [dGCompleted2, updateDGCompleted2] = useState([]);
  // const [dGCompleted3, updateDGCompleted3] = useState([]);
  // const [wCompleted, updateWCompleted] = useState([]);
  // const [mCompleted, updateMCompleted] = useState([]);
  const params = useParams();

  useEffect(() => {
    const apiCall2 = async () => {
      const client = await axios.get(
        `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Coaches/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );

      updateClient(client.data.fields.ClientLook);
      updateDGoal1(client.data.fields.DGoal1);
      updateDGoal2(client.data.fields.DGoal2);
      updateDGoal3(client.data.fields.DGoal3);
      updateWGoal1(client.data.fields.WGoal);
      updateMGoal1(client.data.fields.MGoal);
      // updateDGCompleted1(client.data.fields.DGCompleted1);
      // updateDGCompleted2(client.data.fields.DGCompleted2);
      // updateDGCompleted3(client.data.fields.DGCompleted3);
      // updateWCompleted(client.data.fields.WCompleted);
      // updateMCompleted(client.data.fields.MCompleted);
    
    };
    apiCall2();
  }, []);
  //for loop
  if (wgoal1 !== []) {
    return (
      <div className="big-div">
        <h3>Coach Home page</h3>
        <div className="goals-box">
          
          <div>
            {(function () {
              let rows = [];
              for (let i = 0; i < client.length; i++) {
                rows.push(
                  <div className="box">
                    {client[i]}
                    <p>Monthly Goal:{mgoal1[i]}</p>
                    
                    <p>Weekly Goal: {wgoal1[i]}</p>
          
                    <p>
                      <div>
                      Daily Goals:
                      <div>
                      {dgoal1[i]}
                      </div>
                      <div>
                      {dgoal2[i]}
                        </div>
                        <div>
                        {dgoal3[i]}
                        </div>
                      </div>
                  
                      
        
                     
                      
                    
                      
                    </p>
                  </div>
                );
              }
              return rows;
            })()}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default CoachHomepage;
