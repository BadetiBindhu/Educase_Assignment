import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingScreen.css";

function LandingScreen() {
  const navigate=useNavigate();
  return (
    <div className="container">
      <div className="welcome-text">Welcome to PopX</div>
      <div className="sub-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <button className="create-account-btn" onClick={()=>navigate('/signupform')}>Create Account</button>
      <button className="login-btn" onClick={()=>navigate('/login')}>Already Registered? Login</button>
    </div>
  );
}

export default LandingScreen;