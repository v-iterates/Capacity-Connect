import React, { useMemo, useState } from "react";
import {
  FaBookOpen,
  FaChartBar,
  FaCheckCircle,
  FaChevronDown,
  FaClipboardList,
  FaCog,
  FaEdit,
  FaEye,
  FaFileAlt,
  FaFilter,
  FaGraduationCap,
  FaHome,
  FaSearch,
  FaSignOutAlt,
  FaTrash,
  FaTimes,
  FaUsers,
  FaVideo,
  FaBell,
  FaPlus,
  FaCheck,
  FaTimesCircle,
} from "react-icons/fa";

import "./adminCourseManagement.css";

const initialCourses = [
  {
    id: 1,
    title: "Python for Data Science",
    trainer: "Dr. Anil Kumar",
    category: "Programming",
    duration: "8 Weeks",
    trainees: 128,
    resources: 18,
    status: "Active",
    submitted: "02 Sep 2026",
    description:
      "Learn Python programming, data handling, visualization and practical data science concepts.",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    trainer: "Priya Singh",
    category: "Web Development",
    duration: "6 Weeks",
    trainees: 96,
    resources: 15,
    status: "Active",
    submitted: "01 Sep 2026",
    description:
      "Build modern websites using HTML, CSS, JavaScript and responsive design principles.",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    trainer: "Dr. Neha Gupta",
    category: "Artificial Intelligence",
    duration: "8 Weeks",
    trainees: 76,
    resources: 21,
    status: "Pending",
    submitted: "05 Sep 2026",
    description:
      "Introduction to machine learning algorithms, data preparation and model evaluation.",
  },
  {
    id: 4,
    title: "Cloud Computing Essentials",
    trainer: "Amit Verma",
    category: "Cloud",
    duration: "5 Weeks",
    trainees: 62,
    resources: 12,
    status: "Pending",
    submitted: "04 Sep 2026",
    description:
      "Understand cloud concepts, deployment models, services and cloud security fundamentals.",
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    trainer: "Rahul Sharma",
    category: "Computer Science",
    duration: "10 Weeks",
    trainees: 84,
    resources: 26,
    status: "Active",
    submitted: "28 Aug 2026",
    description:
      "Master arrays, linked lists, trees, graphs, sorting, searching and algorithmic problem solving.",
  },
  {
    id: 6,
    title: "Cyber Security Awareness",
    trainer: "Kavita Sharma",
    category: "Security",
    duration: "4 Weeks",
    trainees: 72,
    resources: 10,
    status: "Draft",
    submitted: "30 Aug 2026",
    description:
      "Learn essential cybersecurity practices, threats, safe browsing and data protection.",
  },
  {
    id: 7,
    title: "Professional Communication",
    trainer: "Meera Kapoor",
    category: "Soft Skills",
    duration: "4 Weeks",
    trainees: 54,
    resources: 8,
    status: "Rejected",
    submitted: "27 Aug 2026",
    description:
      "Improve professional communication, presentation, teamwork and workplace interaction skills.",
  },
];

function AdminCourseManagement() {
  const [courses, setCourses] = useState(initialCourses);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(search) ||
        course.trainer.toLowerCase().includes(search) ||
        course.category.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" || course.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All" || course.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [courses, searchTerm, statusFilter, categoryFilter]);

  const totalCourses = courses.length;
  const activeCourses = courses.filter(
    (course) => course.status === "Active"
  ).length;

  const pendingCourses = courses.filter(
    (course) => course.status === "Pending"
  ).length;

  const totalResources = courses.reduce(
    (total, course) => total + course.resources,
    0
  );

  const approveCourse = (id) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === id ? { ...course, status: "Active" } : course
      )
    );
  };

  const rejectCourse = (id) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === id ? { ...course, status: "Rejected" } : course
      )
    );
  };

  const deleteCourse = (id) => {
    const course = courses.find((item) => item.id === id);

    const confirmed = window.confirm(
      `Are you sure you want to delete "${course?.title}"?`
    );

    if (!confirmed) return;

    setCourses((currentCourses) =>
      currentCourses.filter((course) => course.id !== id)
    );
  };

  const openDetails = (course) => {
    setSelectedCourse(course);
    setShowDetails(true);
    setShowResources(false);
  };

  const openResources = (course) => {
    setSelectedCourse(course);
    setShowResources(true);
    setShowDetails(false);
  };

  const closeModal = () => {
    setShowDetails(false);
    setShowResources(false);
    setSelectedCourse(null);
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(" ", "-");
  };

  return (
    <div className="admin-course-page">
      {/* SIDEBAR */}
      <aside className="admin-course-sidebar">
        <div className="admin-course-logo">
          <div className="admin-course-logo-icon">
            <span>✦</span>
          </div>

          <div className="admin-course-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <p>ADMIN PANEL</p>
          </div>
        </div>

        <nav className="admin-course-nav">
          <p className="admin-course-nav-title">MAIN MENU</p>

          <a href="#" className="admin-course-nav-item">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a href="#" className="admin-course-nav-item">
            <FaUsers />
            <span>User Management</span>
          </a>

          <a
            href="#"
            className="admin-course-nav-item active"
            onClick={(e) => e.preventDefault()}
          >
            <FaBookOpen />
            <span>Course Management</span>
          </a>

          <a href="#" className="admin-course-nav-item">
            <FaClipboardList />
            <span>Assessments</span>
          </a>

          <a href="#" className="admin-course-nav-item">
            <FaGraduationCap />
            <span>Certificates</span>
          </a>

          <p className="admin-course-nav-title second-title">
            MANAGEMENT
          </p>

          <a href="#" className="admin-course-nav-item">
            <FaChartBar />
            <span>Reports & Analytics</span>
          </a>

          <a href="#" className="admin-course-nav-item">
            <FaBell />
            <span>Announcements</span>
          </a>

          <a href="#" className="admin-course-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>
        </nav>

        <div className="admin-course-sidebar-bottom">
          <div className="admin-course-user-mini">
            <div className="admin-course-avatar">A</div>

            <div>
              <strong>Admin User</strong>
              <span>Administrator</span>
            </div>

            <FaChevronDown />
          </div>

          <button className="admin-course-logout">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-course-main">
        {/* TOPBAR */}
        <header className="admin-course-topbar">
          <div className="admin-course-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search courses, trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="admin-course-top-actions">
            <button className="admin-course-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="admin-course-top-profile">
              <div className="admin-course-top-avatar">A</div>

              <div>
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>

              <FaChevronDown />
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="admin-course-content">
          <div className="admin-course-heading">
            <div>
              <p className="admin-course-eyebrow">
                ADMINISTRATION
              </p>

              <h1>Course & Content Management</h1>

              <p>
                Review, approve and manage courses and learning resources.
              </p>
            </div>

            <button className="admin-course-add-btn">
              <FaPlus />
              Add New Course
            </button>
          </div>

          {/* STAT CARDS */}
          <div className="admin-course-stats">
            <div className="admin-course-stat-card">
              <div className="admin-course-stat-icon">
                <FaBookOpen />
              </div>

              <div>
                <span>Total Courses</span>
                <strong>{totalCourses}</strong>
                <small>Across all categories</small>
              </div>
            </div>

            <div className="admin-course-stat-card">
              <div className="admin-course-stat-icon">
                <FaCheckCircle />
              </div>

              <div>
                <span>Active Courses</span>
                <strong>{activeCourses}</strong>
                <small>Currently published</small>
              </div>
            </div>

            <div className="admin-course-stat-card pending-card">
              <div className="admin-course-stat-icon">
                <FaClipboardList />
              </div>

              <div>
                <span>Pending Review</span>
                <strong>{pendingCourses}</strong>
                <small>Need admin approval</small>
              </div>
            </div>

            <div className="admin-course-stat-card">
              <div className="admin-course-stat-icon">
                <FaFileAlt />
              </div>

              <div>
                <span>Learning Resources</span>
                <strong>{totalResources}</strong>
                <small>Uploaded materials</small>
              </div>
            </div>
          </div>

          {/* TABLE CARD */}
          <div className="admin-course-table-card">
            <div className="admin-course-table-header">
              <div>
                <h2>All Courses</h2>
                <p>
                  Review and manage courses submitted by trainers.
                </p>
              </div>

              <div className="admin-course-filters">
                <div className="admin-course-filter">
                  <FaFilter />

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Draft">Draft</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="admin-course-filter">
                  <FaBookOpen />

                  <select
                    value={categoryFilter}
                    onChange={(e) =>
                      setCategoryFilter(e.target.value)
                    }
                  >
                    <option value="All">All Categories</option>
                    <option value="Programming">Programming</option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Cloud">Cloud</option>
                    <option value="Computer Science">
                      Computer Science
                    </option>
                    <option value="Security">Security</option>
                    <option value="Soft Skills">Soft Skills</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="admin-course-result-info">
              <span>
                Showing <strong>{filteredCourses.length}</strong> of{" "}
                <strong>{courses.length}</strong> courses
              </span>
            </div>

            <div className="admin-course-table-wrapper">
              <table className="admin-course-table">
                <thead>
                  <tr>
                    <th>COURSE</th>
                    <th>TRAINER</th>
                    <th>CATEGORY</th>
                    <th>TRAINEES</th>
                    <th>RESOURCES</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <tr key={course.id}>
                        <td>
                          <div className="admin-course-course-info">
                            <div className="admin-course-course-icon">
                              <FaBookOpen />
                            </div>

                            <div>
                              <strong>{course.title}</strong>
                              <span>{course.duration}</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="admin-course-trainer">
                            <div className="admin-course-trainer-avatar">
                              {course.trainer.charAt(0)}
                            </div>

                            <span>{course.trainer}</span>
                          </div>
                        </td>

                        <td>
                          <span className="admin-course-category">
                            {course.category}
                          </span>
                        </td>

                        <td>
                          <div className="admin-course-trainees">
                            <FaUsers />
                            {course.trainees}
                          </div>
                        </td>

                        <td>
                          <button
                            className="admin-course-resource-btn"
                            onClick={() => openResources(course)}
                          >
                            <FaFileAlt />
                            {course.resources}
                          </button>
                        </td>

                        <td>
                          <span
                            className={`admin-course-status ${getStatusClass(
                              course.status
                            )}`}
                          >
                            {course.status === "Active" && (
                              <FaCheckCircle />
                            )}

                            {course.status === "Pending" && (
                              <FaClipboardList />
                            )}

                            {course.status === "Rejected" && (
                              <FaTimesCircle />
                            )}

                            {course.status === "Draft" && (
                              <FaEdit />
                            )}

                            {course.status}
                          </span>
                        </td>

                        <td>
                          <div className="admin-course-actions">
                            <button
                              className="course-action view"
                              title="View course"
                              onClick={() => openDetails(course)}
                            >
                              <FaEye />
                            </button>

                            <button
                              className="course-action edit"
                              title="Edit course"
                              onClick={() =>
                                alert(
                                  `Edit "${course.title}" - backend integration will be added later.`
                                )
                              }
                            >
                              <FaEdit />
                            </button>

                            {course.status === "Pending" && (
                              <>
                                <button
                                  className="course-action approve"
                                  title="Approve course"
                                  onClick={() =>
                                    approveCourse(course.id)
                                  }
                                >
                                  <FaCheck />
                                </button>

                                <button
                                  className="course-action reject"
                                  title="Reject course"
                                  onClick={() =>
                                    rejectCourse(course.id)
                                  }
                                >
                                  <FaTimes />
                                </button>
                              </>
                            )}

                            <button
                              className="course-action delete"
                              title="Delete course"
                              onClick={() => deleteCourse(course.id)}
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
                        <div className="admin-course-empty">
                          <FaSearch />
                          <h3>No courses found</h3>
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

      {/* COURSE DETAILS MODAL */}
      {showDetails && selectedCourse && (
        <div
          className="admin-course-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="admin-course-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-course-modal-header">
              <div>
                <p>COURSE DETAILS</p>
                <h2>{selectedCourse.title}</h2>
              </div>

              <button onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="admin-course-modal-body">
              <div className="admin-course-detail-grid">
                <div>
                  <span>Trainer</span>
                  <strong>{selectedCourse.trainer}</strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>{selectedCourse.category}</strong>
                </div>

                <div>
                  <span>Duration</span>
                  <strong>{selectedCourse.duration}</strong>
                </div>

                <div>
                  <span>Trainees</span>
                  <strong>{selectedCourse.trainees}</strong>
                </div>

                <div>
                  <span>Resources</span>
                  <strong>{selectedCourse.resources}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{selectedCourse.status}</strong>
                </div>
              </div>

              <div className="admin-course-description">
                <h3>Description</h3>
                <p>{selectedCourse.description}</p>
              </div>

              <div className="admin-course-submission">
                <span>Submitted on</span>
                <strong>{selectedCourse.submitted}</strong>
              </div>
            </div>

            <div className="admin-course-modal-footer">
              {selectedCourse.status === "Pending" && (
                <>
                  <button
                    className="modal-reject-btn"
                    onClick={() => {
                      rejectCourse(selectedCourse.id);
                      closeModal();
                    }}
                  >
                    <FaTimes />
                    Reject
                  </button>

                  <button
                    className="modal-approve-btn"
                    onClick={() => {
                      approveCourse(selectedCourse.id);
                      closeModal();
                    }}
                  >
                    <FaCheck />
                    Approve Course
                  </button>
                </>
              )}

              <button
                className="modal-close-btn"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESOURCES MODAL */}
      {showResources && selectedCourse && (
        <div
          className="admin-course-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="admin-course-modal resource-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-course-modal-header">
              <div>
                <p>LEARNING RESOURCES</p>
                <h2>{selectedCourse.title}</h2>
              </div>

              <button onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="admin-course-resource-list">
              <div className="admin-resource-item">
                <div className="admin-resource-icon">
                  <FaFileAlt />
                </div>

                <div>
                  <strong>Course Study Material.pdf</strong>
                  <span>PDF • 2.4 MB</span>
                </div>

                <FaEye />
              </div>

              <div className="admin-resource-item">
                <div className="admin-resource-icon">
                  <FaFileAlt />
                </div>

                <div>
                  <strong>Module Presentation.pptx</strong>
                  <span>Presentation • 4.8 MB</span>
                </div>

                <FaEye />
              </div>

              <div className="admin-resource-item">
                <div className="admin-resource-icon video-icon">
                  <FaVideo />
                </div>

                <div>
                  <strong>Introduction Lecture.mp4</strong>
                  <span>Video • 42 MB</span>
                </div>

                <FaEye />
              </div>

              <div className="admin-resource-more">
                + {Math.max(selectedCourse.resources - 3, 0)} more
                resources
              </div>
            </div>

            <div className="admin-course-modal-footer">
              <button
                className="modal-close-btn"
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

export default AdminCourseManagement;