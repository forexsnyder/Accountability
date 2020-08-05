import React, { useState }from 'react';
import './SignUpForm.css';
import axios from "axios";
import { Link } from "react-router-dom";

function SignUpForm(props) {
  const [name, updateName] = useState("")
  const [dGoal1, updateDGoal1] = useState("")
  const [dGoal2, updateDGoal2] = useState("")
  const [dGoal3, updateDGoal3] = useState("")
  const [wGoal1, updateWGoal1] = useState("")
  const [mGoal1, updateMGoal1] = useState("")
  const [coach, updateCoach] = useState("")

  const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post(
          "https://api.airtable.com/v0/appiY6zW8rQRwC3qa/Table%201",
          {
            fields: {
Name: name,
DailyGoal1: dGoal1,
DailyGoal2: dGoal2,
DailyGoal3: dGoal3,
WeeklyGoal1: wGoal1,
MonthlyGoal1: mGoal1,
Coach: coach,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
    props.updateFetchClients(!props.fetchClients); ///needed to pass these using props. beause needed on both component pages.
    updateDGoal1("");
    updateDGoal2("");
    updateDGoal3("");
    updateWGoal1("");
    updateMGoal1("");
    updateName("");
    updateCoach("");
  };
    //Create Form
  return (<div>
      <form onSubmit={handleSubmit}>
      <h2>Please Sign Up</h2>
      <label htmlFor="Name">Name</label>
      <input
        type="Text"
        id="Name"
        onChange={(e) => updateName(e.target.value)}
        value={name}
      />
      <label htmlFor="DailyGoal1">1st Daily Goal</label>
      <input
        type="Text"
        id="DailyGoal1"
        onChange={(e) => updateDGoal1(e.target.value)}
        value={dGoal1}
      />
      <label htmlFor="DailyGoal2">2nd Daily Goal</label>
      <input
        type="Text"
        id="DailyGoal2"
        onChange={(e) => updateDGoal2(e.target.value)}
        value={dGoal2}
      />
      <label htmlFor="DailyGoal3">3rd Daily Goal</label>
      <input
        type="Text"
        id="DailyGoal3"
        onChange={(e) => updateDGoal3(e.target.value)}
        value={dGoal3}
      />
      <label htmlFor="WeeklyGoal1">Weekly Goal</label>
      <input
        type="Text"
        id="WeeklyGoal1"
        onChange={(e) => updateWGoal1(e.target.value)}
        value={wGoal1}
      />
      <label htmlFor="MonthlyGoal1">Monthly Goal</label>
      <input
        type="Text"
        id="MonthlyGoal1"
        onChange={(e) => updateMGoal1(e.target.value)}
        value={mGoal1}
      />
      <label htmlFor="Coach">Coach</label>
      <input
        type="Text"
        id="Coach"
        onChange={(e) => updateCoach(e.target.value)}
        value={coach}
      />
      <input type="submit" value="Finish sign up" />
    </form>
    <div>
<Link to="/which">Login</Link>
    </div>
    </div>
  );
}

export default SignUpForm;

// import React, { useState } from "react";
// import axios from "axios";
// function AddRecipe(props) {
//   const [title, updateTitle] = useState("");
//   const [ingredients, updateIngredients] = useState("");
//   const [steps, updateSteps] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await axios.post(
//       "https://api.airtable.com/v0/appTG5WL7NTOgqq7S/Table%201",
//       {
//         fields: {
//           title: title,
//           ingredients: ingredients,
//           steps: steps,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     props.updateFetchRecipes(!props.fetchRecipes); ///needed to pass these using props. beause needed on both component pages.
//     updateTitle("");
//     updateIngredients("");
//     updateSteps("");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>New Recipe</h2>
//       <label htmlFor="title">Title</label>
//       <input
//         type="Text"
//         id="title"
//         onChange={(e) => updateTitle(e.target.value)}
//         value={title}
//       />
//       <label htmlFor="ingredients">ingredients</label>
//       <input
//         type="Text"
//         id="ingredients"
//         onChange={(e) => updateIngredients(e.target.value)}
//         value={ingredients}
//       />{" "}
//       <br />
//       <br />
//       <label htmlFor="steps">steps</label>
//       <textarea
//         name="Text"
//         id="steps"
//         cols="45"
//         rows="10"
//         onChange={(e) => updateSteps(e.target.value)}
//         value={steps}
//       ></textarea>
//       <input type="submit" value="Add New Recipe" />
//     </form>
//   );
// }
// export default AddRecipe;