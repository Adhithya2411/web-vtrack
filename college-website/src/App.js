import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import AdminLogin from './components/login/AdminLogin';
import FacultyLogin from './components/login/FacultyLogin';
import StudentLogin from './components/login/Student_Login';
import Registration from './components/registration/Registration';
import FacultyRegistration from './components/registration/FacultyRegistration';
import AdminRegistration from './components/registration/AdminRegistration';
import StudentRegistration from './components/registration/StudentRegistration';
import AdminDashboard from './components/registration/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/faculty" element={<FacultyLogin />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration/faculty" element={<FacultyRegistration />} />
          <Route path="/registration/admin" element={<AdminRegistration />} />
          <Route path="/registration/student" element={<StudentRegistration />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;