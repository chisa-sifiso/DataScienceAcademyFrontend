import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles.css";

const Solutions = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="page-content">
        <h1>SOLUTIONS</h1>
       <p>Content coming soon</p>
      </div>
    </div>
  );
};

export default Solutions;