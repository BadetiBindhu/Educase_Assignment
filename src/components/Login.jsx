import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

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
    <div className="container-2">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <label>Email Address</label>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;