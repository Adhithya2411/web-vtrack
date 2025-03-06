import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/registration.css';

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    regno: '',
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
    
    // Registration number validation (Format: 2 digits, 3 letters, 4 digits)
    const regNoRegex = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/i;
    if (!regNoRegex.test(formData.regno)) {
      tempErrors.regno = "Invalid Registration Number. Format should be like: 21ABC1234";
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
        regno: '',
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
              <h1>Student Registration</h1>
              <img src="/images/student_logo.jpg" alt="Student Logo" />
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="regno">Registration No</label>
                <input
                  type="text"
                  id="regno"
                  name="regno"
                  value={formData.regno}
                  onChange={handleChange}
                  placeholder="Enter the registration number"
                  required
                />
                {errors.regno && <div className="error">{errors.regno}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter the name of student"
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
                  placeholder="Enter the email of student"
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

export default StudentRegistration;