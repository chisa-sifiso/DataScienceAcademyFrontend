import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';


const Home = () => {
return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/assets/images/hero.png" alt="Hero" className="hero-bg" />
        <div className="hero-overlay">
          <img src="/assets/images/logo2.png" alt="DSA Logo" className="hero-logo" />
          <img src="/assets/images/phone.png" alt="Phone" className="hero-icon icon-phone" />
          <img src="/assets/images/secondicon2.png" alt="Info" className="hero-icon icon-info" />
          <img src="/assets/images/thirdicon.png" alt="Education" className="hero-icon icon-education" />
          <img src="/assets/images/icone4.png" alt="Custom" className="hero-icon icon-custom" />
        </div>
      </section>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="logo">
          <img src="/assets/images/DSA logoword.png" alt="DSA Logo" />
        </div>
        <ul className="nav-links">
          <li>WHY DSA ▾</li>
          <li>PRODUCTS ▾</li>
          <li>SOLUTIONS ▾</li>
          <li>HACKATHON ▾</li>
        </ul>
        <Link to="/apply">
  <button className="apply-btn">APPLY</button>
</Link>
      </nav>

      {/* Leaders Section */}
      <section className="leaders-section">
        <div className="leaders-content">
          <div className="leaders-image">
            <img src="/assets/images/circles.png" alt="Circle of people" />
          </div>
          <div className="leaders-text">
            <h2><span className="purple">4IR LEADERS</span></h2>
            <p>The Data Science Academy (DSA) is a future-forward learning institution...</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="solutions-text">
          <h2><span className="purple">WE</span> PROVIDE <span className="purple">TECH SOLUTIONS</span> FOR YOU.</h2>
          <p>Build, run, and improve your data software through cloud computing solutions.</p>
          <button className="contact-btn">CONTACT US</button>
        </div>
        <img src="/assets/images/tech-solutions.png" alt="Swirl Highway" className="solutions-img" />
      </section>

      {/* Team Section */}
      <section className="team">
        <h2><span className="purple">TEAM</span> OVERVIEW</h2>
        <div className="team-members">
          {['george', 'david', 'keith', 'owen', 'mika'].map(name => (
            <div key={name}>
              <img src={`/assets/images/team-${name}.jpeg`} alt={name} />
              <p>{name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learn Section */}
      <section className="learn">
        <img src="/assets/images/learn-banner.png" alt="Learn" className="learn-img" />
        <div className="learn-content">
          <h2><span className="purple">LEARN</span> DATA SCIENCE</h2>
          <p>APPLY FOR A 12‑MONTH PAID INTERNSHIP WITH THE DATA SCIENCE ACADEMY.</p>
          <Link to="/apply">
  <button className="apply-btn">APPLY</button>
</Link>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partners">
        <div className="partners-text">
          <h3>OUR PARTNERSHIPS</h3>
          <h2>STRATEGIC PARTNERSHIPS TO HELP YOU GROW.</h2>
          <p>With over 15 strategic partners, we aim to bring more solutions...</p>
        </div>
        <div className="partners-card">
          <img src="/assets/images/logo2.png" alt="Watermark" className="partners-watermark" />
          <img src="/assets/images/partners.png" alt="Partners" className="partners-image" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
          <h2>READY TO GET STARTED?</h2>
          <a href="#contact" className="contact-btn">
            <img src="/assets/images/icon-email.png" alt="" className="contact-icon" />
            CONTACT US
          </a>
          <img src="/assets/images/logo3.png" alt="DSA Logo" className="footer-logo" />
          <div className="social-icons">
            <img src="/assets/images/icon-x.png" alt="X" />
            <img src="/assets/images/instagram-logo.png" alt="Instagram" />
            <img src="/assets/images/icon-linkedin.png" alt="LinkedIn" />
            <img src="/assets/images/facebook.png" alt="Facebook" />
          </div>
        </div>
        <div className="footer-hero">
          <img src="/assets/images/hero2.png" alt="Girl" className="footer-hero-img" />
        </div>
      </footer>
    </>
  );
};

export default Home;
