import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');
  
  // Function to handle tab change
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    
    // Scroll to top for Home tab
    if (tabName === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  // Function to handle section scrolling
  const scrollToSection = (sectionId, position) => {
    // Only handle scrolling if we're on the homepage
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to position-based scrolling if element not found
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };
  
  // Set active tab based on current path
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/home') {
      setActiveTab('Home');
    } else if (location.pathname.includes('/about')) {
      setActiveTab('About');
    }
  }, [location]);

  return (
    <div className="navbar-container">
      <div className="header-strip">
        <div className="logo-space">
          <Link to="/">
            <img src="/images/logo-final.png" alt="VTrack Logo" />
          </Link>
        </div>
        <div className="vtrack-name">
          VTrack
        </div>
        <div id="toggleSwitch" className="switch">
          <div className="ball" id="ball"></div>
        </div>
      </div>

      <marquee behavior="scroll" direction="left" className="marquee" loop="">
        <p>Announcement: Registration for Yantra hackathon event is open!!!</p>
      </marquee>

      <div className="homepage-strip">
        <div className="menu">
          <a href="#">Menu</a>
          <div className="side-nav side-nav-over">
            <div className="side-nav">
              <a href="#" id="Courses-offered" onClick={(e) => {
                e.preventDefault();
                scrollToSection('Courses-offered', 400);
              }}>Courses Offered</a>
              
              <a href="#" id="Research" onClick={(e) => {
                e.preventDefault();
                scrollToSection('Research', 800);
              }}>Research</a>
              
              <a href="#" id="Facilities" onClick={(e) => {
                e.preventDefault();
                scrollToSection('Facilities', 1200);
              }}>Facilities</a>
              
              <a href="#" id="Campus-tour" onClick={(e) => {
                e.preventDefault();
                scrollToSection('Campus-tour', 1600);
              }}>Campus Tour</a>
              
              <a href="#" id="Acheivements" onClick={(e) => {
                e.preventDefault();
                scrollToSection('Acheivements', 2800);
              }}>Achievements</a>
            </div>
          </div>
        </div>
        
        <div className="menu-options" id="menu-options">
          <Link 
            to="/" 
            className={`tablinks ${activeTab === 'Home' ? 'active' : ''}`}
            onClick={() => handleTabClick('Home')}
            id={activeTab === 'Home' ? 'defaultOpen' : ''}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={`tablinks ${activeTab === 'About' ? 'active' : ''}`}
            onClick={() => handleTabClick('About')}
          >
            About
          </Link>
          
          <div className="login-dropdown">
            <span>Login</span>
            <div className="dropdown-content">
              <Link to="/login/student">Student</Link>
              <Link to="/login/faculty">Faculty</Link>
              <Link to="/login/administrator">Administrator</Link>
            </div>
          </div>
        </div>
        
        <div className="contact-us">
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;