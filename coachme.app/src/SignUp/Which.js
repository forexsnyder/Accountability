import React from 'react';
import { Link, Route } from "react-router-dom";
import './Login.css';

function Which() {
  return (
    <div className="App">
        <h1>Are you a Coach or a Client?</h1>
        <div>
        <Link to="/clientlandingpage">Client</Link>
        <Link to="/coachlandingpage">Coach</Link>
        </div>
    </div>
  );
}

export default Which;