import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <label>Full Name*</label>
      <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
      <label>Phone number*</label>
      <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />
      <label>Email address*</label>
      <input name="email" placeholder="Enter email address" value={form.email} onChange={handleChange} />
      <label>Password*</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <label>Company name</label>
      <input name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
      <label>Are you an Agency?*</label>
      <div className="agency">
        <label className="agency">
          <input
            type="radio"
            name="isAgency"
            value="yes"
            checked={form.isAgency === "yes"}
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label className="agency">
          <input
            type="radio"
            name="isAgency"
            value="no"
            checked={form.isAgency === "no"}
            onChange={handleChange}
          />{" "}
          No
        </label>
      </div>
      <button className="btn primary" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default Register;
