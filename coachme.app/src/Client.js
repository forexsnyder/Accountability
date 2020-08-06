
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Landingpage.css"

function ClientHomepage(props) {
  const [dgoal1, updateDGoal1] = useState("");
  const [dgoal2, updateDGoal2] = useState("");
  const [dgoal3, updateDGoal3] = useState("");
  const [wgoal1, updateWGoal1] = useState("");
  const [mgoal1, updateMGoal1] = useState("");
  const [clientId, updateClientId] = useState("");
  const params = useParams()
  const[show,updateShow]=useState(false)
  
  console.log(params)

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
      console.log(data)
      updateDGoal1(data.data.fields.DailyGoal1);
      updateDGoal2(data.data.fields.DailyGoal2);
      updateDGoal3(data.data.fields.DailyGoal3);
      updateWGoal1(data.data.fields.WeeklyGoal1);
      updateMGoal1(data.data.fields.MonthlyGoal1);
      updateClientId(data.data.id);
    };
    apiCall();
  }, []);

  props.updateClientId(!props.clientId);
  
  return (
    <div className="App">
      <div className="goals-box">
        <h1>Client Home page</h1>
        <h2>Monthly Goal:{mgoal1} </h2><button>Completed</button>
        <h2>Weekly Goal:{wgoal1}</h2><button>Completed</button>
        <h3>Daily Goals:</h3>
        <h1>{dgoal1}</h1><button>Completed</button>
        <h1>{dgoal2}</h1><button>Completed</button>
        <h1>{dgoal3}</h1><button>Completed</button>
        <div className="time-frame">
        <Link to="/modifygoals">Modify Goals</Link>
        </div>
    </div>
    </div>
  );
}

export default ClientHomepage;