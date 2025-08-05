import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const THRESHOLD = 50; // pixels past the top of #leaders before showing nav

    const handleScroll = () => {
      if (window.innerWidth >= 769) {
        const leaders = document.getElementById("leaders");
        if (leaders) {
          const top = leaders.getBoundingClientRect().top;
          // only show after we've scrolled 50px into the leaders section
          setNavVisible(top <= -THRESHOLD);
        }
      } else {
        setNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`nav-bar${navVisible ? " visible" : ""}`}>
  <div className="logo">
    <NavLink to="/">
      <img src="/assets/images/DSA logoword.png" alt="DSA Logo" />
    </NavLink>
  </div>

  {/* Hamburger icon (mobile only) */}
  <div className="hamburger" onClick={() => setMenuOpen(true)}>
    ☰
  </div>

  {/* Desktop nav links */}
  <ul className="nav-links">
    <li>
      <NavLink
        to="/why-dsa"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        WHY DSA ▾
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        PRODUCTS ▾
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/solutions"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        SOLUTIONS ▾
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/hackathon"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        HACKATHON ▾
      </NavLink>
    </li>
  </ul>

  <a
    href="https://forms.gle/HmqRYtJvfb1SWQya7"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="apply-btn">APPLY</button>
  </a>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="mobile-menu">
      <span className="close-btn" onClick={() => setMenuOpen(false)}>
        ×
      </span>
      <ul className="nav-links-mobile">
        <li>
          <NavLink
            to="/why-dsa"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            WHY DSA ▾
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PRODUCTS ▾
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/solutions"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SOLUTIONS ▾
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hackathon"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HACKATHON ▾
          </NavLink>
        </li>
      </ul>
      <a
        href="https://forms.gle/HmqRYtJvfb1SWQya7"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-apply"
        onClick={() => setMenuOpen(false)}
      >
        Apply Now
      </a>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section className="hero">
        <img src="/assets/images/hero.png" alt="Hero" className="hero-bg" />
        <div className="hero-overlay">
          <img
            src="/assets/images/logo2.png"
            alt="DSA Logo"
            className="hero-logo"
          />
          <img
            src="/assets/images/phone.png"
            alt="Phone"
            className="hero-icon icon-phone"
            onClick={() =>
              document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <img
            src="/assets/images/secondicon2.png"
            alt="Info"
            className="hero-icon icon-info"
            onClick={() =>
              document.getElementById("leaders")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <img
            src="/assets/images/thirdicon.png"
            alt="Education"
            className="hero-icon icon-education"
            onClick={() =>
              document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <img
            src="/assets/images/icone4.png"
            alt="Custom"
            className="hero-icon icon-custom"
            onClick={() =>
              document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </section>

      {/* Leaders Section */}
      <section className="leaders-section" id="leaders">
        <div className="leaders-content">
          <div className="leaders-image">
            <img src="/assets/images/circles.png" alt="Circle of people" />
          </div>
          <div className="leaders-text">
            <h2><span className="purple">4IR LEADERS</span></h2>
            <p>
              The Data Science Academy (DSA) is a future-forward learning institution based in South Africa,
              dedicated to equipping the next generation of African innovators with practical skills in data
              science, artificial intelligence, and emerging technologies that define the Fourth Industrial
              Revolution (4IR).
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="solutions-text">
          <h2>
            <span className="purple">WE</span> PROVIDE <span className="purple">TECH SOLUTIONS</span> FOR YOU.
          </h2>
          <p>
            Build, run, and improve your data software through cloud computing solutions.
          </p>
          <button className="contact-btn">CONTACT US</button>
        </div>
        <img
          src="/assets/images/tech-solutions.png"
          alt="Swirl Highway"
          className="solutions-img"
        />
      </section>

      {/* Team Section */}
      <section className="team">
        <h2><span className="purple">TEAM</span> OVERVIEW</h2>
        <div className="team-members">
          {[
            ["team-george3.jpeg", "GEORGE", "THOSAGO"],
            ["team-david2.jpeg", "DAVID", "SITHOLE"],
            ["team-keith2.jpeg", "KEITH", "RAMUNEYIWA"],
            ["team-owen2.jpeg", "OWEN", "RAMPORA"],
            ["team-mika2.jpeg", "MIKA", "CHIPANA"]
          ].map(([img, name, surname]) => (
            <div key={name}>
              <img src={`/assets/images/${img}`} alt={name} />
              <p><span className="name">{name}</span><br /><span className="surname">{surname}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Learn Section */}
      <section className="learn" id="learn">
        <img
          src="/assets/images/learn-banner.png"
          alt="Learn"
          className="learn-img"
        />
        <div className="learn-content">
          <h2><span className="purple">LEARN</span> DATA SCIENCE</h2>
          <p>APPLY FOR A 12-MONTH PAID INTERNSHIP WITH THE DATA SCIENCE ACADEMY.</p>
          <a
            href="https://forms.gle/HmqRYtJvfb1SWQya7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="apply-btn">APPLY</button>
          </a>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partners" id="partners">
        <div className="partners-text">
          <h3>OUR PARTNERSHIPS</h3>
          <h2>STRATEGIC PARTNERSHIPS TO HELP YOU GROW.</h2>
          <p>
            With over 15 strategic partners, we aim to bring more solutions to your business through international interfaces.
          </p>
        </div>
        <div className="partners-card">
          <img
            src="/assets/images/logo2.png"
            alt="Watermark"
            className="partners-watermark"
          />
          <img
            src="/assets/images/partners.png"
            alt="Partners"
            className="partners-image"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="footer">
        <div className="footer-text">
          <h2>READY TO GET STARTED?</h2>
          <a href="mailto:georgethosago@thedatascienceacademy.co.za" className="contact-btn">
            
            CONTACT US
          </a>
          <img
            src="/assets/images/logo3.png"
            alt="DSA Logo"
            className="footer-logo"
          />
          <div className="social-icons">
            <a href="https://x.com/DataScAcademy" target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon-x.png" alt="X" /></a>
            <a href="https://www.instagram.com/the_datascienceacademy/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/instagram-logo.png" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/the-data-science-academy-sa/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><img src="/assets/images/icon-linkedin.png" alt="LinkedIn" /></a>
            <a href="https://www.facebook.com/profile.php?id=61578930038929" target="_blank" rel="noopener noreferrer"><img src="/assets/images/facebook.png" alt="Facebook" /></a>
          </div>
        </div>
        <div className="footer-hero">
          <img
            src="/assets/images/hero2.png"
            alt="Girl"
            className="footer-hero-img"
          />
        </div>
      </footer>
    </>
  );
};

export default Home;
