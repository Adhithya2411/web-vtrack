import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/admin-dashboard.css';

const AdminDashboard = () => {
  return (
    <div>
      <div className="header-strip">
        <img src="/images/logo.jpeg" alt="VTrack Logo" />
        VTrack
      </div>

      <div className="log_out-container">
        <Link to="/login/admin" className="logout-button">
          <img src="/images/logout.jpeg" alt="Logout" />
        </Link>
      </div>

      <div className="homepage-container">
        <div className="head">
          <h1>Welcome Back Admin!!!</h1>
        </div>
        <div className="options_list">
          <div className="option" style={{ backgroundColor: '#F25022' }}>
            <Link to="#">Student Details</Link>
          </div>
          <div className="option" style={{ backgroundColor: '#7FBA00' }}>
            <Link to="#">Faculty Details</Link>
          </div>
          <div className="option" style={{ backgroundColor: '#00A4EF' }}>
            <Link to="/registration/student">New Student Registration</Link>
          </div>
          <div className="option" style={{ backgroundColor: '#FFB900' }}>
            <Link to="/registration/faculty">New Faculty Registration</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;