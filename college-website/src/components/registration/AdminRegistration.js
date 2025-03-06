import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/registration.css';

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    adminId: '',
    name: '',
    email: '',
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
      tempErrors.adminId = "Admin ID is required";
      isValid = false;
    }
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email address";
      isValid = false;
    }
    
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically handle the registration process
      console.log("Form submitted", formData);
      
      // For demo purposes, let's simulate a successful registration
      alert("Registration successful!");
      
      // Reset the form
      setFormData({
        adminId: '',
        name: '',
        email: '',
        password: ''
      });
    }
  };
  
  return (
    <div className="parent">
      <div className="header">
        <div className="header-strip">
          <img src="/images/logo.jpeg" alt="VTrack Logo" />
          VTrack
        </div>
      </div>
      
      <div className="content">
        <div className="registration-container">
          <div className="form-box">
            <div className="head">
              <h1>Administrator Registration</h1>
              <img src="/images/administrator_logo.png" alt="Admin Logo" />
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="adminId">Admin ID</label>
                <input
                  type="text"
                  id="adminId"
                  name="adminId"
                  value={formData.adminId}
                  onChange={handleChange}
                  placeholder="Enter the admin ID"
                  required
                />
                {errors.adminId && <div className="error">{errors.adminId}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter the name of administrator"
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter the email of administrator"
                  required
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter the default password"
                  required
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              
              <button type="submit" className="submit-button">Register</button>
            </form>
          </div>
          
          <div className="back-button">
            <Link to="/registration">← Back to Registration Options</Link>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <footer>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} VTrack. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminRegistration;