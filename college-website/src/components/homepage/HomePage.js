import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/homepage.css';

const HomePage = () => {
  useEffect(() => {
    // Default open Home tab
    document.getElementById("defaultOpen").click();

    // Event listeners for headline hover
    const headline = document.getElementById("headline");
    headline.addEventListener('mouseover', () => {
      headline.style.fontSize = "50px";
    });
    headline.addEventListener('mouseout', () => {
      headline.style.fontSize = "40px";
    });

    // Event listeners for images hover
    const images = document.querySelectorAll("#image");
    images.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.style.width = "400px";
        image.style.height = "300px";
      });
      image.addEventListener('mouseout', () => {
        image.style.width = "350px";
        image.style.height = "250px";
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      headline.removeEventListener('mouseover', () => {});
      headline.removeEventListener('mouseout', () => {});
      images.forEach(image => {
        image.removeEventListener('mouseover', () => {});
        image.removeEventListener('mouseout', () => {});
      });
    };
  }, []);

  // Function to change content
  const changeContent = (evt, targetId) => {
    // Hide all tab content
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove active class from all tabs
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tablinks[i].style.backgroundColor = "white";
      tablinks[i].style.color = "#0062f4";
    }

    // Show the current tab
    document.getElementById(targetId).style.display = "inline-block";
    evt.currentTarget.className += " active";
    evt.currentTarget.style.backgroundColor = "#3f88e9";
    evt.currentTarget.style.color = "white";

    // Scroll to top for Home
    if (targetId === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll to sections
  const scrollToSection = (e, position) => {
    e.preventDefault();
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  };

  return (
    <div className="parent">
      <div className="head">
        <div className="header-strip">
          <div className="logo-space">
            <img src="/images/logo-final.png" alt="VTrack Logo" />
          </div>
          <div className="vtrack-name">
            VTrack
          </div>
          <div id="toggleSwitch" className="switch">
            <div className="ball" id="ball"></div>
          </div>
        </div>

        <div className="marquee">
          <p>Announcement: Registration for Yantra hackathon event is open!!!</p>
        </div>

        <div className="homepage-strip">
          <div className="menu">
            <a href="#">Menu</a>
            <div className="side-nav side-nav-over">
              <div className="side-nav">
                <button onClick={(e) => scrollToSection(e, 400)}>Courses Offered</button>
                <button onClick={(e) => scrollToSection(e, 800)}>Research</button>
                <button onClick={(e) => scrollToSection(e, 1200)}>Facilities</button>
                <button onClick={(e) => scrollToSection(e, 1600)}>Campus Tour</button>
                <button onClick={(e) => scrollToSection(e, 2800)}>Achievements</button>
              </div>
            </div>
          </div>
          <div className="menu-options" id="menu-options">
            <a href="#" className="tablinks" onClick={(e) => changeContent(e, 'Home')} id="defaultOpen">Home</a>
            <a href="#" className="tablinks" onClick={(e) => changeContent(e, 'About')}>About</a>
            <div className="login-dropdown">
              <span>Login</span>
              <div className="dropdown-content">
                <Link to="/login/student">Student</Link>
                <Link to="/login/faculty">Faculty</Link>
                <Link to="/login/admin">Administrator</Link>
              </div>
            </div>
          </div>
          <div className="contact-us">
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="content">
        <div id="Home" className="tabcontent">
          <div className="home-section"></div>

          <div className="home-text">
            <h1 id="headline">Welcome to VTrack</h1>
            <h3>VIT Tracker for Results, Attendance, and Course Knowledge</h3>
            <img src="/images/college.png" className="College_image" alt="College_image" />
            
            <div className="course-offered" id="Courses-offered">
              <div className="course-offered-text">
                <h3>Courses Offered</h3>
                <p>
                  VTrack provides comprehensive details on all the courses available at VIT. Students
                  can access course descriptions, prerequisites, schedules, and more. This feature
                  ensures that students are well-informed about their academic options and can plan
                  their studies effectively. Additionally, VTrack offers insights into course outcomes
                  and career prospects, helping students make informed decisions about their academic
                  paths. With detailed information on each course, students can understand the skills
                  and knowledge they will gain, the workload involved, and the potential career paths
                  that each course can lead to. VTrack also includes student reviews and ratings for
                  courses, providing valuable feedback from peers.
                </p>
              </div>
              <div className="course-offered-image">
                <img id="image" src="/images/courses.png" alt="Courses Offered" />
              </div>
            </div>
            
            <div className="course-offered" id="Research">
              <div className="course-offered-text">
                <h3>Research</h3>
                <p>
                  Stay updated with the latest research projects and opportunities at VIT. VTrack
                  connects students with faculty members and research groups, fostering collaboration
                  and innovation. Discover cutting-edge research and contribute to groundbreaking
                  projects. VTrack also provides resources for research funding, publication
                  opportunities, and access to research databases, ensuring that students have the
                  support they need to excel in their research endeavors. By offering a platform for
                  students to explore various research areas, VTrack encourages interdisciplinary
                  collaboration and knowledge sharing. Students can find information on ongoing
                  research projects, upcoming conferences, and workshops, as well as opportunities for
                  internships and assistantships.
                </p>
              </div>
              <div className="course-offered-image">
                <img id="image" src="/images/research.png" alt="Research" />
              </div>
            </div>
            
            <div className="course-offered" id="Facilities">
              <div className="course-offered-text">
                <h3>Facilities</h3>
                <p>
                  Explore the state-of-the-art facilities available at VIT, including libraries,
                  laboratories, and sports complexes. VTrack provides detailed information on these
                  facilities, helping students make the most of the resources available to them.
                  Whether you need access to specialized equipment, study spaces, or recreational
                  areas, VTrack ensures that you are well-informed about the facilities that can
                  enhance your academic and personal growth. With comprehensive descriptions and
                  images of each facility, students can get a clear understanding of what is available
                  and how to access it. VTrack also includes information on facility hours, booking
                  procedures, and any associated costs. Additionally, students can find details on
                  events and activities taking place at these facilities, such as workshops, sports
                  tournaments, and study groups.
                </p>
              </div>
              <div className="course-offered-image">
                <img id="image" src="/images/facilities.png" alt="Facilities" />
              </div>
            </div>
            
            <div className="campus" id="Campus-tour">
              <div className="campus-text">
                <h3>Campus Tour</h3>
                <p>
                  Take a virtual tour of the VIT campus and discover the vibrant student life,
                  beautiful landscapes, and modern infrastructure. VTrack offers an immersive
                  experience, allowing prospective students to explore the campus from anywhere in the
                  world. The virtual tour includes interactive maps, 360-degree views, and detailed
                  descriptions of key locations, providing a comprehensive overview of what VIT has to
                  offer. From the state-of-the-art laboratories and libraries to the bustling student
                  centers and serene green spaces, the virtual tour captures the essence of campus
                  life at VIT.
                </p>
              </div>
              <div className="campus-image">
                <img src="/images/campus-tour.png" alt="Campus Tour" />
              </div>
            </div>
            
            <div className="course-offered" id="Acheivements">
              <div className="course-offered-text">
                <h3>Achievements</h3>
                <p>
                  Celebrate the achievements of VIT students and faculty. VTrack highlights awards,
                  recognitions, and milestones, showcasing the excellence and accomplishments within
                  the VIT community. Stay inspired by the success stories of your peers and mentors.
                  VTrack also features interviews and articles about notable achievements, providing
                  insights into the hard work and dedication that drive success at VIT. From academic
                  awards to research breakthroughs, VTrack covers a wide range of achievements that
                  reflect the diverse talents and efforts of the VIT community. Students can learn
                  about the various competitions and events where VIT has excelled, as well as the
                  individual accomplishments of their classmates and faculty members. By highlighting
                  these achievements, VTrack aims to foster a culture of excellence and motivation,
                  encouraging all members of the VIT community to strive for their best.
                </p>
              </div>
              <div className="course-offered-image">
                <img id="image" src="/images/achievement.png" alt="Achievements" />
              </div>
            </div>
          </div>
        </div>
        
        <div id="About" className="tabcontent">
          <div className="about-section">
            <div className="about-text">
              <h2>Know Us</h2>
              <p>
                VTrack is a comprehensive academic management platform designed for VIT students to simplify
                and streamline their educational experience. It centralizes essential features like
                attendance tracking, course details, exam schedules, grades, book lending, and faculty reviews into one
                intuitive interface. VTrack empowers students to manage their academic activities efficiently
                while providing tools to plan, track, and enhance their educational journey.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/about.jpeg" alt="About VTrack" />
            </div>
          </div>

          <div className="slogan">
            <h2>"VTrack: Where Efficiency Meets Education."</h2>
          </div>
        </div>
      </div>

      <div className="foot">
        <footer>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} VTrack. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;