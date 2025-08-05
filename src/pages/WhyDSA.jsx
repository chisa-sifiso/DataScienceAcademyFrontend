// src/pages/WhyDSA.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/navpagesstyles.css"; // Adjust the path as necessary

const WhyDSA = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="page-content">
        <h1>WHY DSA</h1>
        <p>Content coming soon</p>
      </div>
    </div>
  );
};

export default WhyDSA;
