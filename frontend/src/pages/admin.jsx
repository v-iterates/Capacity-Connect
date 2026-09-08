import React from "react";
import {
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaCertificate,
  FaUserShield,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaUserPlus,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaArrowRight,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

import "./admin.css";

function Admin() {
  const stats = [
    {
      icon: <FaUsers />,
      value: "1,248",
      title: "Total Users",
      change: "+8.4% this month",
    },
    {
      icon: <FaChalkboardTeacher />,
      value: "86",
      title: "Active Trainers",
      change: "+6 this month",
    },
    {
      icon: <FaUserGraduate />,
      value: "1,162",
      title: "Active Trainees",
      change: "+52 this month",
    },
    {
      icon: <FaBookOpen />,
      value: "42",
      title: "Active Courses",
      change: "+4 this month",
    },
  ];

  const recentUsers = [
    {
      name: "Rahul Sharma",
      email: "rahul.sharma@gmail.com",
      role: "Trainee",
      status: "Active",
    },
    {
      name: "Priya Singh",
      email: "priya.singh@gmail.com",
      role: "Trainer",
      status: "Active",
    },
    {
      name: "Aman Verma",
      email: "aman.verma@gmail.com",
      role: "Trainee",
      status: "Pending",
    },
    {
      name: "Neha Gupta",
      email: "neha.gupta@gmail.com",
      role: "Trainer",
      status: "Pending",
    },
  ];

  const pendingApprovals = [
    {
      title: "Trainer Profile Approval",
      person: "Dr. Anil Kumar",
      time: "2 hours ago",
    },
    {
      title: "Course Approval",
      person: "Python for Data Science",
      time: "5 hours ago",
    },
    {
      title: "Trainer Profile Approval",
      person: "Ms. Kavita Sharma",
      time: "Yesterday",
    },
  ];

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">

        <div className="admin-logo">
          <div className="admin-logo-icon">
            <span>✦</span>
          </div>

          <div className="admin-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <nav className="admin-nav">

          <p className="admin-nav-title">MAIN MENU</p>

          <a className="admin-nav-item active">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a className="admin-nav-item">
            <FaUsers />
            <span>User Management</span>
          </a>

          <a className="admin-nav-item">
            <FaChalkboardTeacher />
            <span>Trainer Management</span>
          </a>

          <a className="admin-nav-item">
            <FaBookOpen />
            <span>Course Management</span>
          </a>

          <a className="admin-nav-item">
            <FaClipboardCheck />
            <span>Assessments</span>
          </a>

          <a className="admin-nav-item">
            <FaCertificate />
            <span>Certificates</span>
          </a>

          <p className="admin-nav-title second-title">SYSTEM</p>

          <a className="admin-nav-item">
            <FaUserShield />
            <span>Roles & Permissions</span>
          </a>

          <a className="admin-nav-item">
            <FaChartLine />
            <span>Reports & Analytics</span>
          </a>

          <a className="admin-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>

        </nav>

        <div className="admin-sidebar-bottom">
          <a className="admin-nav-item">
            <FaSignOutAlt />
            <span>Logout</span>
          </a>
        </div>

      </aside>

      {/* Main Area */}
      <main className="admin-main">

        {/* Topbar */}
        <header className="admin-topbar">

          <div className="admin-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search users, courses..."
            />
          </div>

          <div className="admin-topbar-right">

            <button className="admin-notification">
              <FaBell />
              <span className="notification-dot"></span>
            </button>

            <div className="admin-profile">

              <div className="admin-avatar">
                A
              </div>

              <div className="admin-profile-info">
                <strong> User</strong>
                <span>Admin</span>
              </div>

            </div>

          </div>

        </header>

        {/* Dashboard Content */}
        <section className="admin-content">

          <div className="admin-welcome">

            <div>
              <p className="admin-label">ADMIN DASHBOARD</p>

              <h1>
                Welcome back, Admin! 👋
              </h1>

              <p>
                Manage users, courses, trainers and platform activities
                from one place.
              </p>
            </div>

            <button className="admin-primary-btn">
              <FaUserPlus />
              Add New User
            </button>

          </div>

          {/* Stats */}
          <div className="admin-stats">

            {stats.map((stat, index) => (
              <div className="admin-stat-card" key={index}>

                <div className="admin-stat-top">

                  <div className="admin-stat-icon">
                    {stat.icon}
                  </div>

                  <FaChartLine className="stat-chart-icon" />

                </div>

                <h2>{stat.value}</h2>

                <p>{stat.title}</p>

                <span className="stat-change">
                  {stat.change}
                </span>

              </div>
            ))}

          </div>

          {/* Main Grid */}
          <div className="admin-dashboard-grid">

            {/* Recent Users */}
            <div className="admin-card users-card">

              <div className="admin-card-header">

                <div>
                  <h2>Recent Users</h2>
                  <p>Recently registered users</p>
                </div>

                <button className="view-all-btn">
                  View All
                  <FaArrowRight />
                </button>

              </div>

              <div className="admin-table-wrapper">

                <table className="admin-table">

                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {recentUsers.map((user, index) => (
                      <tr key={index}>

                        <td>
                          <div className="user-cell">

                            <div className="user-small-avatar">
                              {user.name.charAt(0)}
                            </div>

                            <div>
                              <strong>{user.name}</strong>
                              <span>{user.email}</span>
                            </div>

                          </div>
                        </td>

                        <td>
                          <span className="role-badge">
                            {user.role}
                          </span>
                        </td>

                        <td>
                          <span
                            className={`status-badge ${
                              user.status === "Active"
                                ? "active-status"
                                : "pending-status"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Pending Approvals */}
            <div className="admin-card approvals-card">

              <div className="admin-card-header">

                <div>
                  <h2>Pending Approvals</h2>
                  <p>Items requiring your attention</p>
                </div>

                <span className="approval-count">
                  3
                </span>

              </div>

              <div className="approval-list">

                {pendingApprovals.map((item, index) => (
                  <div className="approval-item" key={index}>

                    <div className="approval-icon">
                      {index === 0 ? (
                        <FaUserShield />
                      ) : (
                        <FaBookOpen />
                      )}
                    </div>

                    <div className="approval-info">
                      <strong>{item.title}</strong>
                      <span>{item.person}</span>
                      <small>
                        <FaClock />
                        {item.time}
                      </small>
                    </div>

                    <button className="approval-action">
                      <FaArrowRight />
                    </button>

                  </div>
                ))}

              </div>

              <button className="manage-approval-btn">
                Manage Approvals
                <FaArrowRight />
              </button>

            </div>

          </div>

          {/* Bottom Cards */}
          <div className="admin-bottom-grid">

            <div className="admin-mini-card">

              <div className="mini-card-icon green">
                <FaCheckCircle />
              </div>

              <div>
                <span>Completed Assessments</span>
                <strong>2,486</strong>
                <small>+12.5% this month</small>
              </div>

            </div>

            <div className="admin-mini-card">

              <div className="mini-card-icon orange">
                <FaClock />
              </div>

              <div>
                <span>Pending Requests</span>
                <strong>18</strong>
                <small>Needs attention</small>
              </div>

            </div>

            <div className="admin-mini-card">

              <div className="mini-card-icon red">
                <FaExclamationCircle />
              </div>

              <div>
                <span>Reported Issues</span>
                <strong>05</strong>
                <small>3 unresolved</small>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Admin;