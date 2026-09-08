import React, { useMemo, useState } from "react";
import {
  FaAward,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaEye,
  FaDownload,
  FaTrash,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";
import "./adminCertificateManagement.css";

const initialCertificates = [
  {
    id: 1,
    certificateId: "CC-2026-00124",
    trainee: "Aditi Kumari",
    email: "aditi@example.com",
    course: "Python for Data Science",
    trainer: "Dr. Anil Kumar",
    issueDate: "02 Sep 2026",
    score: 92,
    status: "Issued",
  },
  {
    id: 2,
    certificateId: "CC-2026-00123",
    trainee: "Rahul Sharma",
    email: "rahul@example.com",
    course: "Web Development Fundamentals",
    trainer: "Priya Singh",
    issueDate: "01 Sep 2026",
    score: 88,
    status: "Issued",
  },
  {
    id: 3,
    certificateId: "CC-2026-00122",
    trainee: "Neha Patel",
    email: "neha@example.com",
    course: "Data Structures & Algorithms",
    trainer: "Rahul Sharma",
    issueDate: "30 Aug 2026",
    score: 76,
    status: "Issued",
  },
  {
    id: 4,
    certificateId: "CC-2026-00121",
    trainee: "Aman Verma",
    email: "aman@example.com",
    course: "Machine Learning Basics",
    trainer: "Dr. Neha Gupta",
    issueDate: "28 Aug 2026",
    score: 81,
    status: "Pending",
  },
  {
    id: 5,
    certificateId: "CC-2026-00120",
    trainee: "Sneha Gupta",
    email: "sneha@example.com",
    course: "Cyber Security Awareness",
    trainer: "Kavita Sharma",
    issueDate: "26 Aug 2026",
    score: 69,
    status: "Pending",
  },
  {
    id: 6,
    certificateId: "CC-2026-00119",
    trainee: "Vikash Singh",
    email: "vikash@example.com",
    course: "Cloud Computing Essentials",
    trainer: "Amit Verma",
    issueDate: "24 Aug 2026",
    score: 91,
    status: "Issued",
  },
  {
    id: 7,
    certificateId: "CC-2026-00118",
    trainee: "Arjun Kumar",
    email: "arjun@example.com",
    course: "Professional Communication",
    trainer: "Meera Kapoor",
    issueDate: "22 Aug 2026",
    score: 48,
    status: "Revoked",
  },
];

function AdminCertificateManagement() {
  const [certificates, setCertificates] = useState(initialCertificates);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [message, setMessage] = useState("");

  const filteredCertificates = useMemo(() => {
    return certificates.filter((certificate) => {
      const searchMatch =
        certificate.trainee.toLowerCase().includes(search.toLowerCase()) ||
        certificate.email.toLowerCase().includes(search.toLowerCase()) ||
        certificate.certificateId
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        certificate.course.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" || certificate.status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [certificates, search, statusFilter]);

  const totalCertificates = certificates.length;
  const issuedCertificates = certificates.filter(
    (item) => item.status === "Issued"
  ).length;
  const pendingCertificates = certificates.filter(
    (item) => item.status === "Pending"
  ).length;
  const revokedCertificates = certificates.filter(
    (item) => item.status === "Revoked"
  ).length;

  const approveCertificate = (id) => {
    setCertificates((prev) =>
      prev.map((certificate) =>
        certificate.id === id
          ? { ...certificate, status: "Issued" }
          : certificate
      )
    );

    setMessage("Certificate approved and issued successfully.");
    setTimeout(() => setMessage(""), 2500);
  };

  const revokeCertificate = (id) => {
    setCertificates((prev) =>
      prev.map((certificate) =>
        certificate.id === id
          ? { ...certificate, status: "Revoked" }
          : certificate
      )
    );

    setMessage("Certificate has been revoked.");
    setTimeout(() => setMessage(""), 2500);
  };

  const deleteCertificate = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this certificate?"
    );

    if (!confirmed) return;

    setCertificates((prev) =>
      prev.filter((certificate) => certificate.id !== id)
    );

    setMessage("Certificate deleted successfully.");
    setSelectedCertificate(null);

    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div className="certificate-admin-page">
      {/* Sidebar */}
      <aside className="certificate-sidebar">
        <div className="certificate-logo">
          <div className="certificate-logo-icon">
            <span>✦</span>
          </div>

          <div className="certificate-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="certificate-nav">
          <p className="certificate-nav-title">MAIN</p>

          <a href="#" className="certificate-nav-item">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="#" className="certificate-nav-item">
            <span>♙</span>
            User Management
          </a>

          <a href="#" className="certificate-nav-item">
            <span>▣</span>
            Course Management
          </a>

          <a href="#" className="certificate-nav-item">
            <span>✓</span>
            Assessment Management
          </a>

          <a
            href="#"
            className="certificate-nav-item certificate-nav-active"
          >
            <FaAward />
            Certificate Management
          </a>

          <p className="certificate-nav-title certificate-nav-space">
            SYSTEM
          </p>

          <a href="#" className="certificate-nav-item">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="certificate-nav-item">
            <span>?</span>
            Help & Support
          </a>
        </nav>

        <div className="certificate-admin-profile">
          <div className="certificate-admin-avatar">A</div>

          <div>
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="certificate-main">
        {/* Topbar */}
        <header className="certificate-topbar">
          <div className="certificate-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search certificates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="certificate-top-actions">
            <button className="certificate-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="certificate-user-info">
              <div className="certificate-user-avatar">A</div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <section className="certificate-content">
          {/* Page Header */}
          <div className="certificate-page-header">
            <div>
              <span className="certificate-eyebrow">
                ADMINISTRATION
              </span>

              <h1>Certificate Management</h1>

              <p>
                Review, issue and manage trainee course certificates.
              </p>
            </div>

            <button className="certificate-generate-btn">
              <FaCertificate />
              Generate Certificate
            </button>
          </div>

          {/* Message */}
          {message && (
            <div className="certificate-success-message">
              <FaCheckCircle />
              {message}
            </div>
          )}

          {/* Stats */}
          <div className="certificate-stats-grid">
            <div className="certificate-stat-card">
              <div className="certificate-stat-icon">
                <FaCertificate />
              </div>

              <div>
                <span>Total Certificates</span>
                <strong>{totalCertificates}</strong>
                <small>All certificates</small>
              </div>
            </div>

            <div className="certificate-stat-card">
              <div className="certificate-stat-icon issued-icon">
                <FaCheckCircle />
              </div>

              <div>
                <span>Issued</span>
                <strong>{issuedCertificates}</strong>
                <small>Successfully issued</small>
              </div>
            </div>

            <div className="certificate-stat-card">
              <div className="certificate-stat-icon pending-icon">
                <FaClock />
              </div>

              <div>
                <span>Pending</span>
                <strong>{pendingCertificates}</strong>
                <small>Awaiting approval</small>
              </div>
            </div>

            <div className="certificate-stat-card">
              <div className="certificate-stat-icon revoked-icon">
                <FaTimesCircle />
              </div>

              <div>
                <span>Revoked</span>
                <strong>{revokedCertificates}</strong>
                <small>Certificates revoked</small>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="certificate-toolbar">
            <div className="certificate-toolbar-title">
              <FaUsers />
              <div>
                <h2>All Certificates</h2>
                <span>
                  Showing {filteredCertificates.length} certificates
                </span>
              </div>
            </div>

            <div className="certificate-filters">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Issued">Issued</option>
                <option value="Pending">Pending</option>
                <option value="Revoked">Revoked</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="certificate-table-card">
            <div className="certificate-table-wrapper">
              <table className="certificate-table">
                <thead>
                  <tr>
                    <th>Certificate ID</th>
                    <th>Trainee</th>
                    <th>Course</th>
                    <th>Trainer</th>
                    <th>Issue Date</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCertificates.length > 0 ? (
                    filteredCertificates.map((certificate) => (
                      <tr key={certificate.id}>
                        <td>
                          <span className="certificate-id">
                            {certificate.certificateId}
                          </span>
                        </td>

                        <td>
                          <div className="certificate-trainee">
                            <div className="certificate-trainee-avatar">
                              {certificate.trainee.charAt(0)}
                            </div>

                            <div>
                              <strong>{certificate.trainee}</strong>
                              <span>{certificate.email}</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span className="certificate-course">
                            {certificate.course}
                          </span>
                        </td>

                        <td>{certificate.trainer}</td>

                        <td>{certificate.issueDate}</td>

                        <td>
                          <span className="certificate-score">
                            {certificate.score}%
                          </span>
                        </td>

                        <td>
                          <span
                            className={`certificate-status ${certificate.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {certificate.status}
                          </span>
                        </td>

                        <td>
                          <div className="certificate-actions">
                            <button
                              className="cert-view-btn"
                              title="View"
                              onClick={() =>
                                setSelectedCertificate(certificate)
                              }
                            >
                              <FaEye />
                            </button>

                            {certificate.status === "Pending" && (
                              <button
                                className="cert-approve-btn"
                                title="Approve"
                                onClick={() =>
                                  approveCertificate(certificate.id)
                                }
                              >
                                <FaCheckCircle />
                              </button>
                            )}

                            {certificate.status === "Issued" && (
                              <button
                                className="cert-download-btn"
                                title="Download"
                                onClick={() => {
                                  setMessage(
                                    "Certificate download is available after backend integration."
                                  );

                                  setTimeout(
                                    () => setMessage(""),
                                    2500
                                  );
                                }}
                              >
                                <FaDownload />
                              </button>
                            )}

                            {certificate.status !== "Revoked" && (
                              <button
                                className="cert-revoke-btn"
                                title="Revoke"
                                onClick={() =>
                                  revokeCertificate(certificate.id)
                                }
                              >
                                <FaTimesCircle />
                              </button>
                            )}

                            <button
                              className="cert-delete-btn"
                              title="Delete"
                              onClick={() =>
                                deleteCertificate(certificate.id)
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
                      <td colSpan="8">
                        <div className="certificate-empty">
                          <FaCertificate />
                          <h3>No certificates found</h3>
                          <p>
                            Try changing your search or filter.
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

      {/* Details Modal */}
      {selectedCertificate && (
        <div
          className="certificate-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <span>CERTIFICATE DETAILS</span>
                <h2>Certificate Information</h2>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="certificate-modal-close"
              >
                ×
              </button>
            </div>

            <div className="certificate-preview">
              <div className="certificate-preview-icon">
                <FaAward />
              </div>

              <h3>CAPACITY CONNECT</h3>

              <p>Certificate of Course Completion</p>

              <strong>
                {selectedCertificate.trainee}
              </strong>

              <span>{selectedCertificate.course}</span>

              <small>
                Certificate ID: {selectedCertificate.certificateId}
              </small>
            </div>

            <div className="certificate-detail-grid">
              <div>
                <span>Trainee</span>
                <strong>{selectedCertificate.trainee}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{selectedCertificate.email}</strong>
              </div>

              <div>
                <span>Course</span>
                <strong>{selectedCertificate.course}</strong>
              </div>

              <div>
                <span>Trainer</span>
                <strong>{selectedCertificate.trainer}</strong>
              </div>

              <div>
                <span>Score</span>
                <strong>{selectedCertificate.score}%</strong>
              </div>

              <div>
                <span>Issue Date</span>
                <strong>{selectedCertificate.issueDate}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedCertificate.status}</strong>
              </div>

              <div>
                <span>Certificate ID</span>
                <strong>{selectedCertificate.certificateId}</strong>
              </div>
            </div>

            <div className="certificate-modal-actions">
              {selectedCertificate.status === "Pending" && (
                <button
                  className="modal-approve-btn"
                  onClick={() => {
                    approveCertificate(selectedCertificate.id);
                    setSelectedCertificate(null);
                  }}
                >
                  <FaCheckCircle />
                  Approve & Issue
                </button>
              )}

              {selectedCertificate.status === "Issued" && (
                <button
                  className="modal-download-btn"
                  onClick={() => {
                    setMessage(
                      "Certificate download is available after backend integration."
                    );
                    setSelectedCertificate(null);

                    setTimeout(() => setMessage(""), 2500);
                  }}
                >
                  <FaDownload />
                  Download
                </button>
              )}

              {selectedCertificate.status !== "Revoked" && (
                <button
                  className="modal-revoke-btn"
                  onClick={() => {
                    revokeCertificate(selectedCertificate.id);
                    setSelectedCertificate(null);
                  }}
                >
                  <FaTimesCircle />
                  Revoke
                </button>
              )}

              <button
                className="modal-close-btn"
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

export default AdminCertificateManagement;