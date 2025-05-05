import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AccountSettings.css";
import defaultImage from "../../public/profileImg.png"; // Make sure to import your default image

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
    <div className="container">
      <div className="top-bar">
        <span className="top-bar-title">Account Settings</span>
      </div>
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-img" />
        {/* <img src="img/Group 1585.png" alt="Camera" className="camera-icon" onClick={handleImageClick}/> */}
        <div className="camera-icon" onClick={handleImageClick}>
          <img
            src="camera.png"
            alt="Camera Icon"
            style={{ cursor: "pointer" }}
          />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <div className="profile-info">
          <div className="profile-name">{user.fullName}</div>
          <div className="profile-email">{user.email}</div>
        </div>
      </div>

      <div className="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam.
      </div>
    </div>
  );
}

export default AccountSetting;
