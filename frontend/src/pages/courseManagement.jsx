import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaCertificate,
  FaUserShield,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaCheck,
  FaTimes,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./courseManagement.css";

function CourseManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Python for Data Science",
      trainer: "Dr. Anil Kumar",
      category: "Programming",
      trainees: 128,
      duration: "8 Weeks",
      status: "Active",
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      trainer: "Priya Singh",
      category: "Web Development",
      trainees: 96,
      duration: "6 Weeks",
      status: "Active",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      trainer: "Rahul Sharma",
      category: "Computer Science",
      trainees: 84,
      duration: "10 Weeks",
      status: "Active",
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      trainer: "Dr. Neha Gupta",
      category: "Artificial Intelligence",
      trainees: 0,
      duration: "8 Weeks",
      status: "Pending",
    },
    {
      id: 5,
      title: "Cloud Computing Essentials",
      trainer: "Amit Verma",
      category: "Cloud",
      trainees: 0,
      duration: "5 Weeks",
      status: "Pending",
    },
    {
      id: 6,
      title: "Cyber Security Awareness",
      trainer: "Kavita Sharma",
      category: "Security",
      trainees: 72,
      duration: "4 Weeks",
      status: "Inactive",
    },
  ]);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.trainer.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || course.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleApprove = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id
          ? { ...course, status: "Active" }
          : course
      )
    );
  };

  return (
    <div className="course-management-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="course-sidebar">

        <div className="course-logo">
          <div className="course-logo-icon">
            <span>✦</span>
          </div>

          <div className="course-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <nav className="course-nav">

          <p className="course-nav-title">MAIN MENU</p>

          <a className="course-nav-item">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a className="course-nav-item">
            <FaUsers />
            <span>User Management</span>
          </a>

          <a className="course-nav-item">
            <FaChalkboardTeacher />
            <span>Trainer Management</span>
          </a>

          <a className="course-nav-item active">
            <FaBookOpen />
            <span>Course Management</span>
          </a>

          <a className="course-nav-item">
            <FaClipboardCheck />
            <span>Assessments</span>
          </a>

          <a className="course-nav-item">
            <FaCertificate />
            <span>Certificates</span>
          </a>

          <p className="course-nav-title system-title">
            SYSTEM
          </p>

          <a className="course-nav-item">
            <FaUserShield />
            <span>Roles & Permissions</span>
          </a>

          <a className="course-nav-item">
            <FaChartLine />
            <span>Reports & Analytics</span>
          </a>

          <a className="course-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>

        </nav>

        <div className="course-sidebar-bottom">
          <a className="course-nav-item">
            <FaSignOutAlt />
            <span>Logout</span>
          </a>
        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="course-main">

        {/* TOPBAR */}

        <header className="course-topbar">

          <div className="course-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search courses, trainers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="course-topbar-right">

            <button className="course-notification">
              <FaBell />
              <span></span>
            </button>

            <div className="course-profile">

              <div className="course-avatar">
                A
              </div>

              <div>
                <strong>Admin User</strong>
                <small>Administrator</small>
              </div>

            </div>

          </div>

        </header>

        {/* CONTENT */}

        <section className="course-content">

          {/* PAGE HEADER */}

          <div className="course-page-header">

            <div>
              <p className="course-label">
                COURSE MANAGEMENT
              </p>

              <h1>Manage Courses</h1>

              <p>
                Create, review and manage training courses
                across the platform.
              </p>
            </div>

            <button
              className="add-course-btn"
              onClick={() => setShowModal(true)}
            >
              <FaPlus />
              Add New Course
            </button>

          </div>

          {/* STATISTICS */}

          <div className="course-stats">

            <div className="course-stat-card">
              <div className="course-stat-icon">
                <FaBookOpen />
              </div>
              <div>
                <strong>42</strong>
                <span>Total Courses</span>
              </div>
            </div>

            <div className="course-stat-card">
              <div className="course-stat-icon">
                <FaCheck />
              </div>
              <div>
                <strong>34</strong>
                <span>Active Courses</span>
              </div>
            </div>

            <div className="course-stat-card">
              <div className="course-stat-icon pending">
                <FaClipboardCheck />
              </div>
              <div>
                <strong>05</strong>
                <span>Pending Approval</span>
              </div>
            </div>

            <div className="course-stat-card">
              <div className="course-stat-icon trainees">
                <FaUsers />
              </div>
              <div>
                <strong>1,486</strong>
                <span>Total Enrollments</span>
              </div>
            </div>

          </div>

          {/* COURSE TABLE CARD */}

          <div className="course-table-card">

            <div className="course-table-header">

              <div>
                <h2>All Courses</h2>
                <p>
                  View and manage all courses on the platform
                </p>
              </div>

              <div className="course-filters">

                <div className="filter-box">
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
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

              </div>

            </div>

            {/* TABLE */}

            <div className="course-table-wrapper">

              <table className="course-table">

                <thead>
                  <tr>
                    <th>COURSE</th>
                    <th>TRAINER</th>
                    <th>CATEGORY</th>
                    <th>TRAINEES</th>
                    <th>DURATION</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredCourses.map((course) => (

                    <tr key={course.id}>

                      <td>

                        <div className="course-name-cell">

                          <div className="course-book-icon">
                            <FaBookOpen />
                          </div>

                          <div>
                            <strong>{course.title}</strong>
                            <span>
                              Course #{String(course.id).padStart(3, "0")}
                            </span>
                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="trainer-name">
                          {course.trainer}
                        </span>
                      </td>

                      <td>
                        <span className="category-badge">
                          {course.category}
                        </span>
                      </td>

                      <td>
                        <span className="trainee-count">
                          {course.trainees}
                        </span>
                      </td>

                      <td>
                        <span className="duration">
                          {course.duration}
                        </span>
                      </td>

                      <td>

                        <span
                          className={`course-status ${course.status.toLowerCase()}`}
                        >
                          {course.status}
                        </span>

                      </td>

                      <td>

                        <div className="course-actions">

                          <button
                            className="action-btn view"
                            title="View"
                          >
                            <FaEye />
                          </button>

                          <button
                            className="action-btn edit"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>

                          {course.status === "Pending" && (
                            <button
                              className="action-btn approve"
                              title="Approve"
                              onClick={() =>
                                handleApprove(course.id)
                              }
                            >
                              <FaCheck />
                            </button>
                          )}

                          <button
                            className="action-btn delete"
                            title="Delete"
                            onClick={() =>
                              handleDelete(course.id)
                            }
                          >
                            <FaTrash />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

              {filteredCourses.length === 0 && (
                <div className="no-courses">
                  No courses found.
                </div>
              )}

            </div>

            {/* PAGINATION */}

            <div className="course-pagination">

              <span>
                Showing 1–{filteredCourses.length} of 42 courses
              </span>

              <div className="pagination-buttons">

                <button>
                  <FaChevronLeft />
                </button>

                <button className="page-active">
                  1
                </button>

                <button>
                  2
                </button>

                <button>
                  3
                </button>

                <span>...</span>

                <button>
                  5
                </button>

                <button>
                  <FaChevronRight />
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= ADD COURSE MODAL ================= */}

      {showModal && (

        <div
          className="course-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="course-modal-header">

              <div>
                <h2>Add New Course</h2>
                <p>
                  Enter the basic details of the course.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>

            </div>

            <div className="course-form">

              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="Enter course name"
                />
              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Category</label>
                  <select>
                    <option>Select category</option>
                    <option>Programming</option>
                    <option>Web Development</option>
                    <option>Artificial Intelligence</option>
                    <option>Data Science</option>
                    <option>Cloud Computing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 8 Weeks"
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="4"
                  placeholder="Enter course description"
                ></textarea>
              </div>

              <div className="course-form-actions">

                <button
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="save-course-btn"
                  onClick={() => setShowModal(false)}
                >
                  <FaCheck />
                  Create Course
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default CourseManagement;