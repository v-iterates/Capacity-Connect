import React from "react";
import {
  FaUsers,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardList,
  FaCertificate,
  FaUserClock,
  FaBell,
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaChartLine,
  FaBars,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import "./adminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <aside className="admin-sidebar">

        <div className="admin-logo">
          <div className="admin-logo-icon">✦</div>

          <div className="admin-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <nav className="admin-nav">

          <div className="admin-nav-title">MAIN MENU</div>

          <a href="#" className="admin-nav-item active">
            <span>▦</span>
            Dashboard
          </a>

          <a href="#" className="admin-nav-item">
            <FaUsers />
            User Management
          </a>

          <a href="#" className="admin-nav-item">
            <FaBookOpen />
            Course Management
          </a>

          <a href="#" className="admin-nav-item">
            <FaClipboardList />
            Assessments
          </a>

          <a href="#" className="admin-nav-item">
            <FaCertificate />
            Certificates
          </a>

          <a href="#" className="admin-nav-item">
            <FaChartLine />
            Reports & Analytics
          </a>

          <div className="admin-nav-title admin-system-title">
            SYSTEM
          </div>

          <a href="#" className="admin-nav-item">
            <FaCog />
            Settings
          </a>

          <a href="#" className="admin-nav-item">
            <FaQuestionCircle />
            Help & Support
          </a>

        </nav>

        <div className="admin-user-card">
          <div className="admin-user-avatar">A</div>

          <div>
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
        </div>

      </aside>

      {/* Main */}
      <main className="admin-main">

        {/* Topbar */}
        <header className="admin-topbar">

          <button className="admin-menu-btn">
            <FaBars />
          </button>

          <div className="admin-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <div className="admin-top-right">

            <button className="admin-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="admin-profile">
              <div className="admin-profile-avatar">A</div>

              <div>
                <strong>Admin User</strong>
                <small>Administrator</small>
              </div>
            </div>

          </div>

        </header>

        {/* Content */}
        <section className="admin-content">

          {/* Heading */}
          <div className="admin-heading">

            <div>
              <span>ADMINISTRATION</span>
              <h1>Admin Dashboard</h1>
              <p>
                Monitor and manage the Capacity Connect platform.
              </p>
            </div>

            <div className="admin-date">
              <FaClock />
              <div>
                <strong>Today</strong>
                <small>08 September 2026</small>
              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="admin-stats">

            <div className="admin-stat-card">

              <div className="admin-stat-icon users">
                <FaUsers />
              </div>

              <div>
                <span>Total Users</span>
                <h2>1,248</h2>
                <small className="positive">
                  ↑ 8.4% this month
                </small>
              </div>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-icon trainees">
                <FaUserGraduate />
              </div>

              <div>
                <span>Total Trainees</span>
                <h2>1,086</h2>
                <small className="positive">
                  ↑ 6.2% this month
                </small>
              </div>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-icon trainers">
                <FaChalkboardTeacher />
              </div>

              <div>
                <span>Total Trainers</span>
                <h2>156</h2>
                <small className="positive">
                  ↑ 4.8% this month
                </small>
              </div>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-icon courses">
                <FaBookOpen />
              </div>

              <div>
                <span>Total Courses</span>
                <h2>42</h2>
                <small className="neutral">
                  34 currently active
                </small>
              </div>

            </div>

          </div>

          {/* Second Stats */}
          <div className="admin-mini-stats">

            <div className="admin-mini-card">
              <div className="mini-icon">
                <FaUserClock />
              </div>

              <div>
                <span>Pending Approvals</span>
                <strong>12</strong>
              </div>

              <button>Review</button>
            </div>

            <div className="admin-mini-card">
              <div className="mini-icon">
                <FaClipboardList />
              </div>

              <div>
                <span>Active Assessments</span>
                <strong>06</strong>
              </div>

              <button>View</button>
            </div>

            <div className="admin-mini-card">
              <div className="mini-icon">
                <FaCertificate />
              </div>

              <div>
                <span>Certificates Issued</span>
                <strong>864</strong>
              </div>

              <button>View</button>
            </div>

          </div>

          {/* Main Grid */}
          <div className="admin-grid">

            {/* Platform Overview */}
            <div className="admin-card overview-card">

              <div className="admin-card-header">
                <div>
                  <h2>Platform Overview</h2>
                  <p>User activity and enrollment overview</p>
                </div>

                <select>
                  <option>Last 6 Months</option>
                  <option>Last 30 Days</option>
                  <option>Last Year</option>
                </select>
              </div>

              <div className="chart-area">

                <div className="chart-y">
                  <span>1000</span>
                  <span>750</span>
                  <span>500</span>
                  <span>250</span>
                  <span>0</span>
                </div>

                <div className="chart">

                  <div className="chart-grid-line line1"></div>
                  <div className="chart-grid-line line2"></div>
                  <div className="chart-grid-line line3"></div>
                  <div className="chart-grid-line line4"></div>

                  <div className="chart-bars">

                    <div className="bar-group">
                      <div className="bar trainee-bar b1"></div>
                      <div className="bar trainer-bar t1"></div>
                      <span>Apr</span>
                    </div>

                    <div className="bar-group">
                      <div className="bar trainee-bar b2"></div>
                      <div className="bar trainer-bar t2"></div>
                      <span>May</span>
                    </div>

                    <div className="bar-group">
                      <div className="bar trainee-bar b3"></div>
                      <div className="bar trainer-bar t3"></div>
                      <span>Jun</span>
                    </div>

                    <div className="bar-group">
                      <div className="bar trainee-bar b4"></div>
                      <div className="bar trainer-bar t4"></div>
                      <span>Jul</span>
                    </div>

                    <div className="bar-group">
                      <div className="bar trainee-bar b5"></div>
                      <div className="bar trainer-bar t5"></div>
                      <span>Aug</span>
                    </div>

                    <div className="bar-group">
                      <div className="bar trainee-bar b6"></div>
                      <div className="bar trainer-bar t6"></div>
                      <span>Sep</span>
                    </div>

                  </div>

                </div>

              </div>

              <div className="chart-legend">
                <span>
                  <i className="legend-trainee"></i>
                  Trainees
                </span>

                <span>
                  <i className="legend-trainer"></i>
                  Trainers
                </span>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="admin-card quick-card">

              <div className="admin-card-header">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Frequently used admin tools</p>
                </div>
              </div>

              <div className="quick-actions">

                <button>
                  <div className="quick-icon">
                    <FaUsers />
                  </div>
                  <div>
                    <strong>Manage Users</strong>
                    <span>Approve & manage accounts</span>
                  </div>
                  <b>›</b>
                </button>

                <button>
                  <div className="quick-icon">
                    <FaBookOpen />
                  </div>
                  <div>
                    <strong>Manage Courses</strong>
                    <span>Review course content</span>
                  </div>
                  <b>›</b>
                </button>

                <button>
                  <div className="quick-icon">
                    <FaBell />
                  </div>
                  <div>
                    <strong>Send Announcement</strong>
                    <span>Notify platform users</span>
                  </div>
                  <b>›</b>
                </button>

                <button>
                  <div className="quick-icon">
                    <FaChartLine />
                  </div>
                  <div>
                    <strong>View Reports</strong>
                    <span>Platform performance</span>
                  </div>
                  <b>›</b>
                </button>

              </div>

            </div>

          </div>

          {/* Bottom Grid */}
          <div className="admin-bottom-grid">

            {/* Pending Approvals */}
            <div className="admin-card">

              <div className="admin-card-header">

                <div>
                  <h2>Pending Approvals</h2>
                  <p>Users waiting for admin verification</p>
                </div>

                <button className="view-all">
                  View All
                </button>

              </div>

              <div className="approval-list">

                <div className="approval-item">

                  <div className="approval-avatar">
                    R
                  </div>

                  <div className="approval-info">
                    <strong>Rahul Sharma</strong>
                    <span>rahul@example.com</span>
                  </div>

                  <span className="approval-role">
                    Trainee
                  </span>

                  <div className="approval-buttons">
                    <button className="approve">
                      <FaCheckCircle />
                    </button>

                    <button className="reject">
                      ×
                    </button>
                  </div>

                </div>

                <div className="approval-item">

                  <div className="approval-avatar">
                    A
                  </div>

                  <div className="approval-info">
                    <strong>Aman Verma</strong>
                    <span>aman@example.com</span>
                  </div>

                  <span className="approval-role">
                    Trainee
                  </span>

                  <div className="approval-buttons">
                    <button className="approve">
                      <FaCheckCircle />
                    </button>

                    <button className="reject">
                      ×
                    </button>
                  </div>

                </div>

                <div className="approval-item">

                  <div className="approval-avatar">
                    N
                  </div>

                  <div className="approval-info">
                    <strong>Neha Patel</strong>
                    <span>neha@example.com</span>
                  </div>

                  <span className="approval-role trainer">
                    Trainer
                  </span>

                  <div className="approval-buttons">
                    <button className="approve">
                      <FaCheckCircle />
                    </button>

                    <button className="reject">
                      ×
                    </button>
                  </div>

                </div>

              </div>

            </div>

            {/* Recent Activity */}
            <div className="admin-card">

              <div className="admin-card-header">

                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest platform activity</p>
                </div>

              </div>

              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-icon">
                    <FaUserGraduate />
                  </div>

                  <div>
                    <strong>
                      New trainee registered
                    </strong>

                    <span>
                      Rahul Sharma joined the platform
                    </span>

                    <small>
                      12 minutes ago
                    </small>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-icon">
                    <FaBookOpen />
                  </div>

                  <div>
                    <strong>
                      New course submitted
                    </strong>

                    <span>
                      Machine Learning Basics
                    </span>

                    <small>
                      1 hour ago
                    </small>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-icon">
                    <FaCertificate />
                  </div>

                  <div>
                    <strong>
                      Certificates issued
                    </strong>

                    <span>
                      24 certificates generated
                    </span>

                    <small>
                      3 hours ago
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;