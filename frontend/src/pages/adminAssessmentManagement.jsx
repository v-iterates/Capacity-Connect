import React, { useMemo, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBookOpen,
  FaClipboardList,
  FaGraduationCap,
  FaChartBar,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaSearch,
  FaFilter,
  FaEye,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaQuestionCircle,
  FaUserGraduate,
  FaChartPie,
  FaTimesCircle,
} from "react-icons/fa";

import "./adminAssessmentManagement.css";

const initialAssessments = [
  {
    id: 1,
    title: "Python Fundamentals Assessment",
    course: "Python for Data Science",
    subject: "Python Basics",
    trainer: "Dr. Anil Kumar",
    questions: 10,
    duration: "30 Minutes",
    submissions: 24,
    totalTrainees: 32,
    status: "Active",
    deadline: "08 Sep 2026",
    description:
      "Assessment covering Python syntax, variables, data types, functions and basic programming concepts.",
  },
  {
    id: 2,
    title: "HTML & CSS Assessment",
    course: "Web Development Fundamentals",
    subject: "Frontend Basics",
    trainer: "Priya Singh",
    questions: 20,
    duration: "40 Minutes",
    submissions: 18,
    totalTrainees: 28,
    status: "Active",
    deadline: "09 Sep 2026",
    description:
      "Test covering HTML structure, CSS styling, layouts, selectors and responsive design.",
  },
  {
    id: 3,
    title: "Machine Learning Basics Quiz",
    course: "Machine Learning Basics",
    subject: "Machine Learning",
    trainer: "Dr. Neha Gupta",
    questions: 15,
    duration: "30 Minutes",
    submissions: 0,
    totalTrainees: 24,
    status: "Pending",
    deadline: "12 Sep 2026",
    description:
      "Introduction-level assessment covering supervised learning, datasets, models and evaluation.",
  },
  {
    id: 4,
    title: "Arrays & Searching Quiz",
    course: "Data Structures & Algorithms",
    subject: "Arrays",
    trainer: "Rahul Sharma",
    questions: 12,
    duration: "25 Minutes",
    submissions: 12,
    totalTrainees: 24,
    status: "Active",
    deadline: "10 Sep 2026",
    description:
      "Assessment covering arrays, searching algorithms, time complexity and basic problem solving.",
  },
  {
    id: 5,
    title: "Cloud Computing Fundamentals",
    course: "Cloud Computing Essentials",
    subject: "Cloud Basics",
    trainer: "Amit Verma",
    questions: 15,
    duration: "30 Minutes",
    submissions: 0,
    totalTrainees: 18,
    status: "Pending",
    deadline: "15 Sep 2026",
    description:
      "Assessment covering cloud service models, deployment models and fundamental cloud concepts.",
  },
  {
    id: 6,
    title: "Cyber Security Awareness Test",
    course: "Cyber Security Awareness",
    subject: "Security Basics",
    trainer: "Kavita Sharma",
    questions: 10,
    duration: "20 Minutes",
    submissions: 38,
    totalTrainees: 45,
    status: "Completed",
    deadline: "01 Sep 2026",
    description:
      "Assessment covering passwords, phishing, data protection and cybersecurity best practices.",
  },
  {
    id: 7,
    title: "Professional Communication Quiz",
    course: "Professional Communication",
    subject: "Communication Skills",
    trainer: "Meera Kapoor",
    questions: 10,
    duration: "20 Minutes",
    submissions: 0,
    totalTrainees: 20,
    status: "Rejected",
    deadline: "18 Sep 2026",
    description:
      "Assessment covering professional communication, workplace etiquette and presentation skills.",
  },
];

function AdminAssessmentManagement() {
  const [assessments, setAssessments] = useState(initialAssessments);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [courseFilter, setCourseFilter] = useState("All");

  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const filteredAssessments = useMemo(() => {
    return assessments.filter((assessment) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        assessment.title.toLowerCase().includes(search) ||
        assessment.course.toLowerCase().includes(search) ||
        assessment.trainer.toLowerCase().includes(search) ||
        assessment.subject.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        assessment.status === statusFilter;

      const matchesCourse =
        courseFilter === "All" ||
        assessment.course === courseFilter;

      return matchesSearch && matchesStatus && matchesCourse;
    });
  }, [assessments, searchTerm, statusFilter, courseFilter]);

  const totalAssessments = assessments.length;

  const activeAssessments = assessments.filter(
    (assessment) => assessment.status === "Active"
  ).length;

  const pendingAssessments = assessments.filter(
    (assessment) => assessment.status === "Pending"
  ).length;

  const totalSubmissions = assessments.reduce(
    (total, assessment) => total + assessment.submissions,
    0
  );

  const approveAssessment = (id) => {
    setAssessments((current) =>
      current.map((assessment) =>
        assessment.id === id
          ? { ...assessment, status: "Active" }
          : assessment
      )
    );
  };

  const rejectAssessment = (id) => {
    setAssessments((current) =>
      current.map((assessment) =>
        assessment.id === id
          ? { ...assessment, status: "Rejected" }
          : assessment
      )
    );
  };

  const deleteAssessment = (id) => {
    const assessment = assessments.find(
      (item) => item.id === id
    );

    const confirmed = window.confirm(
      `Are you sure you want to delete "${assessment?.title}"?`
    );

    if (!confirmed) return;

    setAssessments((current) =>
      current.filter((assessment) => assessment.id !== id)
    );
  };

  const openDetails = (assessment) => {
    setSelectedAssessment(assessment);
    setShowDetails(true);
    setShowQuestions(false);
  };

  const openQuestions = (assessment) => {
    setSelectedAssessment(assessment);
    setShowQuestions(true);
    setShowDetails(false);
  };

  const closeModal = () => {
    setSelectedAssessment(null);
    setShowDetails(false);
    setShowQuestions(false);
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(" ", "-");
  };

  return (
    <div className="admin-assessment-page">
      {/* SIDEBAR */}
      <aside className="admin-assessment-sidebar">
        <div className="admin-assessment-logo">
          <div className="admin-assessment-logo-icon">
            <span>✦</span>
          </div>

          <div className="admin-assessment-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <p>ADMIN PANEL</p>
          </div>
        </div>

        <nav className="admin-assessment-nav">
          <p className="admin-assessment-nav-title">
            MAIN MENU
          </p>

          <a href="#" className="admin-assessment-nav-item">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a href="#" className="admin-assessment-nav-item">
            <FaUsers />
            <span>User Management</span>
          </a>

          <a href="#" className="admin-assessment-nav-item">
            <FaBookOpen />
            <span>Course Management</span>
          </a>

          <a
            href="#"
            className="admin-assessment-nav-item active"
            onClick={(e) => e.preventDefault()}
          >
            <FaClipboardList />
            <span>Assessments</span>
          </a>

          <a href="#" className="admin-assessment-nav-item">
            <FaGraduationCap />
            <span>Certificates</span>
          </a>

          <p className="admin-assessment-nav-title second-title">
            MANAGEMENT
          </p>

          <a href="#" className="admin-assessment-nav-item">
            <FaChartBar />
            <span>Reports & Analytics</span>
          </a>

          <a href="#" className="admin-assessment-nav-item">
            <FaBell />
            <span>Announcements</span>
          </a>

          <a href="#" className="admin-assessment-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>
        </nav>

        <div className="admin-assessment-sidebar-bottom">
          <div className="admin-assessment-user-mini">
            <div className="admin-assessment-avatar">A</div>

            <div>
              <strong>Admin User</strong>
              <span>Administrator</span>
            </div>

            <FaChevronDown />
          </div>

          <button className="admin-assessment-logout">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-assessment-main">
        {/* TOPBAR */}
        <header className="admin-assessment-topbar">
          <div className="admin-assessment-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search assessments, courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="admin-assessment-top-actions">
            <button className="admin-assessment-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="admin-assessment-top-profile">
              <div className="admin-assessment-top-avatar">
                A
              </div>

              <div>
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>

              <FaChevronDown />
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="admin-assessment-content">
          <div className="admin-assessment-heading">
            <div>
              <p className="admin-assessment-eyebrow">
                ADMINISTRATION
              </p>

              <h1>Assessment Management</h1>

              <p>
                Review, approve and monitor assessments created by
                trainers.
              </p>
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="admin-assessment-stats">
            <div className="admin-assessment-stat-card">
              <div className="admin-assessment-stat-icon">
                <FaClipboardList />
              </div>

              <div>
                <span>Total Assessments</span>
                <strong>{totalAssessments}</strong>
                <small>Across all courses</small>
              </div>
            </div>

            <div className="admin-assessment-stat-card">
              <div className="admin-assessment-stat-icon">
                <FaCheckCircle />
              </div>

              <div>
                <span>Active Assessments</span>
                <strong>{activeAssessments}</strong>
                <small>Currently available</small>
              </div>
            </div>

            <div className="admin-assessment-stat-card pending-card">
              <div className="admin-assessment-stat-icon">
                <FaClock />
              </div>

              <div>
                <span>Pending Review</span>
                <strong>{pendingAssessments}</strong>
                <small>Awaiting approval</small>
              </div>
            </div>

            <div className="admin-assessment-stat-card">
              <div className="admin-assessment-stat-icon">
                <FaUserGraduate />
              </div>

              <div>
                <span>Total Submissions</span>
                <strong>{totalSubmissions}</strong>
                <small>Completed attempts</small>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="admin-assessment-table-card">
            <div className="admin-assessment-table-header">
              <div>
                <h2>All Assessments</h2>
                <p>
                  Manage assessments and monitor trainee
                  submissions.
                </p>
              </div>

              <div className="admin-assessment-filters">
                <div className="admin-assessment-filter">
                  <FaFilter />

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(e.target.value)
                    }
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="admin-assessment-filter">
                  <FaBookOpen />

                  <select
                    value={courseFilter}
                    onChange={(e) =>
                      setCourseFilter(e.target.value)
                    }
                  >
                    <option value="All">All Courses</option>
                    <option value="Python for Data Science">
                      Python for Data Science
                    </option>
                    <option value="Web Development Fundamentals">
                      Web Development Fundamentals
                    </option>
                    <option value="Machine Learning Basics">
                      Machine Learning Basics
                    </option>
                    <option value="Data Structures & Algorithms">
                      Data Structures & Algorithms
                    </option>
                    <option value="Cloud Computing Essentials">
                      Cloud Computing Essentials
                    </option>
                    <option value="Cyber Security Awareness">
                      Cyber Security Awareness
                    </option>
                    <option value="Professional Communication">
                      Professional Communication
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="admin-assessment-result-info">
              Showing{" "}
              <strong>{filteredAssessments.length}</strong> of{" "}
              <strong>{assessments.length}</strong> assessments
            </div>

            <div className="admin-assessment-table-wrapper">
              <table className="admin-assessment-table">
                <thead>
                  <tr>
                    <th>ASSESSMENT</th>
                    <th>COURSE</th>
                    <th>TRAINER</th>
                    <th>QUESTIONS</th>
                    <th>SUBMISSIONS</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredAssessments.length > 0 ? (
                    filteredAssessments.map((assessment) => (
                      <tr key={assessment.id}>
                        <td>
                          <div className="admin-assessment-info">
                            <div className="admin-assessment-icon">
                              <FaClipboardList />
                            </div>

                            <div>
                              <strong>
                                {assessment.title}
                              </strong>

                              <span>
                                {assessment.subject} •{" "}
                                {assessment.duration}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span className="admin-assessment-course">
                            {assessment.course}
                          </span>
                        </td>

                        <td>
                          <div className="admin-assessment-trainer">
                            <div className="admin-assessment-trainer-avatar">
                              {assessment.trainer.charAt(0)}
                            </div>

                            <span>{assessment.trainer}</span>
                          </div>
                        </td>

                        <td>
                          <div className="admin-assessment-question-count">
                            <FaQuestionCircle />
                            {assessment.questions}
                          </div>
                        </td>

                        <td>
                          <div className="admin-assessment-submissions">
                            <strong>
                              {assessment.submissions}
                            </strong>

                            <span>
                              / {assessment.totalTrainees}
                            </span>
                          </div>
                        </td>

                        <td>
                          <span
                            className={`admin-assessment-status ${getStatusClass(
                              assessment.status
                            )}`}
                          >
                            {assessment.status === "Active" && (
                              <FaCheckCircle />
                            )}

                            {assessment.status === "Pending" && (
                              <FaClock />
                            )}

                            {assessment.status ===
                              "Completed" && (
                              <FaCheckCircle />
                            )}

                            {assessment.status ===
                              "Rejected" && (
                              <FaTimesCircle />
                            )}

                            {assessment.status}
                          </span>
                        </td>

                        <td>
                          <div className="admin-assessment-actions">
                            <button
                              className="assessment-action view"
                              title="View assessment"
                              onClick={() =>
                                openDetails(assessment)
                              }
                            >
                              <FaEye />
                            </button>

                            <button
                              className="assessment-action questions"
                              title="View questions"
                              onClick={() =>
                                openQuestions(assessment)
                              }
                            >
                              <FaQuestionCircle />
                            </button>

                            <button
                              className="assessment-action edit"
                              title="Edit assessment"
                              onClick={() =>
                                alert(
                                  `Edit "${assessment.title}" - backend integration will be added later.`
                                )
                              }
                            >
                              <FaEdit />
                            </button>

                            {assessment.status === "Pending" && (
                              <>
                                <button
                                  className="assessment-action approve"
                                  title="Approve assessment"
                                  onClick={() =>
                                    approveAssessment(
                                      assessment.id
                                    )
                                  }
                                >
                                  <FaCheck />
                                </button>

                                <button
                                  className="assessment-action reject"
                                  title="Reject assessment"
                                  onClick={() =>
                                    rejectAssessment(
                                      assessment.id
                                    )
                                  }
                                >
                                  <FaTimes />
                                </button>
                              </>
                            )}

                            <button
                              className="assessment-action delete"
                              title="Delete assessment"
                              onClick={() =>
                                deleteAssessment(
                                  assessment.id
                                )
                              }
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">
                        <div className="admin-assessment-empty">
                          <FaSearch />

                          <h3>No assessments found</h3>

                          <p>
                            Try changing your search or filters.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* DETAILS MODAL */}
      {showDetails && selectedAssessment && (
        <div
          className="admin-assessment-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="admin-assessment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-assessment-modal-header">
              <div>
                <p>ASSESSMENT DETAILS</p>

                <h2>{selectedAssessment.title}</h2>
              </div>

              <button onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="admin-assessment-modal-body">
              <div className="admin-assessment-detail-grid">
                <div>
                  <span>Course</span>
                  <strong>
                    {selectedAssessment.course}
                  </strong>
                </div>

                <div>
                  <span>Subject</span>
                  <strong>
                    {selectedAssessment.subject}
                  </strong>
                </div>

                <div>
                  <span>Trainer</span>
                  <strong>
                    {selectedAssessment.trainer}
                  </strong>
                </div>

                <div>
                  <span>Questions</span>
                  <strong>
                    {selectedAssessment.questions}
                  </strong>
                </div>

                <div>
                  <span>Duration</span>
                  <strong>
                    {selectedAssessment.duration}
                  </strong>
                </div>

                <div>
                  <span>Deadline</span>
                  <strong>
                    {selectedAssessment.deadline}
                  </strong>
                </div>
              </div>

              <div className="admin-assessment-progress-section">
                <div className="admin-assessment-progress-heading">
                  <span>Submission Progress</span>

                  <strong>
                    {selectedAssessment.submissions} /{" "}
                    {selectedAssessment.totalTrainees}
                  </strong>
                </div>

                <div className="admin-assessment-progress-track">
                  <div
                    className="admin-assessment-progress-fill"
                    style={{
                      width: `${
                        selectedAssessment.totalTrainees > 0
                          ? (selectedAssessment.submissions /
                              selectedAssessment.totalTrainees) *
                            100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="admin-assessment-description">
                <h3>Description</h3>

                <p>{selectedAssessment.description}</p>
              </div>
            </div>

            <div className="admin-assessment-modal-footer">
              {selectedAssessment.status === "Pending" && (
                <>
                  <button
                    className="modal-assessment-reject"
                    onClick={() => {
                      rejectAssessment(
                        selectedAssessment.id
                      );
                      closeModal();
                    }}
                  >
                    <FaTimes />
                    Reject
                  </button>

                  <button
                    className="modal-assessment-approve"
                    onClick={() => {
                      approveAssessment(
                        selectedAssessment.id
                      );
                      closeModal();
                    }}
                  >
                    <FaCheck />
                    Approve
                  </button>
                </>
              )}

              <button
                className="modal-assessment-close"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QUESTIONS MODAL */}
      {showQuestions && selectedAssessment && (
        <div
          className="admin-assessment-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="admin-assessment-modal questions-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-assessment-modal-header">
              <div>
                <p>ASSESSMENT QUESTIONS</p>

                <h2>{selectedAssessment.title}</h2>
              </div>

              <button onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="admin-assessment-question-list">
              <div className="admin-question-preview">
                <div className="admin-question-number">
                  01
                </div>

                <div>
                  <strong>
                    Which keyword is used to define a function
                    in Python?
                  </strong>

                  <span>A. function &nbsp; B. def</span>

                  <span>C. define &nbsp; D. func</span>
                </div>

                <FaCheckCircle />
              </div>

              <div className="admin-question-preview">
                <div className="admin-question-number">
                  02
                </div>

                <div>
                  <strong>
                    Which data type stores True or False values?
                  </strong>

                  <span>A. String &nbsp; B. Integer</span>

                  <span>C. Boolean &nbsp; D. Float</span>
                </div>

                <FaCheckCircle />
              </div>

              <div className="admin-question-preview">
                <div className="admin-question-number">
                  03
                </div>

                <div>
                  <strong>
                    Which symbol is used for a comment in
                    Python?
                  </strong>

                  <span>A. // &nbsp; B. #</span>

                  <span>C. /* */ &nbsp; D. &lt;!-- --&gt;</span>
                </div>

                <FaCheckCircle />
              </div>

              <div className="admin-question-more">
                + {Math.max(selectedAssessment.questions - 3, 0)}{" "}
                more questions
              </div>
            </div>

            <div className="admin-assessment-modal-footer">
              <button
                className="modal-assessment-close"
                onClick={closeModal}
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

export default AdminAssessmentManagement;