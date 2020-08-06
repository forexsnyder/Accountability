import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


function CoachHomepage(props) {


  const [client, updateClient] = useState([]);
  const [dgoal1, updateDGoal1] = useState([]);
  const [dgoal2, updateDGoal2] = useState([]);
  const [dgoal3, updateDGoal3] = useState([]);
  const [wgoal1, updateWGoal1] = useState([]);
  const [mgoal1, updateMGoal1] = useState([]);
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
          console.log(dgoal1)
    };
    apiCall2();

  }, []);
  //for loop
  if (wgoal1 !== []) {
    return (
      <div className="App">
        <div className="goals-box">
          <h1>Coach Home page</h1>
          
            <div>
              {function () {
                let rows = []
                for (let i = 0; i <client.length; i++) {
                  rows.push(<div>{client[i]} <h1>Monthly Goal:{mgoal1[i]}</h1>
                    <h2>Daily Goals:
                      {dgoal1[i]}
                      {dgoal2[i]}
                      {dgoal3[i]}
                    </h2></div>)
                }
                return rows
              }()}
            </div>

          
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>
}


}

export default CoachHomepage;
