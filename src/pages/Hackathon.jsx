import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Hackathon = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="page-content">
        <h1>HACKATHON</h1>
        <p>Content coming soon</p>
      </div>
    </div>
  );
};

export default Hackathon;