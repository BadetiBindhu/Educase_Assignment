import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name*</label>
        <input
          placeholder="Full Name"
          {...register("fullName", { required: "Full Name is required" })}
        />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}

        <label>Phone number*</label>
        <input
          placeholder="Phone number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone must be a 10-digit number",
            },
          })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        <label>Email address*</label>
        <input
          placeholder="Enter email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Password*</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <label>Company name*</label>
        <input
          placeholder="Company name"
          {...register("company", { required: "Company name is required" })}
        />
        {errors.company && <p className="error">{errors.company.message}</p>}

        <label>Are you an Agency?*</label>
        <div className="agency">
          <label>
            <input
              type="radio"
              value="yes"
              {...register("isAgency", { required: "Please select an option" })}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              {...register("isAgency", { required: "Please select an option" })}
            />
            No
          </label>
        </div>
        {errors.isAgency && <p className="error">{errors.isAgency.message}</p>}

        <button className="btn primary" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
