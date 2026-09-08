import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUsers,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserClock,
  FaCheck,
  FaTimes,
  FaEye,
  FaUserShield,
  FaBan,
  FaBars,
  FaTimesCircle,
} from "react-icons/fa";
import "./userManagement.css";

const initialUsers = [
  {
    id: 1,
    name: "Aditi Kumari",
    email: "aditi@example.com",
    role: "Trainee",
    city: "Greater Noida",
    joinDate: "02 Sep 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Dr. Anil Kumar",
    email: "anil.kumar@example.com",
    role: "Trainer",
    city: "New Delhi",
    joinDate: "28 Aug 2026",
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Trainee",
    city: "Delhi",
    joinDate: "01 Sep 2026",
    status: "Pending",
  },
  {
    id: 4,
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Trainer",
    city: "Noida",
    joinDate: "30 Aug 2026",
    status: "Active",
  },
  {
    id: 5,
    name: "Aman Verma",
    email: "aman@example.com",
    role: "Trainee",
    city: "Ghaziabad",
    joinDate: "29 Aug 2026",
    status: "Pending",
  },
  {
    id: 6,
    name: "Sneha Gupta",
    email: "sneha@example.com",
    role: "Trainee",
    city: "Lucknow",
    joinDate: "25 Aug 2026",
    status: "Banned",
  },
  {
    id: 7,
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    role: "Trainer",
    city: "Mumbai",
    joinDate: "22 Aug 2026",
    status: "Active",
  },
  {
    id: 8,
    name: "Neha Patel",
    email: "neha@example.com",
    role: "Trainee",
    city: "Jaipur",
    joinDate: "20 Aug 2026",
    status: "Active",
  },
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalUsers = users.length;
  const pendingUsers = users.filter(
    (user) => user.status === "Pending"
  ).length;
  const trainees = users.filter(
    (user) => user.role === "Trainee"
  ).length;
  const trainers = users.filter(
    (user) => user.role === "Trainer"
  ).length;

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.city.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || user.role === roleFilter;

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const updateStatus = (id, status) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status } : user
      )
    );
  };

  const changeRole = (id, role) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role } : user
      )
    );
  };

  return (
    <div className="user-management-page">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="um-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`um-sidebar ${
          sidebarOpen ? "um-sidebar-open" : ""
        }`}
      >
        <div className="um-logo">
          <div className="um-logo-icon">✦</div>

          <div className="um-logo-text">
            <h2>CAPACITY CONNECT</h2>
            <span>ADMIN PANEL</span>
          </div>

          <button
            className="um-mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="um-nav">

          <div className="um-nav-title">MAIN MENU</div>

          <a href="#" className="um-nav-item">
            <span>▦</span>
            Dashboard
          </a>

          <a
            href="#"
            className="um-nav-item active"
          >
            <FaUsers />
            User Management
          </a>

          <a href="#" className="um-nav-item">
            <span>▣</span>
            Course Management
          </a>

          <a href="#" className="um-nav-item">
            <span>✓</span>
            Assessments
          </a>

          <a href="#" className="um-nav-item">
            <span>▤</span>
            Reports & Analytics
          </a>

          <div className="um-nav-title second-title">
            SYSTEM
          </div>

          <a href="#" className="um-nav-item">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="um-nav-item">
            <span>?</span>
            Help & Support
          </a>

        </nav>

        <div className="um-admin-card">
          <div className="um-admin-avatar">A</div>

          <div>
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="um-main">

        {/* Topbar */}
        <header className="um-topbar">

          <button
            className="um-menu-button"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>

          <div className="um-search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="um-top-actions">

            <button className="um-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="um-profile">
              <div className="um-profile-avatar">A</div>

              <div className="um-profile-info">
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>
            </div>

          </div>
        </header>

        {/* Content */}
        <section className="um-content">

          <div className="um-page-heading">
            <div>
              <span className="um-label">ADMINISTRATION</span>
              <h1>User Management</h1>
              <p>
                Manage users, roles, approvals and account status.
              </p>
            </div>

            <button className="um-add-user">
              + Add New User
            </button>
          </div>

          {/* Stats */}
          <div className="um-stats">

            <div className="um-stat-card">
              <div className="um-stat-icon users">
                <FaUsers />
              </div>
              <div>
                <span>Total Users</span>
                <h2>{totalUsers}</h2>
                <small>Registered accounts</small>
              </div>
            </div>

            <div className="um-stat-card">
              <div className="um-stat-icon pending">
                <FaUserClock />
              </div>
              <div>
                <span>Pending Approvals</span>
                <h2>{pendingUsers}</h2>
                <small>Require review</small>
              </div>
            </div>

            <div className="um-stat-card">
              <div className="um-stat-icon trainee">
                <FaUserGraduate />
              </div>
              <div>
                <span>Trainees</span>
                <h2>{trainees}</h2>
                <small>Learning users</small>
              </div>
            </div>

            <div className="um-stat-card">
              <div className="um-stat-icon trainer">
                <FaChalkboardTeacher />
              </div>
              <div>
                <span>Trainers</span>
                <h2>{trainers}</h2>
                <small>Teaching users</small>
              </div>
            </div>

          </div>

          {/* Table Card */}
          <div className="um-table-card">

            <div className="um-table-header">

              <div>
                <h2>All Users</h2>
                <p>
                  Review and manage registered platform users.
                </p>
              </div>

              <div className="um-filters">

                <select
                  value={roleFilter}
                  onChange={(e) =>
                    setRoleFilter(e.target.value)
                  }
                >
                  <option value="All">All Roles</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Admin">Admin</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Banned">Banned</option>
                </select>

              </div>
            </div>

            <div className="um-table-wrapper">

              <table className="um-table">

                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Join Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredUsers.map((user) => (

                    <tr key={user.id}>

                      <td>
                        <div className="um-user">

                          <div className="um-user-avatar">
                            {user.name.charAt(0)}
                          </div>

                          <div>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                          </div>

                        </div>
                      </td>

                      <td>
                        <select
                          className="um-role-select"
                          value={user.role}
                          onChange={(e) =>
                            changeRole(
                              user.id,
                              e.target.value
                            )
                          }
                        >
                          <option value="Trainee">
                            Trainee
                          </option>

                          <option value="Trainer">
                            Trainer
                          </option>

                          <option value="Admin">
                            Admin
                          </option>
                        </select>
                      </td>

                      <td>{user.city}</td>

                      <td>{user.joinDate}</td>

                      <td>
                        <span
                          className={`um-status ${user.status.toLowerCase()}`}
                        >
                          <span className="status-dot"></span>
                          {user.status}
                        </span>
                      </td>

                      <td>

                        <div className="um-actions">

                          <button
                            className="view-btn"
                            title="View"
                            onClick={() =>
                              setSelectedUser(user)
                            }
                          >
                            <FaEye />
                          </button>

                          {user.status === "Pending" && (
                            <>
                              <button
                                className="approve-btn"
                                title="Approve"
                                onClick={() =>
                                  updateStatus(
                                    user.id,
                                    "Active"
                                  )
                                }
                              >
                                <FaCheck />
                              </button>

                              <button
                                className="reject-btn"
                                title="Reject"
                                onClick={() =>
                                  updateStatus(
                                    user.id,
                                    "Banned"
                                  )
                                }
                              >
                                <FaTimes />
                              </button>
                            </>
                          )}

                          {user.status === "Active" && (
                            <button
                              className="ban-btn"
                              title="Deactivate"
                              onClick={() =>
                                updateStatus(
                                  user.id,
                                  "Banned"
                                )
                              }
                            >
                              <FaBan />
                            </button>
                          )}

                          {user.status === "Banned" && (
                            <button
                              className="activate-btn"
                              title="Activate"
                              onClick={() =>
                                updateStatus(
                                  user.id,
                                  "Active"
                                )
                              }
                            >
                              <FaCheck />
                            </button>
                          )}

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

              {filteredUsers.length === 0 && (
                <div className="um-no-users">
                  <FaUsers />
                  <h3>No users found</h3>
                  <p>
                    Try changing your search or filters.
                  </p>
                </div>
              )}

            </div>

            <div className="um-table-footer">
              Showing{" "}
              <strong>{filteredUsers.length}</strong>{" "}
              of <strong>{totalUsers}</strong> users
            </div>

          </div>

        </section>
      </main>

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="um-modal-overlay"
          onClick={() => setSelectedUser(null)}
        >

          <div
            className="um-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="um-modal-close"
              onClick={() => setSelectedUser(null)}
            >
              <FaTimesCircle />
            </button>

            <div className="um-modal-avatar">
              {selectedUser.name.charAt(0)}
            </div>

            <h2>{selectedUser.name}</h2>
            <p className="um-modal-email">
              {selectedUser.email}
            </p>

            <div className="um-modal-details">

              <div>
                <span>Role</span>
                <strong>{selectedUser.role}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedUser.status}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{selectedUser.city}</strong>
              </div>

              <div>
                <span>Joined</span>
                <strong>{selectedUser.joinDate}</strong>
              </div>

            </div>

            <button
              className="um-modal-manage"
              onClick={() => setSelectedUser(null)}
            >
              <FaUserShield />
              Close Profile
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default UserManagement;