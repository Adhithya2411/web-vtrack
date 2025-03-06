import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    regno: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // Registration number validation (Format: 2 digits, 3 letters, 4 digits)
    const regNoRegex = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/i;
    if (!regNoRegex.test(formData.regno)) {
      tempErrors.regno = "Invalid Registration Number";
      isValid = false;
    }
    
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically handle authentication
      console.log("Form submitted", formData);
      
      // For demo purposes, let's simulate a successful login
      alert("Login successful!");
      
      // Reset the form
      setFormData({
        regno: '',
        password: ''
      });
    }
  };
  
  return (
    <div>
      <div className="header-strip">
        <img src="/images/logo.jpeg" alt="VTrack Logo" />
        VTrack
      </div>

      <div className="login-container">
        <div className="head">
          <h1>Student Login</h1>
          <img src="/images/student_logo.jpg" alt="Student Logo" />
        </div>
        
        <form onSubmit={handleSubmit} id="studentForm" name="studentForm">
          <div className="form-group">
            <label htmlFor="regno">Registration No:</label>
            <input
              type="text"
              id="regno"
              name="regno"
              value={formData.regno}
              onChange={handleChange}
              placeholder="Enter your registration number"
              required
            />
            {errors.regno && <div className="error" id="regno_error">{errors.regno}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          
          <button type="submit" className="submit-button">Login</button>
        </form>
        
        <div className="links">
          <a href="#">Forgot Password?</a>
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

export default StudentLogin;