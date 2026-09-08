import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaChartLine,
  FaUsers,
  FaClipboardCheck,
  FaTrophy,
  FaEye,
  FaArrowUp,
  FaArrowDown,
  FaFilter,
} from "react-icons/fa";

import "./trainerResults.css";

function TrainerResults() {
  const [search, setSearch] = useState("");
  const [assessmentFilter, setAssessmentFilter] = useState("All Assessments");
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  const results = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      assessment: "Python Fundamentals",
      course: "Python for Data Science",
      score: 9,
      total: 10,
      percentage: 90,
      status: "Passed",
      submitted: "08 Sep 2026, 03:42 PM",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      assessment: "Python Fundamentals",
      course: "Python for Data Science",
      score: 8,
      total: 10,
      percentage: 80,
      status: "Passed",
      submitted: "08 Sep 2026, 03:35 PM",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      assessment: "Python Fundamentals",
      course: "Python for Data Science",
      score: 7,
      total: 10,
      percentage: 70,
      status: "Passed",
      submitted: "08 Sep 2026, 03:28 PM",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      email: "sneha@gmail.com",
      assessment: "Python Fundamentals",
      course: "Python for Data Science",
      score: 5,
      total: 10,
      percentage: 50,
      status: "Passed",
      submitted: "08 Sep 2026, 03:15 PM",
    },
    {
      id: 5,
      name: "Arjun Kumar",
      email: "arjun@gmail.com",
      assessment: "Python Fundamentals",
      course: "Python for Data Science",
      score: 4,
      total: 10,
      percentage: 40,
      status: "Failed",
      submitted: "08 Sep 2026, 03:02 PM",
    },
    {
      id: 6,
      name: "Neha Patel",
      email: "neha@gmail.com",
      assessment: "HTML & CSS Assessment",
      course: "Web Development Fundamentals",
      score: 18,
      total: 20,
      percentage: 90,
      status: "Passed",
      submitted: "07 Sep 2026, 11:10 AM",
    },
    {
      id: 7,
      name: "Vikash Singh",
      email: "vikash@gmail.com",
      assessment: "HTML & CSS Assessment",
      course: "Web Development Fundamentals",
      score: 14,
      total: 20,
      percentage: 70,
      status: "Passed",
      submitted: "07 Sep 2026, 10:58 AM",
    },
  ];

  const assessments = [
    "All Assessments",
    "Python Fundamentals",
    "HTML & CSS Assessment",
  ];

  const filteredResults = results.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase());

    const matchesAssessment =
      assessmentFilter === "All Assessments" ||
      item.assessment === assessmentFilter;

    return matchesSearch && matchesAssessment;
  });

  const totalSubmissions = results.length;

  const averageScore = Math.round(
    results.reduce((sum, item) => sum + item.percentage, 0) /
      results.length
  );

  const passed = results.filter(
    (item) => item.status === "Passed"
  ).length;

  const passRate = Math.round((passed / results.length) * 100);

  const highestScore = Math.max(
    ...results.map((item) => item.percentage)
  );

  return (
    <div className="trainer-results-page">

      {/* SIDEBAR */}
      <aside className="trainer-results-sidebar">

        <div className="tr-logo">
          <div className="tr-logo-icon">✦</div>

          <div className="tr-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="tr-nav">

          <div className="tr-nav-item">
            <span>⌂</span>
            Dashboard
          </div>

          <div className="tr-nav-item">
            <span>▣</span>
            My Courses
          </div>

          <div className="tr-nav-item">
            <span>＋</span>
            Create Course
          </div>

          <div className="tr-nav-item">
            <span>✓</span>
            Assessments
          </div>

          <div className="tr-nav-item">
            <span>👥</span>
            Trainees
          </div>

          <div className="tr-nav-item active">
            <span>📊</span>
            Performance
          </div>

          <div className="tr-nav-item">
            <span>🏆</span>
            Certificates
          </div>

          <div className="tr-nav-item">
            <span>👤</span>
            My Profile
          </div>

          <div className="tr-nav-item">
            <span>⚙</span>
            Settings
          </div>

          <div className="tr-nav-item">
            <span>?</span>
            Help
          </div>

        </nav>
      </aside>

      {/* MAIN */}
      <main className="trainer-results-main">

        {/* TOPBAR */}
        <header className="tr-topbar">

          <div className="tr-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search trainees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="tr-notification">
            <FaBell />
            <span>3</span>
          </button>

          <div className="tr-profile">
            <div className="tr-avatar">A</div>

            <div>
              <strong>User</strong>
              <small>Trainer</small>
            </div>
          </div>

        </header>

        {/* CONTENT */}
        <section className="tr-content">

          {/* HEADER */}
          <div className="tr-page-header">

            <div>
              <span className="tr-page-label">
                TRAINER PERFORMANCE
              </span>

              <h1>Results & Performance</h1>

              <p>
                Monitor trainee assessments and track learning
                performance.
              </p>
            </div>

            <button className="tr-filter-btn">
              <FaFilter />
              Export Results
            </button>

          </div>

          {/* STAT CARDS */}
          <div className="tr-stats-grid">

            <div className="tr-stat-card">

              <div className="tr-stat-icon">
                <FaClipboardCheck />
              </div>

              <div>
                <span>Total Submissions</span>
                <strong>{totalSubmissions}</strong>
                <small>
                  <FaArrowUp /> 12% this month
                </small>
              </div>

            </div>

            <div className="tr-stat-card">

              <div className="tr-stat-icon">
                <FaChartLine />
              </div>

              <div>
                <span>Average Score</span>
                <strong>{averageScore}%</strong>
                <small>
                  <FaArrowUp /> 5% this month
                </small>
              </div>

            </div>

            <div className="tr-stat-card">

              <div className="tr-stat-icon">
                <FaUsers />
              </div>

              <div>
                <span>Pass Rate</span>
                <strong>{passRate}%</strong>
                <small>
                  <FaArrowUp /> 8% this month
                </small>
              </div>

            </div>

            <div className="tr-stat-card">

              <div className="tr-stat-icon">
                <FaTrophy />
              </div>

              <div>
                <span>Highest Score</span>
                <strong>{highestScore}%</strong>
                <small>Top performer</small>
              </div>

            </div>

          </div>

          {/* PERFORMANCE OVERVIEW */}
          <div className="tr-overview-grid">

            <div className="tr-overview-card">

              <div className="tr-card-header">
                <div>
                  <h2>Assessment Performance</h2>
                  <p>Average performance by assessment</p>
                </div>
              </div>

              <div className="tr-performance-row">

                <div className="tr-performance-info">
                  <strong>Python Fundamentals</strong>
                  <span>32 submissions</span>
                </div>

                <div className="tr-progress-container">
                  <div
                    className="tr-progress-bar"
                    style={{ width: "78%" }}
                  />
                </div>

                <strong>78%</strong>

              </div>

              <div className="tr-performance-row">

                <div className="tr-performance-info">
                  <strong>HTML & CSS Assessment</strong>
                  <span>28 submissions</span>
                </div>

                <div className="tr-progress-container">
                  <div
                    className="tr-progress-bar"
                    style={{ width: "84%" }}
                  />
                </div>

                <strong>84%</strong>

              </div>

              <div className="tr-performance-row">

                <div className="tr-performance-info">
                  <strong>Arrays & Searching Quiz</strong>
                  <span>24 submissions</span>
                </div>

                <div className="tr-progress-container">
                  <div
                    className="tr-progress-bar"
                    style={{ width: "69%" }}
                  />
                </div>

                <strong>69%</strong>

              </div>

            </div>

            <div className="tr-overview-card">

              <div className="tr-card-header">
                <div>
                  <h2>Score Distribution</h2>
                  <p>Current assessment results</p>
                </div>
              </div>

              <div className="tr-distribution">

                <div className="tr-dist-item">
                  <span>90–100%</span>
                  <div>
                    <i style={{ width: "70%" }} />
                  </div>
                  <strong>8</strong>
                </div>

                <div className="tr-dist-item">
                  <span>70–89%</span>
                  <div>
                    <i style={{ width: "85%" }} />
                  </div>
                  <strong>14</strong>
                </div>

                <div className="tr-dist-item">
                  <span>50–69%</span>
                  <div>
                    <i style={{ width: "55%" }} />
                  </div>
                  <strong>9</strong>
                </div>

                <div className="tr-dist-item">
                  <span>Below 50%</span>
                  <div>
                    <i style={{ width: "30%" }} />
                  </div>
                  <strong>4</strong>
                </div>

              </div>

            </div>

          </div>

          {/* RESULTS TABLE */}
          <div className="tr-results-card">

            <div className="tr-results-header">

              <div>
                <h2>Trainee Results</h2>

                <p>
                  Detailed assessment submissions and scores
                </p>
              </div>

              <select
                value={assessmentFilter}
                onChange={(e) =>
                  setAssessmentFilter(e.target.value)
                }
              >
                {assessments.map((assessment) => (
                  <option key={assessment}>
                    {assessment}
                  </option>
                ))}
              </select>

            </div>

            <div className="tr-table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>Trainee</th>
                    <th>Assessment</th>
                    <th>Course</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Status</th>
                    <th>Submitted</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredResults.map((item) => (

                    <tr key={item.id}>

                      <td>
                        <div className="tr-trainee">

                          <div className="tr-small-avatar">
                            {item.name.charAt(0)}
                          </div>

                          <div>
                            <strong>{item.name}</strong>
                            <span>{item.email}</span>
                          </div>

                        </div>
                      </td>

                      <td>{item.assessment}</td>

                      <td>{item.course}</td>

                      <td>
                        <strong>
                          {item.score}/{item.total}
                        </strong>
                      </td>

                      <td>
                        <div className="tr-score">

                          <div className="tr-mini-progress">
                            <span
                              style={{
                                width: `${item.percentage}%`,
                              }}
                            />
                          </div>

                          <strong>
                            {item.percentage}%
                          </strong>

                        </div>
                      </td>

                      <td>
                        <span
                          className={`tr-status ${
                            item.status === "Passed"
                              ? "passed"
                              : "failed"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td>{item.submitted}</td>

                      <td>

                        <button
                          className="tr-view-btn"
                          onClick={() =>
                            setSelectedTrainee(item)
                          }
                        >
                          <FaEye />
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

              {filteredResults.length === 0 && (
                <div className="tr-empty">
                  No results found.
                </div>
              )}

            </div>

          </div>

        </section>

      </main>

      {/* TRAINEE DETAIL MODAL */}
      {selectedTrainee && (

        <div
          className="tr-modal-overlay"
          onClick={() => setSelectedTrainee(null)}
        >

          <div
            className="tr-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="tr-modal-close"
              onClick={() => setSelectedTrainee(null)}
            >
              ×
            </button>

            <div className="tr-modal-profile">

              <div className="tr-modal-avatar">
                {selectedTrainee.name.charAt(0)}
              </div>

              <div>
                <h2>{selectedTrainee.name}</h2>
                <p>{selectedTrainee.email}</p>
              </div>

            </div>

            <div className="tr-modal-info">

              <div>
                <span>Assessment</span>
                <strong>{selectedTrainee.assessment}</strong>
              </div>

              <div>
                <span>Course</span>
                <strong>{selectedTrainee.course}</strong>
              </div>

              <div>
                <span>Score</span>
                <strong>
                  {selectedTrainee.score}/
                  {selectedTrainee.total}
                </strong>
              </div>

              <div>
                <span>Percentage</span>
                <strong>
                  {selectedTrainee.percentage}%
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedTrainee.status}</strong>
              </div>

              <div>
                <span>Submitted</span>
                <strong>{selectedTrainee.submitted}</strong>
              </div>

            </div>

            <h3>Performance Summary</h3>

            <div className="tr-modal-progress">

              <div>
                <span>Overall Score</span>
                <strong>
                  {selectedTrainee.percentage}%
                </strong>
              </div>

              <div className="tr-large-progress">
                <span
                  style={{
                    width: `${selectedTrainee.percentage}%`,
                  }}
                />
              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default TrainerResults;