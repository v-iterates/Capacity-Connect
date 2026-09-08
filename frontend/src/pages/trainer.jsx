import React from "react";
import {
  FaHome,
  FaBookOpen,
  FaPlusCircle,
  FaClipboardCheck,
  FaUsers,
  FaChartLine,
  FaCertificate,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

import "./trainer.css";

function Trainer() {
  const stats = [
    {
      value: "08",
      title: "My Courses",
      description: "3 currently active",
      icon: <FaBookOpen />,
    },
    {
      value: "156",
      title: "Total Trainees",
      description: "+12 this month",
      icon: <FaUsers />,
    },
    {
      value: "06",
      title: "Assessments",
      description: "2 upcoming",
      icon: <FaClipboardCheck />,
    },
    {
      value: "89%",
      title: "Avg. Performance",
      description: "+5% this month",
      icon: <FaChartLine />,
    },
  ];

  const courses = [
    {
      category: "PROGRAMMING",
      title: "Python for Data Science",
      trainees: "32 trainees",
      progress: "78%",
      status: "Active",
    },
    {
      category: "WEB DEVELOPMENT",
      title: "Web Development Fundamentals",
      trainees: "28 trainees",
      progress: "64%",
      status: "Active",
    },
    {
      category: "COMPUTER SCIENCE",
      title: "Data Structures & Algorithms",
      trainees: "24 trainees",
      progress: "51%",
      status: "Active",
    },
  ];

  const assessments = [
    {
      subject: "Python",
      title: "Python Fundamentals",
      date: "Today",
      time: "04:00 PM",
      submissions: "24 / 32 submitted",
    },
    {
      subject: "Web Development",
      title: "HTML & CSS Assessment",
      date: "Tomorrow",
      time: "11:00 AM",
      submissions: "18 / 28 submitted",
    },
    {
      subject: "DSA",
      title: "Arrays & Searching Quiz",
      date: "08 Sep",
      time: "02:30 PM",
      submissions: "12 / 24 submitted",
    },
  ];

  return (
    <div className="trainer-layout">

      {/* SIDEBAR */}
      <aside className="trainer-sidebar">

        <div className="trainer-logo">
          <div className="trainer-logo-icon">
            <span>✦</span>
          </div>

          <div className="trainer-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <div className="nav-heading">MAIN MENU</div>

        <nav className="trainer-nav">

          <a className="trainer-nav-item active">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a className="trainer-nav-item">
            <FaBookOpen />
            <span>My Courses</span>
          </a>

          <a className="trainer-nav-item">
            <FaPlusCircle />
            <span>Create Course</span>
          </a>

          <a className="trainer-nav-item">
            <FaClipboardCheck />
            <span>Assessments</span>
          </a>

          <a className="trainer-nav-item">
            <FaUsers />
            <span>Trainees</span>
          </a>

          <a className="trainer-nav-item">
            <FaChartLine />
            <span>Performance</span>
          </a>

          <a className="trainer-nav-item">
            <FaCertificate />
            <span>Certificates</span>
          </a>

        </nav>

        <div className="nav-heading account-heading">ACCOUNT</div>

        <nav className="trainer-nav">

          <a className="trainer-nav-item">
            <FaUser />
            <span>My Profile</span>
          </a>

          <a className="trainer-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>

        </nav>

        <div className="trainer-help">
          <div className="help-icon">?</div>

          <div>
            <strong>Need Help?</strong>
            <span>Contact support</span>
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="trainer-main">

        {/* TOPBAR */}
        <header className="trainer-topbar">

          <div className="trainer-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search courses, trainees..."
            />
          </div>

          <div className="trainer-profile">

            <div className="notification">
              <FaBell />
              <span></span>
            </div>

            <div className="profile-avatar">
              A
            </div>

            <div className="profile-details">
              <strong>User</strong>
              <span>Trainer</span>
            </div>

          </div>

        </header>

        {/* DASHBOARD */}
        <section className="trainer-content">

          <div className="trainer-welcome">

            <div>
              <div className="welcome-label">
                TRAINER DASHBOARD
              </div>

              <h1>
                Welcome back, User! 👋
              </h1>

              <p>
                Manage your courses, guide trainees and track their progress.
              </p>
            </div>

            <button className="create-course-btn">
              <FaPlusCircle />
              Create Course
            </button>

          </div>

          {/* STATS */}
          <div className="trainer-stats">

            {stats.map((stat, index) => (
              <div className="trainer-stat-card" key={index}>

                <div className="stat-icon">
                  {stat.icon}
                </div>

                <div className="stat-value">
                  {stat.value}
                </div>

                <div className="stat-title">
                  {stat.title}
                </div>

                <div className="stat-description">
                  {stat.description}
                </div>

              </div>
            ))}

          </div>

          {/* DASHBOARD GRID */}
          <div className="trainer-grid">

            {/* COURSES */}
            <div className="trainer-card courses-card">

              <div className="card-header">

                <div>
                  <h2>My Courses</h2>
                  <p>Manage your active courses</p>
                </div>

                <button className="view-all">
                  View All <FaArrowRight />
                </button>

              </div>

              <div className="course-list">

                {courses.map((course, index) => (
                  <div className="course-item" key={index}>

                    <div className="course-icon">
                      <FaBookOpen />
                    </div>

                    <div className="course-info">

                      <span className="course-category">
                        {course.category}
                      </span>

                      <h3>{course.title}</h3>

                      <div className="course-meta">
                        <FaUsers />
                        {course.trainees}
                      </div>

                      <div className="course-progress-row">

                        <span>Progress</span>

                        <strong>
                          {course.progress}
                        </strong>

                      </div>

                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: course.progress }}
                        ></div>
                      </div>

                    </div>

                    <button className="manage-btn">
                      Manage
                    </button>

                  </div>
                ))}

              </div>

            </div>

            {/* ASSESSMENTS */}
            <div className="trainer-card assessments-card">

              <div className="card-header">

                <div>
                  <h2>Upcoming Assessments</h2>
                  <p>Monitor your scheduled assessments</p>
                </div>

                <button className="view-all">
                  View All <FaArrowRight />
                </button>

              </div>

              <div className="assessment-list">

                {assessments.map((assessment, index) => (
                  <div className="assessment-item" key={index}>

                    <div className="assessment-icon">
                      <FaClipboardCheck />
                    </div>

                    <div className="assessment-info">

                      <span>
                        {assessment.subject}
                      </span>

                      <h3>
                        {assessment.title}
                      </h3>

                      <div className="assessment-meta">
                        <FaCalendarAlt />
                        {assessment.date}

                        <FaClock />
                        {assessment.time}
                      </div>

                      <small>
                        {assessment.submissions}
                      </small>

                    </div>

                    <FaArrowRight className="assessment-arrow" />

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Trainer;