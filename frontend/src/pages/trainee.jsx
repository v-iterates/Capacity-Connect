import React from "react";
import {
  FaHome,
  FaBookOpen,
  FaClipboardCheck,
  FaCertificate,
  FaTrophy,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaPlay,
  FaArrowRight,
  FaChartLine,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaLeaf,
} from "react-icons/fa";

import "./trainee.css";

function Trainee() {
  

  const trainee = {
    name: "User",
    role: "Trainee",
    level: "Intermediate",
    points: 1240,
  };

  const stats = [
    {
      title: "Enrolled Courses",
      value: "06",
      icon: <FaBookOpen />,
      description: "2 in progress",
    },
    {
      title: "Learning Progress",
      value: "72%",
      icon: <FaChartLine />,
      description: "Keep going!",
    },
    {
      title: "Skill Points",
      value: "1,240",
      icon: <FaTrophy />,
      description: "+120 this week",
    },
    {
      title: "Certificates",
      value: "03",
      icon: <FaCertificate />,
      description: "1 recently earned",
    },
  ];

  const courses = [
    {
      title: "Python for Data Science",
      category: "Programming",
      progress: 72,
      lessons: "18 / 25 lessons",
      duration: "6h 30m",
    },
    {
      title: "Web Development Fundamentals",
      category: "Development",
      progress: 48,
      lessons: "12 / 25 lessons",
      duration: "5h 20m",
    },
    {
      title: "Data Structures & Algorithms",
      category: "Computer Science",
      progress: 35,
      lessons: "8 / 22 lessons",
      duration: "7h 10m",
    },
  ];

  const assessments = [
    {
      title: "Python Fundamentals",
      subject: "Python",
      date: "Today",
      time: "04:00 PM",
    },
    {
      title: "HTML & CSS Assessment",
      subject: "Web Development",
      date: "Tomorrow",
      time: "11:00 AM",
    },
    {
      title: "DSA Quiz - Arrays",
      subject: "Data Structures",
      date: "08 Sep",
      time: "02:30 PM",
    },
  ];

  const achievements = [
    {
      title: "First Course Completed",
      description: "Completed your first learning course",
      icon: "🎓",
    },
    {
      title: "Quiz Master",
      description: "Scored above 90% in 5 assessments",
      icon: "🏆",
    },
    {
      title: "Learning Streak",
      description: "Maintained a 7-day learning streak",
      icon: "🔥",
    },
  ];


  const handleNavigation = (page) => {
    console.log(`Navigate to: ${page}`);
  };

  const handleContinueLearning = (course) => {
    console.log("Continue learning:", course);
  };

  const handleAssessment = (assessment) => {
    console.log("Open assessment:", assessment);
  };

  const handleProfile = () => {
    console.log("Open profile");
  };

  const handleNotifications = () => {
    console.log("Open notifications");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="trainee-dashboard">


      <aside className="trainee-sidebar">

    <div className="trainee-logo">
  <div className="trainee-logo-icon">
   <span>✦</span>
  </div>

  <div className="trainee-logo-text">
  <h2>CAPACITY CONNECT</h2>
 </div>
</div>

      
        <nav className="trainee-nav">

          <p className="nav-heading">MAIN MENU</p>

          <button
            className="trainee-nav-item active"
            onClick={() => handleNavigation("dashboard")}
          >
            <FaHome />
            <span>Dashboard</span>
          </button>

          <button
            className="trainee-nav-item"
            onClick={() => handleNavigation("courses")}
          >
            <FaBookOpen />
            <span>My Courses</span>
          </button>

          <button
            className="trainee-nav-item"
            onClick={() => handleNavigation("assessments")}
          >
            <FaClipboardCheck />
            <span>Assessments</span>
          </button>

          <button
            className="trainee-nav-item"
            onClick={() => handleNavigation("certificates")}
          >
            <FaCertificate />
            <span>Certificates</span>
          </button>

          <button
            className="trainee-nav-item"
            onClick={() => handleNavigation("achievements")}
          >
            <FaTrophy />
            <span>Achievements</span>
          </button>

          <p className="nav-heading second-heading">ACCOUNT</p>

          <button
            className="trainee-nav-item"
            onClick={handleProfile}
          >
            <FaUser />
            <span>My Profile</span>
          </button>

          <button
            className="trainee-nav-item"
            onClick={() => handleNavigation("settings")}
          >
            <FaCog />
            <span>Settings</span>
          </button>

        </nav>

        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">

          <div className="sidebar-help">
            <div className="help-icon">?</div>

            <div>
              <strong>Need Help?</strong>
              <span>Contact support</span>
            </div>
          </div>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <main className="trainee-main">

        {/* =====================================
            TOPBAR
        ====================================== */}

        <header className="trainee-topbar">

          <div className="dashboard-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search courses, assessments..."
            />

          </div>

          <div className="topbar-actions">

            {/* Notification */}
            <button
              className="notification-button"
              onClick={handleNotifications}
            >
              <FaBell />
              <span className="notification-dot"></span>
            </button>

            <button
              className="trainee-profile"
              onClick={handleProfile}
            >

              <div className="profile-avatar">
                A
              </div>

              <div className="profile-details">
                <strong>{trainee.name}</strong>
                <span>{trainee.role}</span>
              </div>

            </button>

          </div>

        </header>

        <div className="dashboard-content">

          {/* Welcome Section */}

          <section className="welcome-section">

            <div>
              <span className="welcome-label">
                TRAINEE DASHBOARD
              </span>

              <h1>
                Welcome back, {trainee.name}! 👋
              </h1>

              <p>
                Continue your learning journey and build
                skills for your future.
              </p>
            </div>

            <div className="level-card">

              <div className="level-icon">
                <FaTrophy />
              </div>

              <div>
                <span>Your Level</span>
                <strong>{trainee.level}</strong>
              </div>

            </div>

          </section>

          <section className="stats-grid">

            {stats.map((stat, index) => (

              <div
                className="stat-card"
                key={index}
              >

                <div className="stat-top">

                  <div className="stat-icon">
                    {stat.icon}
                  </div>

                </div>

                <div className="stat-value">
                  {stat.value}
                </div>

                <div className="stat-title">
                  {stat.title}
                </div>

                <span className="stat-description">
                  {stat.description}
                </span>

              </div>

            ))}

          </section>

          <div className="dashboard-grid">

            <section className="dashboard-card courses-card">

              <div className="card-header">

                <div>
                  <h2>Continue Learning</h2>
                  <p>Pick up where you left off</p>
                </div>

                <button
                  className="view-all-button"
                  onClick={() => handleNavigation("courses")}
                >
                  View All
                  <FaArrowRight />
                </button>

              </div>

              <div className="course-list">

                {courses.map((course, index) => (

                  <div
                    className="course-item"
                    key={index}
                  >

                    <div className="course-icon">
                      <FaBookOpen />
                    </div>

                    <div className="course-info">

                      <span className="course-category">
                        {course.category}
                      </span>

                      <h3>{course.title}</h3>

                      <div className="course-meta">
                        <span>
                          <FaBookOpen />
                          {course.lessons}
                        </span>

                        <span>
                          <FaClock />
                          {course.duration}
                        </span>
                      </div>

                      <div className="course-progress">

                        <div className="progress-label">
                          <span>Progress</span>
                          <strong>{course.progress}%</strong>
                        </div>

                        <div className="progress-track">

                          <div
                            className="progress-fill"
                            style={{
                              width: `${course.progress}%`,
                            }}
                          ></div>

                        </div>

                      </div>

                    </div>

                    <button
                      className="continue-button"
                      onClick={() =>
                        handleContinueLearning(course.title)
                      }
                    >
                      <FaPlay />
                      Continue
                    </button>

                  </div>

                ))}

              </div>

            </section>

            <section className="dashboard-card assessments-card">

              <div className="card-header">

                <div>
                  <h2>Upcoming Assessments</h2>
                  <p>Stay prepared for your tests</p>
                </div>

                <button
                  className="view-all-button"
                  onClick={() =>
                    handleNavigation("assessments")
                  }
                >
                  View All
                  <FaArrowRight />
                </button>

              </div>

              <div className="assessment-list">

                {assessments.map((assessment, index) => (

                  <div
                    className="assessment-item"
                    key={index}
                    onClick={() =>
                      handleAssessment(assessment)
                    }
                  >

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

                      <div className="assessment-time">

                        <span>
                          <FaCalendarAlt />
                          {assessment.date}
                        </span>

                        <span>
                          <FaClock />
                          {assessment.time}
                        </span>

                      </div>

                    </div>

                    <FaArrowRight className="assessment-arrow" />

                  </div>

                ))}

              </div>

            </section>

          </div>

          <div className="dashboard-grid second-row">


            <section className="dashboard-card progress-card">

              <div className="card-header">

                <div>
                  <h2>Learning Progress</h2>
                  <p>Your overall learning activity</p>
                </div>

                <span className="progress-period">
                  This Month
                </span>

              </div>

              <div className="progress-overview">

                <div className="progress-circle">

                  <div className="circle-inner">
                    <strong>72%</strong>
                    <span>Completed</span>
                  </div>

                </div>

                <div className="progress-details">

                  <div className="progress-stat">
                    <span className="progress-dot completed"></span>
                    <div>
                      <strong>18</strong>
                      <span>Completed Lessons</span>
                    </div>
                  </div>

                  <div className="progress-stat">
                    <span className="progress-dot ongoing"></span>
                    <div>
                      <strong>07</strong>
                      <span>Lessons In Progress</span>
                    </div>
                  </div>

                  <div className="progress-stat">
                    <span className="progress-dot pending"></span>
                    <div>
                      <strong>05</strong>
                      <span>Lessons Remaining</span>
                    </div>
                  </div>

                </div>

              </div>

            </section>


            <section className="dashboard-card achievements-card">

              <div className="card-header">

                <div>
                  <h2>Recent Achievements</h2>
                  <p>Your latest milestones</p>
                </div>

                <button
                  className="view-all-button"
                  onClick={() =>
                    handleNavigation("achievements")
                  }
                >
                  View All
                  <FaArrowRight />
                </button>

              </div>

              <div className="achievement-list">

                {achievements.map((achievement, index) => (

                  <div
                    className="achievement-item"
                    key={index}
                  >

                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>

                    <div className="achievement-info">

                      <h3>{achievement.title}</h3>

                      <p>
                        {achievement.description}
                      </p>

                    </div>

                    <FaCheckCircle className="achievement-check" />

                  </div>

                ))}

              </div>

            </section>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Trainee;