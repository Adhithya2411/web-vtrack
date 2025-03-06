import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/registration.css';

const Registration = () => {
  return (
    <div>
      <div className="header-strip">
        <img src="/images/logo.jpeg" alt="VTrack Logo" />
        VTrack
      </div>

      <div className="registration-options-container">
        <h1>Registration Portal</h1>
        <p>Choose your role to register</p>
        
        <div className="registration-options">
          <div className="registration-card">
            <img src="/images/administrator_logo.png" alt="Admin" />
            <h3>Administrator</h3>
            <p>Register as an administrator</p>
            <Link to="/registration/admin" className="registration-btn">Register</Link>
          </div>
          
          <div className="registration-card">
            <img src="/images/faculty_logo.png" alt="Faculty" />
            <h3>Faculty</h3>
            <p>Register as faculty member</p>
            <Link to="/registration/faculty" className="registration-btn">Register</Link>
          </div>
          
          <div className="registration-card">
            <img src="/images/student_logo.jpg" alt="Student" />
            <h3>Student</h3>
            <p>Register as a student</p>
            <Link to="/registration/student" className="registration-btn">Register</Link>
          </div>
        </div>
        
        <div className="registration-help">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
      
      <Link to="/" className="back-button">← Back to Home</Link>
      
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} VTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Registration;