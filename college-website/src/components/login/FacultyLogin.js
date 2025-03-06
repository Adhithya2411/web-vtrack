import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';

const FacultyLogin = () => {
  const [formData, setFormData] = useState({
    facId: '',
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
    
    if (!formData.facId.trim()) {
      tempErrors.facId = "Faculty ID is required";
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
        facId: '',
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
          <h1>Faculty Login</h1>
          <img src="/images/faculty_logo.png" alt="Faculty Logo" />
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="facId">Faculty ID</label>
            <input
              type="text"
              id="facId"
              name="facId"
              value={formData.facId}
              onChange={handleChange}
              placeholder="Enter your faculty ID"
              required
            />
            {errors.facId && <div className="error">{errors.facId}</div>}
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

export default FacultyLogin;