import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminId: '',
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
    
    if (!formData.adminId.trim()) {
      tempErrors.adminId = "Administrator ID is required";
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
        adminId: '',
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
          <h1>Administrator Login</h1>
          <img src="/images/administrator_logo.png" alt="Administrator Logo" />
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="adminId">Administrator ID</label>
            <input
              type="text"
              id="adminId"
              name="adminId"
              value={formData.adminId}
              onChange={handleChange}
              placeholder="Enter your administrator ID"
              required
            />
            {errors.adminId && <div className="error">{errors.adminId}</div>}
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

export default AdminLogin;