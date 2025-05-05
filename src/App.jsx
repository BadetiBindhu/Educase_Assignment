// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import AccountSetting from "./components/AccountSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupform" element={<SignupForm/>} />
        <Route path="/accountsetting" element={<AccountSetting />} />
      </Routes>
    </Router>
  );
}

export default App;