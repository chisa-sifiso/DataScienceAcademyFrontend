// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';
import WhyDSA from './pages/WhyDSA';
import Products from './pages/Products';  // Adjust the import path as necessary
import Solutions from './pages/Solutions'; // Adjust the import path as necessary         
import Hackathon from './pages/Hackathon'; // Adjust the import path as necessary
// Optional: import other pages as needed     
//import NotFound from './pages/NotFound'; // optional

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/why-dsa" element={<WhyDSA />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/hackathon" element={<Hackathon />} />
      </Routes>
    </Router>
  );
}

export default App;
