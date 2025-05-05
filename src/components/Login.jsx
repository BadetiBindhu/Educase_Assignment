import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return alert("No user found. Please register first.");

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      navigate("/account");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Signin to your PopX account</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="ep-container">
        {/* Email Address */}
        <div className="input-group">
          <label htmlFor="email" className="floating-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="floating-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="password" className="floating-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="floating-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          className="btn primary"
          onClick={handleLogin}
          style={{
            backgroundColor: email && password ? "#6C25FF" : "#CBCBCB",
            cursor: email && password ? "pointer" : "not-allowed",
          }}
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
