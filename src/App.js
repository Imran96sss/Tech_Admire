import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './views/login'; 
import SignUpPage from './views/signup'; 
import Application from "./views/application";
import welcomeImage from '../src/assets/tech.png';



function Home() {
  return (
    <div className="landing-page">
   
    <img src={welcomeImage} alt="Welcome" className="welcome-image" />

      <h1>Welcome to Tech Admire Task -- Imran</h1>
      <div className="landing-buttons">
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-success">Login</button>
        </Link>

        {/* <Link to="/page3">
          <button className="btn btn-warning">Create Applications</button>
        </Link> */}

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;
