import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import defaultImage from "../../public/user.png"; // Make sure to import your default image

function AccountSetting() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(defaultImage);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      alert("Please login first.");
      navigate("/login");
    }
  }, [navigate]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  if (!user) return null;

  return (
    <div className="container-2">
      <h2>Account Settings</h2>
      <div className="profile-card">
        <div className="profile-image-wrapper">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img"
          />
          <div className="camera-icon" onClick={handleImageClick}>
            📷
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <strong>{user.fullName}</strong>
          <p>{user.email}</p>
        </div>
      </div>
      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default AccountSetting;
