import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaUsers,
  FaBookOpen,
  FaChartLine,
  FaTrophy,
  FaEye,
  FaEnvelope,
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaFilter,
  FaArrowUp,
} from "react-icons/fa";
import "./trainerTrainees.css";

const traineesData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    course: "Python for Data Science",
    progress: 82,
    assessments: 4,
    averageScore: 91,
    status: "Active",
    lastActive: "Today",
    phone: "+91 98765 11111",
    joined: "12 Aug 2026",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@example.com",
    course: "Python for Data Science",
    progress: 74,
    assessments: 4,
    averageScore: 84,
    status: "Active",
    lastActive: "Today",
    phone: "+91 98765 22222",
    joined: "14 Aug 2026",
  },
  {
    id: 3,
    name: "Aman Verma",
    email: "aman.verma@example.com",
    course: "Python for Data Science",
    progress: 48,
    assessments: 3,
    averageScore: 62,
    status: "At Risk",
    lastActive: "2 days ago",
    phone: "+91 98765 33333",
    joined: "18 Aug 2026",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    course: "Web Development Fundamentals",
    progress: 91,
    assessments: 5,
    averageScore: 94,
    status: "Completed",
    lastActive: "Yesterday",
    phone: "+91 98765 44444",
    joined: "05 Aug 2026",
  },
  {
    id: 5,
    name: "Arjun Kumar",
    email: "arjun.kumar@example.com",
    course: "Web Development Fundamentals",
    progress: 56,
    assessments: 3,
    averageScore: 58,
    status: "At Risk",
    lastActive: "3 days ago",
    phone: "+91 98765 55555",
    joined: "21 Aug 2026",
  },
  {
    id: 6,
    name: "Neha Patel",
    email: "neha.patel@example.com",
    course: "Data Structures & Algorithms",
    progress: 68,
    assessments: 4,
    averageScore: 79,
    status: "Active",
    lastActive: "Today",
    phone: "+91 98765 66666",
    joined: "09 Aug 2026",
  },
  {
    id: 7,
    name: "Vikash Singh",
    email: "vikash.singh@example.com",
    course: "Data Structures & Algorithms",
    progress: 87,
    assessments: 5,
    averageScore: 88,
    status: "Active",
    lastActive: "Yesterday",
    phone: "+91 98765 77777",
    joined: "07 Aug 2026",
  },
  {
    id: 8,
    name: "Meera Kapoor",
    email: "meera.kapoor@example.com",
    course: "Python for Data Science",
    progress: 100,
    assessments: 6,
    averageScore: 96,
    status: "Completed",
    lastActive: "5 days ago",
    phone: "+91 98765 88888",
    joined: "01 Aug 2026",
  },
];

function TrainerTrainees() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  const courses = [
    "All Courses",
    ...new Set(traineesData.map((trainee) => trainee.course)),
  ];

  const filteredTrainees = useMemo(() => {
    return traineesData.filter((trainee) => {
      const matchesSearch =
        trainee.name.toLowerCase().includes(search.toLowerCase()) ||
        trainee.email.toLowerCase().includes(search.toLowerCase());

      const matchesCourse =
        courseFilter === "All Courses" ||
        trainee.course === courseFilter;

      const matchesStatus =
        statusFilter === "All Status" ||
        trainee.status === statusFilter;

      return matchesSearch && matchesCourse && matchesStatus;
    });
  }, [search, courseFilter, statusFilter]);

  const totalTrainees = traineesData.length;

  const activeTrainees = traineesData.filter(
    (trainee) => trainee.status === "Active"
  ).length;

  const atRiskTrainees = traineesData.filter(
    (trainee) => trainee.status === "At Risk"
  ).length;

  const completedTrainees = traineesData.filter(
    (trainee) => trainee.status === "Completed"
  ).length;

  const averageProgress = Math.round(
    traineesData.reduce((sum, trainee) => sum + trainee.progress, 0) /
      traineesData.length
  );

  const averageScore = Math.round(
    traineesData.reduce((sum, trainee) => sum + trainee.averageScore, 0) /
      traineesData.length
  );

  return (
    <div className="trainer-trainees-page">

      {/* Sidebar */}
      <aside className="tt-sidebar">

        <div className="tt-logo">
          <div className="tt-logo-icon">
            <span>✦</span>
          </div>

          <div className="tt-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="tt-nav">

          <div className="tt-nav-section">
            <p>MAIN MENU</p>

            <div className="tt-nav-item">
              <span>▣</span>
              Dashboard
            </div>

            <div className="tt-nav-item">
              <span>▤</span>
              My Courses
            </div>

            <div className="tt-nav-item">
              <span>＋</span>
              Create Course
            </div>

            <div className="tt-nav-item">
              <span>☑</span>
              Assessments
            </div>

            <div className="tt-nav-item active">
              <FaUsers />
              Trainees
            </div>

            <div className="tt-nav-item">
              <FaChartLine />
              Performance
            </div>

            <div className="tt-nav-item">
              <span>🏆</span>
              Certificates
            </div>
          </div>

          <div className="tt-nav-section bottom-menu">
            <p>ACCOUNT</p>

            <div className="tt-nav-item">
              <span>◉</span>
              My Profile
            </div>

            <div className="tt-nav-item">
              <span>⚙</span>
              Settings
            </div>

            <div className="tt-nav-item">
              <span>?</span>
              Help
            </div>
          </div>

        </nav>
      </aside>

      {/* Main */}
      <main className="tt-main">

        {/* Topbar */}
        <header className="tt-topbar">

          <div className="tt-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search trainees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="tt-top-actions">

            <button className="tt-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="tt-profile">
              <div className="tt-avatar">A</div>

              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>
            </div>

          </div>

        </header>

        {/* Content */}
        <section className="tt-content">

          <div className="tt-page-heading">

            <div>
              <span className="tt-eyebrow">TRAINER PANEL</span>

              <h1>Trainee Management</h1>

              <p>
                Monitor trainee progress, performance and learning activity.
              </p>
            </div>

            <div className="tt-heading-icon">
              <FaUsers />
            </div>

          </div>

          {/* Stats */}
          <div className="tt-stats">

            <div className="tt-stat-card">
              <div className="tt-stat-icon">
                <FaUsers />
              </div>

              <div>
                <span>Total Trainees</span>
                <strong>{totalTrainees}</strong>
                <small>
                  <FaArrowUp /> 12 this month
                </small>
              </div>
            </div>

            <div className="tt-stat-card">
              <div className="tt-stat-icon">
                <FaCheckCircle />
              </div>

              <div>
                <span>Active Trainees</span>
                <strong>{activeTrainees}</strong>
                <small>Currently learning</small>
              </div>
            </div>

            <div className="tt-stat-card">
              <div className="tt-stat-icon warning">
                <FaExclamationTriangle />
              </div>

              <div>
                <span>At Risk</span>
                <strong>{atRiskTrainees}</strong>
                <small>Need attention</small>
              </div>
            </div>

            <div className="tt-stat-card">
              <div className="tt-stat-icon">
                <FaTrophy />
              </div>

              <div>
                <span>Completed</span>
                <strong>{completedTrainees}</strong>
                <small>{averageScore}% avg. score</small>
              </div>
            </div>

          </div>

          {/* Overview */}
          <div className="tt-overview">

            <div className="tt-overview-card">
              <div className="tt-overview-icon">
                <FaChartLine />
              </div>

              <div>
                <span>Average Course Progress</span>
                <strong>{averageProgress}%</strong>
              </div>

              <div className="tt-progress">
                <div style={{ width: `${averageProgress}%` }}></div>
              </div>
            </div>

            <div className="tt-overview-card">
              <div className="tt-overview-icon">
                <FaTrophy />
              </div>

              <div>
                <span>Average Assessment Score</span>
                <strong>{averageScore}%</strong>
              </div>

              <div className="tt-progress">
                <div style={{ width: `${averageScore}%` }}></div>
              </div>
            </div>

          </div>

          {/* Table Card */}
          <div className="tt-table-card">

            <div className="tt-table-header">

              <div>
                <h2>All Trainees</h2>
                <p>{filteredTrainees.length} trainees found</p>
              </div>

              <div className="tt-filters">

                <div className="tt-filter">
                  <FaBookOpen />

                  <select
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                  >
                    {courses.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div className="tt-filter">
                  <FaFilter />

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option>All Status</option>
                    <option>Active</option>
                    <option>At Risk</option>
                    <option>Completed</option>
                  </select>
                </div>

              </div>

            </div>

            <div className="tt-table-wrapper">

              <table className="tt-table">

                <thead>
                  <tr>
                    <th>TRAINEE</th>
                    <th>COURSE</th>
                    <th>PROGRESS</th>
                    <th>ASSESSMENTS</th>
                    <th>AVG. SCORE</th>
                    <th>STATUS</th>
                    <th>LAST ACTIVE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredTrainees.length > 0 ? (
                    filteredTrainees.map((trainee) => (

                      <tr key={trainee.id}>

                        <td>
                          <div className="tt-trainee-info">

                            <div className="tt-trainee-avatar">
                              {trainee.name.charAt(0)}
                            </div>

                            <div>
                              <strong>{trainee.name}</strong>
                              <span>{trainee.email}</span>
                            </div>

                          </div>
                        </td>

                        <td>
                          <span className="tt-course-name">
                            {trainee.course}
                          </span>
                        </td>

                        <td>
                          <div className="tt-progress-cell">

                            <div className="tt-progress-bar">
                              <div
                                style={{
                                  width: `${trainee.progress}%`,
                                }}
                              ></div>
                            </div>

                            <span>{trainee.progress}%</span>

                          </div>
                        </td>

                        <td>
                          <span className="tt-assessment-count">
                            {trainee.assessments}
                          </span>
                        </td>

                        <td>
                          <strong className="tt-score">
                            {trainee.averageScore}%
                          </strong>
                        </td>

                        <td>
                          <span
                            className={`tt-status ${trainee.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {trainee.status}
                          </span>
                        </td>

                        <td>
                          <span className="tt-last-active">
                            <FaClock />
                            {trainee.lastActive}
                          </span>
                        </td>

                        <td>

                          <button
                            className="tt-view-btn"
                            onClick={() => setSelectedTrainee(trainee)}
                          >
                            <FaEye />
                            View
                          </button>

                        </td>

                      </tr>

                    ))
                  ) : (

                    <tr>
                      <td colSpan="8" className="tt-empty">
                        No trainees found.
                      </td>
                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </section>

      </main>

      {/* Trainee Details Modal */}
      {selectedTrainee && (

        <div
          className="tt-modal-overlay"
          onClick={() => setSelectedTrainee(null)}
        >

          <div
            className="tt-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="tt-close"
              onClick={() => setSelectedTrainee(null)}
            >
              <FaTimes />
            </button>

            <div className="tt-modal-profile">

              <div className="tt-modal-avatar">
                {selectedTrainee.name.charAt(0)}
              </div>

              <div>
                <h2>{selectedTrainee.name}</h2>
                <p>{selectedTrainee.email}</p>

                <span
                  className={`tt-status ${selectedTrainee.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {selectedTrainee.status}
                </span>
              </div>

            </div>

            <div className="tt-modal-divider"></div>

            <div className="tt-detail-grid">

              <div>
                <span>Course</span>
                <strong>{selectedTrainee.course}</strong>
              </div>

              <div>
                <span>Joined</span>
                <strong>{selectedTrainee.joined}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{selectedTrainee.phone}</strong>
              </div>

              <div>
                <span>Last Active</span>
                <strong>{selectedTrainee.lastActive}</strong>
              </div>

            </div>

            <div className="tt-performance">

              <h3>Performance Overview</h3>

              <div className="tt-performance-row">

                <div>
                  <span>Course Progress</span>
                  <strong>{selectedTrainee.progress}%</strong>
                </div>

                <div className="tt-large-progress">
                  <div
                    style={{
                      width: `${selectedTrainee.progress}%`,
                    }}
                  ></div>
                </div>

              </div>

              <div className="tt-performance-row">

                <div>
                  <span>Average Assessment Score</span>
                  <strong>{selectedTrainee.averageScore}%</strong>
                </div>

                <div className="tt-large-progress">
                  <div
                    style={{
                      width: `${selectedTrainee.averageScore}%`,
                    }}
                  ></div>
                </div>

              </div>

              <div className="tt-performance-stats">

                <div>
                  <FaBookOpen />
                  <strong>{selectedTrainee.assessments}</strong>
                  <span>Assessments</span>
                </div>

                <div>
                  <FaChartLine />
                  <strong>{selectedTrainee.progress}%</strong>
                  <span>Progress</span>
                </div>

                <div>
                  <FaTrophy />
                  <strong>{selectedTrainee.averageScore}%</strong>
                  <span>Avg. Score</span>
                </div>

              </div>

            </div>

            <div className="tt-modal-actions">

              <button
                className="tt-contact-btn"
                onClick={() =>
                  alert(`Contacting ${selectedTrainee.name}`)
                }
              >
                <FaEnvelope />
                Contact Trainee
              </button>

              <button
                className="tt-modal-close-btn"
                onClick={() => setSelectedTrainee(null)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default TrainerTrainees;