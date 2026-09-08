import React, { useState } from "react";
import {
  FaCog,
  FaUser,
  FaLock,
  FaBell,
  FaPalette,
  FaShieldAlt,
  FaSave,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "./trainerSettings.css";

function TrainerSettings() {
  const [activeSection, setActiveSection] = useState("account");

  const [profile, setProfile] = useState({
    name: "Dr. Anil Kumar",
    email: "anil.kumar@example.com",
    phone: "+91 98765 12345",
    language: "English",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });

  const [notifications, setNotifications] = useState({
    email: true,
    assessment: true,
    trainee: true,
    course: false,
  });

  const [theme, setTheme] = useState("Light");

  const [message, setMessage] = useState("");

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = () => {
    setMessage("Account information updated successfully.");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleChangePassword = () => {
    if (!passwords.current || !passwords.newPassword || !passwords.confirm) {
      setMessage("Please fill all password fields.");
      return;
    }

    if (passwords.newPassword !== passwords.confirm) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    setMessage("Password changed successfully.");

    setPasswords({
      current: "",
      newPassword: "",
      confirm: "",
    });

    setTimeout(() => setMessage(""), 3000);
  };

  const handleSaveNotifications = () => {
    setMessage("Notification preferences saved.");
    setTimeout(() => setMessage(""), 3000);
  };

  const togglePassword = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field],
    });
  };

  return (
    <div className="trainer-settings-page">

      {/* Sidebar */}
      <aside className="trainer-settings-sidebar">

        <div className="ts-logo">
          <div className="ts-logo-icon">
            <span>✦</span>
          </div>

          <div className="ts-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="ts-navigation">

          <a href="#" className="ts-nav-item">
            <span>▦</span>
            Dashboard
          </a>

          <a href="#" className="ts-nav-item">
            <span>▣</span>
            My Courses
          </a>

          <a href="#" className="ts-nav-item">
            <span>＋</span>
            Create Course
          </a>

          <a href="#" className="ts-nav-item">
            <span>☑</span>
            Assessments
          </a>

          <a href="#" className="ts-nav-item">
            <span>♙</span>
            Trainees
          </a>

          <a href="#" className="ts-nav-item">
            <span>◔</span>
            Performance
          </a>

          <a href="#" className="ts-nav-item">
            <span>▤</span>
            Certificates
          </a>

          <a href="#" className="ts-nav-item">
            <span>◉</span>
            My Profile
          </a>

          <a href="#" className="ts-nav-item active">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="ts-nav-item">
            <span>?</span>
            Help
          </a>

        </nav>

        <div className="ts-sidebar-bottom">
          <div className="ts-user-mini">
            <div className="ts-avatar">A</div>

            <div>
              <strong>User</strong>
              <small>Trainer</small>
            </div>
          </div>
        </div>

      </aside>

      {/* Main */}
      <main className="trainer-settings-main">

        {/* Topbar */}
        <header className="ts-topbar">

          <div className="ts-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="ts-top-actions">

            <button className="ts-notification">
              🔔
              <span>3</span>
            </button>

            <div className="ts-profile-mini">
              <div className="ts-avatar">A</div>

              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>
            </div>

          </div>

        </header>

        {/* Content */}
        <section className="ts-content">

          <div className="ts-page-header">
            <div>
              <p className="ts-eyebrow">ACCOUNT MANAGEMENT</p>
              <h1>Settings</h1>
              <p>
                Manage your account, security and notification preferences.
              </p>
            </div>
          </div>

          {/* Success / Error message */}
          {message && (
            <div className="ts-message">
              <FaCheckCircle />
              {message}
            </div>
          )}

          <div className="ts-settings-layout">

            {/* Settings Menu */}
            <div className="ts-settings-menu">

              <button
                className={activeSection === "account" ? "active" : ""}
                onClick={() => setActiveSection("account")}
              >
                <FaUser />
                Account
              </button>

              <button
                className={activeSection === "security" ? "active" : ""}
                onClick={() => setActiveSection("security")}
              >
                <FaLock />
                Security
              </button>

              <button
                className={activeSection === "notifications" ? "active" : ""}
                onClick={() => setActiveSection("notifications")}
              >
                <FaBell />
                Notifications
              </button>

              <button
                className={activeSection === "appearance" ? "active" : ""}
                onClick={() => setActiveSection("appearance")}
              >
                <FaPalette />
                Appearance
              </button>

              <button
                className={activeSection === "privacy" ? "active" : ""}
                onClick={() => setActiveSection("privacy")}
              >
                <FaShieldAlt />
                Privacy
              </button>

            </div>

            {/* Settings Panel */}
            <div className="ts-settings-panel">

              {/* ACCOUNT */}
              {activeSection === "account" && (
                <div className="ts-section">

                  <div className="ts-section-heading">
                    <div className="ts-section-icon">
                      <FaUser />
                    </div>

                    <div>
                      <h2>Account Information</h2>
                      <p>Update your personal account information.</p>
                    </div>
                  </div>

                  <div className="ts-form-grid">

                    <div className="ts-field">
                      <label>Full Name</label>
                      <input
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="ts-field">
                      <label>Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="ts-field">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="ts-field">
                      <label>Language</label>

                      <select
                        name="language"
                        value={profile.language}
                        onChange={handleProfileChange}
                      >
                        <option>English</option>
                        <option>Hindi</option>
                      </select>

                    </div>

                  </div>

                  <div className="ts-form-footer">
                    <button
                      className="ts-save-btn"
                      onClick={handleSaveProfile}
                    >
                      <FaSave />
                      Save Changes
                    </button>
                  </div>

                </div>
              )}

              {/* SECURITY */}
              {activeSection === "security" && (
                <div className="ts-section">

                  <div className="ts-section-heading">
                    <div className="ts-section-icon">
                      <FaLock />
                    </div>

                    <div>
                      <h2>Password & Security</h2>
                      <p>Keep your trainer account secure.</p>
                    </div>
                  </div>

                  <div className="ts-security-note">
                    <FaShieldAlt />
                    Use a strong password containing letters, numbers and
                    special characters.
                  </div>

                  <div className="ts-password-fields">

                    <div className="ts-field">
                      <label>Current Password</label>

                      <div className="ts-password-box">
                        <input
                          type={
                            showPasswords.current
                              ? "text"
                              : "password"
                          }
                          name="current"
                          value={passwords.current}
                          onChange={handlePasswordChange}
                        />

                        <button
                          type="button"
                          onClick={() => togglePassword("current")}
                        >
                          {showPasswords.current
                            ? <FaEyeSlash />
                            : <FaEye />
                          }
                        </button>
                      </div>
                    </div>

                    <div className="ts-field">
                      <label>New Password</label>

                      <div className="ts-password-box">
                        <input
                          type={
                            showPasswords.newPassword
                              ? "text"
                              : "password"
                          }
                          name="newPassword"
                          value={passwords.newPassword}
                          onChange={handlePasswordChange}
                        />

                        <button
                          type="button"
                          onClick={() => togglePassword("newPassword")}
                        >
                          {showPasswords.newPassword
                            ? <FaEyeSlash />
                            : <FaEye />
                          }
                        </button>
                      </div>
                    </div>

                    <div className="ts-field">
                      <label>Confirm New Password</label>

                      <div className="ts-password-box">
                        <input
                          type={
                            showPasswords.confirm
                              ? "text"
                              : "password"
                          }
                          name="confirm"
                          value={passwords.confirm}
                          onChange={handlePasswordChange}
                        />

                        <button
                          type="button"
                          onClick={() => togglePassword("confirm")}
                        >
                          {showPasswords.confirm
                            ? <FaEyeSlash />
                            : <FaEye />
                          }
                        </button>
                      </div>
                    </div>

                  </div>

                  <div className="ts-form-footer">
                    <button
                      className="ts-save-btn"
                      onClick={handleChangePassword}
                    >
                      <FaLock />
                      Change Password
                    </button>
                  </div>

                </div>
              )}

              {/* NOTIFICATIONS */}
              {activeSection === "notifications" && (
                <div className="ts-section">

                  <div className="ts-section-heading">
                    <div className="ts-section-icon">
                      <FaBell />
                    </div>

                    <div>
                      <h2>Notifications</h2>
                      <p>Choose which notifications you want to receive.</p>
                    </div>
                  </div>

                  <div className="ts-toggle-list">

                    <div className="ts-toggle-item">
                      <div>
                        <strong>Email Notifications</strong>
                        <span>
                          Receive important platform updates by email.
                        </span>
                      </div>

                      <label className="ts-switch">
                        <input
                          type="checkbox"
                          checked={notifications.email}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              email: !notifications.email,
                            })
                          }
                        />
                        <span></span>
                      </label>
                    </div>

                    <div className="ts-toggle-item">
                      <div>
                        <strong>Assessment Notifications</strong>
                        <span>
                          Get reminders about upcoming assessments.
                        </span>
                      </div>

                      <label className="ts-switch">
                        <input
                          type="checkbox"
                          checked={notifications.assessment}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              assessment: !notifications.assessment,
                            })
                          }
                        />
                        <span></span>
                      </label>
                    </div>

                    <div className="ts-toggle-item">
                      <div>
                        <strong>Trainee Activity</strong>
                        <span>
                          Receive updates about trainee performance.
                        </span>
                      </div>

                      <label className="ts-switch">
                        <input
                          type="checkbox"
                          checked={notifications.trainee}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              trainee: !notifications.trainee,
                            })
                          }
                        />
                        <span></span>
                      </label>
                    </div>

                    <div className="ts-toggle-item">
                      <div>
                        <strong>Course Updates</strong>
                        <span>
                          Receive updates related to your courses.
                        </span>
                      </div>

                      <label className="ts-switch">
                        <input
                          type="checkbox"
                          checked={notifications.course}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              course: !notifications.course,
                            })
                          }
                        />
                        <span></span>
                      </label>
                    </div>

                  </div>

                  <div className="ts-form-footer">
                    <button
                      className="ts-save-btn"
                      onClick={handleSaveNotifications}
                    >
                      <FaSave />
                      Save Preferences
                    </button>
                  </div>

                </div>
              )}

              {/* APPEARANCE */}
              {activeSection === "appearance" && (
                <div className="ts-section">

                  <div className="ts-section-heading">
                    <div className="ts-section-icon">
                      <FaPalette />
                    </div>

                    <div>
                      <h2>Appearance</h2>
                      <p>Customize how Capacity Connect looks for you.</p>
                    </div>
                  </div>

                  <div className="ts-theme-options">

                    {["Light", "Dark", "System"].map((item) => (
                      <button
                        key={item}
                        className={
                          theme === item
                            ? "ts-theme-card active"
                            : "ts-theme-card"
                        }
                        onClick={() => setTheme(item)}
                      >
                        <div className="ts-theme-preview">
                          {item === "Light" && "☀"}
                          {item === "Dark" && "◐"}
                          {item === "System" && "⚙"}
                        </div>

                        <strong>{item}</strong>

                        {theme === item && (
                          <FaCheckCircle className="ts-theme-check" />
                        )}
                      </button>
                    ))}

                  </div>

                  <div className="ts-form-footer">
                    <button
                      className="ts-save-btn"
                      onClick={() => {
                        setMessage(`${theme} theme selected.`);
                        setTimeout(() => setMessage(""), 3000);
                      }}
                    >
                      <FaSave />
                      Save Appearance
                    </button>
                  </div>

                </div>
              )}

              {/* PRIVACY */}
              {activeSection === "privacy" && (
                <div className="ts-section">

                  <div className="ts-section-heading">
                    <div className="ts-section-icon">
                      <FaShieldAlt />
                    </div>

                    <div>
                      <h2>Privacy & Security</h2>
                      <p>Control your account visibility and privacy.</p>
                    </div>
                  </div>

                  <div className="ts-privacy-list">

                    <div className="ts-privacy-card">
                      <div>
                        <strong>Trainer Profile Visibility</strong>
                        <p>
                          Your trainer profile can be viewed by trainees
                          enrolled in your courses.
                        </p>
                      </div>

                      <span className="ts-status-active">
                        Visible
                      </span>
                    </div>

                    <div className="ts-privacy-card">
                      <div>
                        <strong>Account Verification</strong>
                        <p>
                          Your trainer account has been verified by the
                          administrator.
                        </p>
                      </div>

                      <span className="ts-verified">
                        ✓ Verified
                      </span>
                    </div>

                    <div className="ts-privacy-card">
                      <div>
                        <strong>Two-Factor Authentication</strong>
                        <p>
                          Add an extra layer of security to your account.
                        </p>
                      </div>

                      <button
                        className="ts-enable-btn"
                        onClick={() => {
                          setMessage(
                            "Two-factor authentication setup will be available after backend integration."
                          );
                          setTimeout(() => setMessage(""), 3500);
                        }}
                      >
                        Enable
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default TrainerSettings;