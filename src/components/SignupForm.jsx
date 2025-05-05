import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/SignupForm.css";

function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("user", JSON.stringify(data));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h1 className="form-title">Create your PopX account</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Full Name  */}
        <div class="input-group">
          <label for="fullName" class="floating-label">
            Full Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            class="floating-input"
            placeholder=" Enter Full Name"
            {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
        </div>
       
        {/* Phone Number */}
        <div class="input-group">
          <label for="phn" class="floating-label">
            Phone Number<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            id="phn"
            class="floating-input"
            placeholder=" 9587685497"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        {/* Email Address*/}
        <div class="input-group">
          <label for="email" class="floating-label">
            Email Address<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            class="floating-input"
            placeholder="example@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

         {/* Password*/}
        <div class="input-group">
          <label for="password" class="floating-label">
            Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="password"
            class="floating-input"
            placeholder="********"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength:{
                value: 12,
                message: "Password must be atmost 12 characters",
              }
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Company Name*/}
        <div class="input-group">
          <label for="company" class="floating-label">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            class="floating-input"
            placeholder="Company Inc."
      />
        </div>

         {/* Agency */}
        <div className="form-group radio-group">
          <label className="radio-label">
            Are you an Agency?<span style={{ color: "red" }}>*</span>
          </label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                value="yes"
                {...register("agency", { required: true })}
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                value="no"
                {...register("agency", { required: true })}
              />
              <span>No</span>
            </label>
          </div>
          {errors.agency && <p className="error">This field is required</p>}
        </div>


        <button className="submit-button" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
