import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Landingpage.css";
import ModifyGoals from "./ModifyGoals";

function ClientHomepage(props) {
  const [dgoal1, updateDGoal1] = useState("");
  const [dgoal2, updateDGoal2] = useState("");
  const [dgoal3, updateDGoal3] = useState("");
  const [wgoal1, updateWGoal1] = useState("");
  const [mgoal1, updateMGoal1] = useState("");
  const [clientId, updateClientId] = useState("");
  const [dg1, upDateDg1] = useState(false);
  const [dg2, upDateDg2] = useState(false);
  const [dg3, upDateDg3] = useState(false);
  const [wg1, upDateWg1] = useState(false);
  const [mg1, upDateMg1] = useState(false);
  const [showModify, updateShowModify] = useState(false);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        `https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      console.log(data);
      updateDGoal1(data.data.fields.DailyGoal1);
      updateDGoal2(data.data.fields.DailyGoal2);
      updateDGoal3(data.data.fields.DailyGoal3);
      updateWGoal1(data.data.fields.WeeklyGoal1);
      updateMGoal1(data.data.fields.MonthlyGoal1);
      updateClientId(data.data.id);
      upDateDg1(data.data.fields.DG1);
      upDateDg3(data.data.fields.DG2);
      upDateDg3(data.data.fields.DG3);
      upDateWg1(data.data.fields.WG1);
      upDateMg1(data.data.fields.MG1);
      //buttons
    };
    apiCall();
  }, []);

  const handleClick = async (e, updateField) => {
    const data = await axios.patch(
      "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients",
      {
        records: [
          {
            id: `${params.id}`,
            fields: {
              DG1: dg1,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleClick2 = async (e, updateField) => {
    const data = await axios.patch(
      "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients",
      {
        records: [
          {
            id: `${params.id}`,
            fields: {
              DG2: dg2,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleClick3 = async (e, updateField) => {
    const data = await axios.patch(
      "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients",
      {
        records: [
          {
            id: `${params.id}`,
            fields: {
              DG3: dg3,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleClick4 = async (e, updateField) => {
    const data = await axios.patch(
      "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients",
      {
        records: [
          {
            id: `${params.id}`,
            fields: {
              WG1: wg1,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleClick5 = async (e, updateField) => {
    const data = await axios.patch(
      "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Clients",
      {
        records: [
          {
            id: `${params.id}`,
            fields: {
              MG1: mg1,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="App">
      <div className="goals-box">
        <h1>Client Home page</h1>
        <h2>Monthly Goal:{mgoal1} </h2>
        <button onClick={(e) => handleClick5(upDateMg1(!mg1))}>
          Completed
        </button>
        <h2>Weekly Goal:{wgoal1}</h2>
        <button onClick={(e) => handleClick4(upDateWg1(!wg1))}>
          Completed
        </button>
        <h3>Daily Goals:</h3>
        <h1>{dgoal1}</h1>
        <button onClick={(e) => handleClick(upDateDg1(!dg1))}>
          Test Completed
        </button>
        <h1>{dgoal2}</h1>
        <button onClick={(e) => handleClick2(upDateDg2(!dg2))}>
          Completed
        </button>
        <h1>{dgoal3}</h1>
        <button onClick={(e) => handleClick3(upDateDg3(!dg3))}>
          Completed
        </button>
        <div className="time-frame">
          <button type="button" onClick={() => updateShowModify(!showModify)}>
            Modify Goals
          </button>
          {showModify && <ModifyGoals />}
        </div>
      </div>
    </div>
  );
}

export default ClientHomepage;
