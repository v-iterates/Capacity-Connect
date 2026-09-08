import React, { useState } from "react";
import {
  FaHome,
  FaBookOpen,
  FaClipboardCheck,
  FaCertificate,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaFilter,
  FaClock,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaPlayCircle,
  FaGraduationCap,
} from "react-icons/fa";

import "./courseView.css";

function CourseView() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    {
      id: 1,
      title: "Python for Data Science",
      trainer: "Dr. Anil Kumar",
      category: "Programming",
      duration: "8 Weeks",
      trainees: 128,
      rating: 4.8,
      level: "Intermediate",
      lessons: 32,
      description:
        "Learn Python programming, data analysis, NumPy, Pandas and visualization techniques used in real-world data science.",
      progress: 0,
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      trainer: "Priya Singh",
      category: "Web Development",
      duration: "6 Weeks",
      trainees: 96,
      rating: 4.7,
      level: "Beginner",
      lessons: 28,
      description:
        "Build modern websites using HTML, CSS and JavaScript while learning responsive design and web development fundamentals.",
      progress: 0,
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      trainer: "Rahul Sharma",
      category: "Computer Science",
      duration: "10 Weeks",
      trainees: 84,
      rating: 4.9,
      level: "Intermediate",
      lessons: 40,
      description:
        "Master arrays, linked lists, stacks, queues, trees, graphs and algorithms with practical problem-solving.",
      progress: 35,
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      trainer: "Dr. Neha Gupta",
      category: "Artificial Intelligence",
      duration: "8 Weeks",
      trainees: 76,
      rating: 4.8,
      level: "Beginner",
      lessons: 30,
      description:
        "Understand machine learning concepts, supervised learning, regression, classification and model evaluation.",
      progress: 0,
    },
    {
      id: 5,
      title: "Cloud Computing Essentials",
      trainer: "Amit Verma",
      category: "Cloud",
      duration: "5 Weeks",
      trainees: 62,
      rating: 4.6,
      level: "Beginner",
      lessons: 24,
      description:
        "Learn the fundamentals of cloud computing, virtualization, cloud services, deployment and security.",
      progress: 0,
    },
    {
      id: 6,
      title: "Cyber Security Awareness",
      trainer: "Kavita Sharma",
      category: "Security",
      duration: "4 Weeks",
      trainees: 72,
      rating: 4.7,
      level: "Beginner",
      lessons: 20,
      description:
        "Learn cybersecurity fundamentals, online safety, password security, phishing prevention and data protection.",
      progress: 0,
    },
  ];

  const categories = [
    "All",
    "Programming",
    "Web Development",
    "Computer Science",
    "Artificial Intelligence",
    "Cloud",
    "Security",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.trainer.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  return (
    <div className="course-view-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="course-view-sidebar">

        <div className="course-view-logo">

          <div className="course-view-logo-icon">
            <span>✦</span>
          </div>

          <div className="course-view-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <span>TRAINEE PORTAL</span>
          </div>

        </div>

        <nav className="course-view-nav">

          <p className="course-view-nav-title">
            MAIN MENU
          </p>

          <a className="course-view-nav-item">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a className="course-view-nav-item active">
            <FaBookOpen />
            <span>Courses</span>
          </a>

          <a className="course-view-nav-item">
            <FaClipboardCheck />
            <span>Assessments</span>
          </a>

          <a className="course-view-nav-item">
            <FaChartLine />
            <span>My Progress</span>
          </a>

          <a className="course-view-nav-item">
            <FaCertificate />
            <span>Certificates</span>
          </a>

          <p className="course-view-nav-title system-title">
            ACCOUNT
          </p>

          <a className="course-view-nav-item">
            <FaUser />
            <span>My Profile</span>
          </a>

          <a className="course-view-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>

        </nav>

        <div className="course-view-sidebar-bottom">

          <a className="course-view-nav-item">
            <FaSignOutAlt />
            <span>Logout</span>
          </a>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="course-view-main">

        {/* TOPBAR */}

        <header className="course-view-topbar">

          <div className="course-view-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search courses, trainers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="course-view-topbar-right">

            <button className="course-view-notification">
              <FaBell />
              <span></span>
            </button>

            <div className="course-view-profile">

              <div className="course-view-avatar">
                A
              </div>

              <div>
                <strong>User</strong>
                <small>Trainee</small>
              </div>

            </div>

          </div>

        </header>

        {/* CONTENT */}

        <section className="course-view-content">

          {/* PAGE HEADER */}

          <div className="course-view-header">

            <div>

              <p className="course-view-label">
                LEARNING PORTAL
              </p>

              <h1>Explore Courses</h1>

              <p>
                Discover courses, develop new skills and
                continue your learning journey.
              </p>

            </div>

            <div className="course-view-learning-badge">
              <FaGraduationCap />
              <div>
                <strong>Keep Learning</strong>
                <span>Build your skills</span>
              </div>
            </div>

          </div>

          {/* FILTER BAR */}

          <div className="course-filter-bar">

            <div className="course-filter-title">
              <FaFilter />
              <span>Filter by Category</span>
            </div>

            <div className="course-category-buttons">

              {categories.map((item) => (

                <button
                  key={item}
                  className={
                    category === item
                      ? "category-active"
                      : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* COURSE HEADER */}

          <div className="course-results-header">

            <div>
              <h2>Available Courses</h2>
              <span>
                {filteredCourses.length} courses available
              </span>
            </div>

            <select
              className="course-sort"
              defaultValue="popular"
            >
              <option value="popular">
                Most Popular
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="newest">
                Newest
              </option>
            </select>

          </div>

          {/* COURSE GRID */}

          <div className="course-grid">

            {filteredCourses.map((course) => (

              <div
                className="course-card"
                key={course.id}
              >

                {/* COURSE IMAGE AREA */}

                <div className="course-card-top">

                  <div className="course-card-icon">
                    <FaBookOpen />
                  </div>

                  <span className="course-level">
                    {course.level}
                  </span>

                </div>

                {/* COURSE DETAILS */}

                <div className="course-card-body">

                  <span className="course-category">
                    {course.category}
                  </span>

                  <h3>
                    {course.title}
                  </h3>

                  <p className="course-description">
                    {course.description}
                  </p>

                  {/* TRAINER */}

                  <div className="course-trainer">

                    <div className="trainer-avatar">
                      {course.trainer.charAt(0)}
                    </div>

                    <div>
                      <span>Trainer</span>
                      <strong>
                        {course.trainer}
                      </strong>
                    </div>

                  </div>

                  {/* COURSE INFO */}

                  <div className="course-info">

                    <span>
                      <FaClock />
                      {course.duration}
                    </span>

                    <span>
                      <FaUsers />
                      {course.trainees}
                    </span>

                    <span className="course-rating">
                      <FaStar />
                      {course.rating}
                    </span>

                  </div>

                  {/* PROGRESS */}

                  {course.progress > 0 && (

                    <div className="course-progress">

                      <div className="progress-header">
                        <span>Your Progress</span>
                        <strong>
                          {course.progress}%
                        </strong>
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

                  )}

                  {/* ACTIONS */}

                  <div className="course-card-actions">

                    <button
                      className="view-course-btn"
                      onClick={() =>
                        setSelectedCourse(course)
                      }
                    >
                      View Details
                      <FaArrowRight />
                    </button>

                    <button
                      className={
                        isEnrolled(course.id)
                          ? "enrolled-btn"
                          : "enroll-btn"
                      }
                      onClick={() =>
                        handleEnroll(course.id)
                      }
                      disabled={isEnrolled(course.id)}
                    >
                      {isEnrolled(course.id) ? (
                        <>
                          <FaCheckCircle />
                          Enrolled
                        </>
                      ) : (
                        "Enroll Now"
                      )}
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* EMPTY STATE */}

          {filteredCourses.length === 0 && (

            <div className="course-empty-state">

              <FaBookOpen />

              <h3>No courses found</h3>

              <p>
                Try changing your search or category filter.
              </p>

            </div>

          )}

        </section>

      </main>

      {/* ================= COURSE DETAILS MODAL ================= */}

      {selectedCourse && (

        <div
          className="course-details-overlay"
          onClick={() => setSelectedCourse(null)}
        >

          <div
            className="course-details-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="course-modal-close"
              onClick={() => setSelectedCourse(null)}
            >
              <FaTimes />
            </button>

            <div className="course-modal-icon">
              <FaBookOpen />
            </div>

            <span className="course-modal-category">
              {selectedCourse.category}
            </span>

            <h2>
              {selectedCourse.title}
            </h2>

            <p className="course-modal-description">
              {selectedCourse.description}
            </p>

            <div className="course-modal-trainer">

              <div className="trainer-avatar large">
                {selectedCourse.trainer.charAt(0)}
              </div>

              <div>
                <span>Course Trainer</span>
                <strong>
                  {selectedCourse.trainer}
                </strong>
              </div>

            </div>

            <div className="course-modal-info">

              <div>
                <FaClock />
                <span>
                  <small>Duration</small>
                  <strong>
                    {selectedCourse.duration}
                  </strong>
                </span>
              </div>

              <div>
                <FaPlayCircle />
                <span>
                  <small>Lessons</small>
                  <strong>
                    {selectedCourse.lessons}
                  </strong>
                </span>
              </div>

              <div>
                <FaUsers />
                <span>
                  <small>Trainees</small>
                  <strong>
                    {selectedCourse.trainees}
                  </strong>
                </span>
              </div>

              <div>
                <FaStar />
                <span>
                  <small>Rating</small>
                  <strong>
                    {selectedCourse.rating}
                  </strong>
                </span>
              </div>

            </div>

            <button
              className={
                isEnrolled(selectedCourse.id)
                  ? "modal-enrolled-btn"
                  : "modal-enroll-btn"
              }
              onClick={() =>
                handleEnroll(selectedCourse.id)
              }
              disabled={isEnrolled(selectedCourse.id)}
            >
              {isEnrolled(selectedCourse.id) ? (
                <>
                  <FaCheckCircle />
                  You are enrolled
                </>
              ) : (
                <>
                  Enroll in this Course
                  <FaArrowRight />
                </>
              )}
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default CourseView;