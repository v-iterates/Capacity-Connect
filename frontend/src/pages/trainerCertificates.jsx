import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaTrophy,
  FaCertificate,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaDownload,
  FaTimes,
  FaBan,
  FaPlus,
  FaBookOpen,
} from "react-icons/fa";
import "./trainerCertificates.css";

const initialCertificates = [
  {
    id: "CC-PY-001",
    trainee: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    course: "Python for Data Science",
    score: 91,
    issueDate: "06 Sep 2026",
    status: "Issued",
  },
  {
    id: "CC-PY-002",
    trainee: "Priya Singh",
    email: "priya.singh@example.com",
    course: "Python for Data Science",
    score: 84,
    issueDate: "06 Sep 2026",
    status: "Issued",
  },
  {
    id: "CC-WD-001",
    trainee: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    course: "Web Development Fundamentals",
    score: 94,
    issueDate: "05 Sep 2026",
    status: "Issued",
  },
  {
    id: "CC-WD-002",
    trainee: "Arjun Kumar",
    email: "arjun.kumar@example.com",
    course: "Web Development Fundamentals",
    score: 58,
    issueDate: "Pending",
    status: "Pending",
  },
  {
    id: "CC-DS-001",
    trainee: "Neha Patel",
    email: "neha.patel@example.com",
    course: "Data Structures & Algorithms",
    score: 79,
    issueDate: "04 Sep 2026",
    status: "Issued",
  },
  {
    id: "CC-DS-002",
    trainee: "Vikash Singh",
    email: "vikash.singh@example.com",
    course: "Data Structures & Algorithms",
    score: 88,
    issueDate: "03 Sep 2026",
    status: "Issued",
  },
  {
    id: "CC-PY-003",
    trainee: "Aman Verma",
    email: "aman.verma@example.com",
    course: "Python for Data Science",
    score: 62,
    issueDate: "Pending",
    status: "Pending",
  },
];

function TrainerCertificates() {
  const [certificates, setCertificates] = useState(initialCertificates);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [message, setMessage] = useState("");

  const filteredCertificates = useMemo(() => {
    return certificates.filter((certificate) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        certificate.trainee.toLowerCase().includes(searchText) ||
        certificate.email.toLowerCase().includes(searchText) ||
        certificate.course.toLowerCase().includes(searchText) ||
        certificate.id.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All Status" ||
        certificate.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [certificates, search, statusFilter]);

  const issuedCount = certificates.filter(
    (certificate) => certificate.status === "Issued"
  ).length;

  const pendingCount = certificates.filter(
    (certificate) => certificate.status === "Pending"
  ).length;

  const revokedCount = certificates.filter(
    (certificate) => certificate.status === "Revoked"
  ).length;

  const averageScore = Math.round(
    certificates.reduce(
      (sum, certificate) => sum + certificate.score,
      0
    ) / certificates.length
  );

  const issueCertificate = (id) => {
    setCertificates((prev) =>
      prev.map((certificate) =>
        certificate.id === id
          ? {
              ...certificate,
              status: "Issued",
              issueDate: "08 Sep 2026",
            }
          : certificate
      )
    );

    setMessage("Certificate issued successfully.");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const revokeCertificate = (id) => {
    setCertificates((prev) =>
      prev.map((certificate) =>
        certificate.id === id
          ? {
              ...certificate,
              status: "Revoked",
            }
          : certificate
      )
    );

    setMessage("Certificate revoked successfully.");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleDownload = (certificate) => {
    alert(
      `Downloading certificate ${certificate.id} for ${certificate.trainee}`
    );
  };

  return (
    <div className="trainer-cert-page">

      {/* SIDEBAR */}
      <aside className="tcert-sidebar">

        <div className="tcert-logo">
          <div className="tcert-logo-icon">
            <span>✦</span>
          </div>

          <div className="tcert-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="tcert-nav">

          <div className="tcert-nav-section">
            <p>MAIN MENU</p>

            <div className="tcert-nav-item">
              <span>▣</span>
              Dashboard
            </div>

            <div className="tcert-nav-item">
              <span>▤</span>
              My Courses
            </div>

            <div className="tcert-nav-item">
              <span>＋</span>
              Create Course
            </div>

            <div className="tcert-nav-item">
              <span>☑</span>
              Assessments
            </div>

            <div className="tcert-nav-item">
              <FaUsers />
              Trainees
            </div>

            <div className="tcert-nav-item">
              <span>◈</span>
              Performance
            </div>

            <div className="tcert-nav-item active">
              <FaTrophy />
              Certificates
            </div>
          </div>

          <div className="tcert-nav-section tcert-bottom-menu">
            <p>ACCOUNT</p>

            <div className="tcert-nav-item">
              <span>◉</span>
              My Profile
            </div>

            <div className="tcert-nav-item">
              <span>⚙</span>
              Settings
            </div>

            <div className="tcert-nav-item">
              <span>?</span>
              Help
            </div>
          </div>

        </nav>
      </aside>

      {/* MAIN */}
      <main className="tcert-main">

        {/* TOPBAR */}
        <header className="tcert-topbar">

          <div className="tcert-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search certificates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="tcert-top-actions">

            <button className="tcert-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="tcert-profile">
              <div className="tcert-avatar">A</div>

              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>
            </div>

          </div>

        </header>

        {/* CONTENT */}
        <section className="tcert-content">

          <div className="tcert-heading">

            <div>
              <span className="tcert-eyebrow">
                TRAINER PANEL
              </span>

              <h1>Certificate Management</h1>

              <p>
                Manage trainee certificates and recognize learning achievements.
              </p>
            </div>

            <button className="tcert-generate-btn">
              <FaPlus />
              Generate Certificate
            </button>

          </div>

          {/* STATS */}
          <div className="tcert-stats">

            <div className="tcert-stat-card">

              <div className="tcert-stat-icon">
                <FaCertificate />
              </div>

              <div>
                <span>Total Certificates</span>
                <strong>{certificates.length}</strong>
                <small>All trainee certificates</small>
              </div>

            </div>

            <div className="tcert-stat-card">

              <div className="tcert-stat-icon">
                <FaCheckCircle />
              </div>

              <div>
                <span>Issued</span>
                <strong>{issuedCount}</strong>
                <small>Successfully issued</small>
              </div>

            </div>

            <div className="tcert-stat-card">

              <div className="tcert-stat-icon pending">
                <FaClock />
              </div>

              <div>
                <span>Pending</span>
                <strong>{pendingCount}</strong>
                <small>Waiting for approval</small>
              </div>

            </div>

            <div className="tcert-stat-card">

              <div className="tcert-stat-icon">
                <FaTrophy />
              </div>

              <div>
                <span>Average Score</span>
                <strong>{averageScore}%</strong>
                <small>Across certified trainees</small>
              </div>

            </div>

          </div>

          {/* TABLE */}
          <div className="tcert-table-card">

            <div className="tcert-table-header">

              <div>
                <h2>Trainee Certificates</h2>
                <p>
                  {filteredCertificates.length} certificates found
                </p>
              </div>

              <div className="tcert-filter">

                <FaCertificate />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Issued</option>
                  <option>Pending</option>
                  <option>Revoked</option>
                </select>

              </div>

            </div>

            <div className="tcert-table-wrapper">

              <table className="tcert-table">

                <thead>
                  <tr>
                    <th>CERTIFICATE</th>
                    <th>TRAINEE</th>
                    <th>COURSE</th>
                    <th>SCORE</th>
                    <th>ISSUE DATE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredCertificates.length > 0 ? (
                    filteredCertificates.map((certificate) => (

                      <tr key={certificate.id}>

                        <td>
                          <div className="tcert-id">
                            <div className="tcert-small-icon">
                              <FaCertificate />
                            </div>

                            <div>
                              <strong>
                                {certificate.id}
                              </strong>

                              <span>
                                Capacity Connect
                              </span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="tcert-trainee">

                            <div className="tcert-trainee-avatar">
                              {certificate.trainee.charAt(0)}
                            </div>

                            <div>
                              <strong>
                                {certificate.trainee}
                              </strong>

                              <span>
                                {certificate.email}
                              </span>
                            </div>

                          </div>
                        </td>

                        <td>
                          <span className="tcert-course">
                            {certificate.course}
                          </span>
                        </td>

                        <td>
                          <strong className="tcert-score">
                            {certificate.score}%
                          </strong>
                        </td>

                        <td>
                          <span className="tcert-date">
                            {certificate.issueDate}
                          </span>
                        </td>

                        <td>
                          <span
                            className={`tcert-status ${certificate.status.toLowerCase()}`}
                          >
                            {certificate.status}
                          </span>
                        </td>

                        <td>

                          <div className="tcert-actions">

                            <button
                              className="tcert-view-btn"
                              onClick={() =>
                                setSelectedCertificate(certificate)
                              }
                              title="View"
                            >
                              <FaEye />
                            </button>

                            {certificate.status === "Pending" && (
                              <button
                                className="tcert-issue-btn"
                                onClick={() =>
                                  issueCertificate(certificate.id)
                                }
                                title="Issue certificate"
                              >
                                <FaCheckCircle />
                              </button>
                            )}

                            {certificate.status === "Issued" && (
                              <button
                                className="tcert-revoke-btn"
                                onClick={() =>
                                  revokeCertificate(certificate.id)
                                }
                                title="Revoke certificate"
                              >
                                <FaBan />
                              </button>
                            )}

                          </div>

                        </td>

                      </tr>

                    ))
                  ) : (

                    <tr>
                      <td colSpan="7" className="tcert-empty">
                        No certificates found.
                      </td>
                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

          {/* INFO CARDS */}
          <div className="tcert-bottom-cards">

            <div className="tcert-info-card">

              <div className="tcert-info-icon">
                <FaBookOpen />
              </div>

              <div>
                <h3>Certificate Eligibility</h3>
                <p>
                  Trainees completing their course and meeting the required
                  assessment score can receive a certificate.
                </p>
              </div>

            </div>

            <div className="tcert-info-card">

              <div className="tcert-info-icon">
                <FaTrophy />
              </div>

              <div>
                <h3>Recognize Achievement</h3>
                <p>
                  Certificates help trainees showcase their completed
                  training and professional skills.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* SUCCESS MESSAGE */}
      {message && (
        <div className="tcert-toast">
          <FaCheckCircle />
          {message}
        </div>
      )}

      {/* DETAILS MODAL */}
      {selectedCertificate && (

        <div
          className="tcert-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="tcert-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="tcert-close"
              onClick={() => setSelectedCertificate(null)}
            >
              <FaTimes />
            </button>

            <div className="tcert-modal-icon">
              <FaCertificate />
            </div>

            <h2>Certificate Details</h2>

            <p className="tcert-modal-subtitle">
              Capacity Connect Training Certificate
            </p>

            <div className="tcert-modal-divider"></div>

            <div className="tcert-detail-grid">

              <div>
                <span>Certificate ID</span>
                <strong>
                  {selectedCertificate.id}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedCertificate.status}
                </strong>
              </div>

              <div>
                <span>Trainee</span>
                <strong>
                  {selectedCertificate.trainee}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {selectedCertificate.email}
                </strong>
              </div>

              <div>
                <span>Course</span>
                <strong>
                  {selectedCertificate.course}
                </strong>
              </div>

              <div>
                <span>Assessment Score</span>
                <strong>
                  {selectedCertificate.score}%
                </strong>
              </div>

              <div>
                <span>Issue Date</span>
                <strong>
                  {selectedCertificate.issueDate}
                </strong>
              </div>

              <div>
                <span>Issued By</span>
                <strong>
                  Trainer - Capacity Connect
                </strong>
              </div>

            </div>

            <div className="tcert-modal-actions">

              {selectedCertificate.status === "Pending" && (
                <button
                  className="tcert-modal-issue"
                  onClick={() => {
                    issueCertificate(selectedCertificate.id);
                    setSelectedCertificate(null);
                  }}
                >
                  <FaCheckCircle />
                  Issue Certificate
                </button>
              )}

              {selectedCertificate.status === "Issued" && (
                <button
                  className="tcert-modal-download"
                  onClick={() =>
                    handleDownload(selectedCertificate)
                  }
                >
                  <FaDownload />
                  Download Certificate
                </button>
              )}

              {selectedCertificate.status === "Issued" && (
                <button
                  className="tcert-modal-revoke"
                  onClick={() => {
                    revokeCertificate(selectedCertificate.id);
                    setSelectedCertificate(null);
                  }}
                >
                  <FaBan />
                  Revoke
                </button>
              )}

              <button
                className="tcert-modal-close-btn"
                onClick={() => setSelectedCertificate(null)}
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

export default TrainerCertificates;