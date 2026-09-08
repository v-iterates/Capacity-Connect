import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaHeart,
  FaCode,
  FaCertificate,
  FaEdit,
  FaSave,
  FaArrowLeft,
  FaBell,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import "./traineeProfile.css";

function TraineeProfile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Aditi Kumari",
    email: "aditi@example.com",
    phone: "+91 98765 43210",
    location: "Greater Noida, India",
    qualification: "B.Tech Computer Science",
    experience: "Fresher",
    interests: "Web Development, AI/ML, Data Structures",
    skills: "C++, JavaScript, React, HTML, CSS, Git",
  });

  const [certificates] = useState([
    {
      name: "HTML & CSS Fundamentals",
      issuer: "Infosys Springboard",
      year: "2026",
    },
    {
      name: "JavaScript Essentials",
      issuer: "Infosys Springboard",
      year: "2026",
    },
    {
      name: "Object Oriented Programming",
      issuer: "Capacity Connect",
      year: "2026",
    },
  ]);

  const handleChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="tp-page">

      {/* SIDEBAR */}
      <aside className="tp-sidebar">

        <div className="tp-logo">
          <div className="tp-logo-icon">✦</div>
          <h2>CAPACITY CONNECT</h2>
        </div>

        <nav className="tp-nav">
          <div className="tp-nav-item">
            <span>⌂</span>
            Dashboard
          </div>

          <div className="tp-nav-item">
            <span>▣</span>
            My Courses
          </div>

          <div className="tp-nav-item">
            <span>◉</span>
            Assessments
          </div>

          <div className="tp-nav-item active">
            <span>♙</span>
            My Profile
          </div>

          <div className="tp-nav-item">
            <span>🏆</span>
            Certificates
          </div>

          <div className="tp-nav-item">
            <span>⚙</span>
            Settings
          </div>

          <div className="tp-nav-item">
            <span>?</span>
            Help
          </div>
        </nav>

        <div className="tp-sidebar-bottom">
          <div className="tp-logout">
            <FaSignOutAlt />
            Logout
          </div>
        </div>

      </aside>

      {/* MAIN */}
      <main className="tp-main">

        {/* TOPBAR */}
        <header className="tp-topbar">

          <div className="tp-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search courses, assessments..."
            />
          </div>

          <div className="tp-top-actions">
            <div className="tp-notification">
              <FaBell />
              <span>3</span>
            </div>

            <div className="tp-user">
              <div className="tp-avatar-small">A</div>

              <div>
                <strong>User</strong>
                <small>Trainee</small>
              </div>
            </div>
          </div>

        </header>

        {/* PAGE HEADER */}
        <section className="tp-header">

          <div>
            <button className="tp-back-btn">
              <FaArrowLeft />
            </button>

            <div className="tp-heading">
              <span>TRAINEE PROFILE</span>
              <h1>My Profile</h1>
              <p>
                Manage your professional information, skills and certificates.
              </p>
            </div>
          </div>

          {!editing ? (
            <button
              className="tp-edit-btn"
              onClick={() => setEditing(true)}
            >
              <FaEdit />
              Edit Profile
            </button>
          ) : (
            <button
              className="tp-save-btn"
              onClick={handleSave}
            >
              <FaSave />
              Save Changes
            </button>
          )}

        </section>

        {/* PROFILE HERO */}
        <section className="tp-profile-card">

          <div className="tp-profile-left">

            <div className="tp-profile-avatar">
              A
            </div>

            <div>
              <h2>{profile.name}</h2>
              <p>
                <FaGraduationCap />
                {profile.qualification}
              </p>
              <span className="tp-status">
                Active Trainee
              </span>
            </div>

          </div>

          <div className="tp-profile-stat">
            <strong>06</strong>
            <span>Courses</span>
          </div>

          <div className="tp-profile-stat">
            <strong>04</strong>
            <span>Completed</span>
          </div>

          <div className="tp-profile-stat">
            <strong>03</strong>
            <span>Certificates</span>
          </div>

        </section>

        {/* CONTENT GRID */}
        <section className="tp-content-grid">

          {/* PERSONAL INFORMATION */}
          <div className="tp-card">

            <div className="tp-card-header">
              <div>
                <span className="tp-card-icon">
                  <FaUser />
                </span>

                <div>
                  <h3>Personal Information</h3>
                  <p>Your basic contact information</p>
                </div>
              </div>
            </div>

            <div className="tp-form-grid">

              <div className="tp-field">
                <label>Full Name</label>

                <div className="tp-input-wrap">
                  <FaUser />

                  <input
                    type="text"
                    value={profile.name}
                    disabled={!editing}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="tp-field">
                <label>Email Address</label>

                <div className="tp-input-wrap">
                  <FaEnvelope />

                  <input
                    type="email"
                    value={profile.email}
                    disabled={!editing}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="tp-field">
                <label>Phone Number</label>

                <div className="tp-input-wrap">
                  <FaPhone />

                  <input
                    type="text"
                    value={profile.phone}
                    disabled={!editing}
                    onChange={(e) =>
                      handleChange("phone", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="tp-field">
                <label>Location</label>

                <div className="tp-input-wrap">
                  <FaMapMarkerAlt />

                  <input
                    type="text"
                    value={profile.location}
                    disabled={!editing}
                    onChange={(e) =>
                      handleChange("location", e.target.value)
                    }
                  />
                </div>
              </div>

            </div>

          </div>

          {/* PROFESSIONAL INFORMATION */}
          <div className="tp-card">

            <div className="tp-card-header">
              <div>
                <span className="tp-card-icon">
                  <FaBriefcase />
                </span>

                <div>
                  <h3>Professional Information</h3>
                  <p>Your education and experience</p>
                </div>
              </div>
            </div>

            <div className="tp-form-grid">

              <div className="tp-field">
                <label>Highest Qualification</label>

                <div className="tp-input-wrap">
                  <FaGraduationCap />

                  <input
                    type="text"
                    value={profile.qualification}
                    disabled={!editing}
                    onChange={(e) =>
                      handleChange(
                        "qualification",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              <div className="tp-field">
                <label>Experience</label>

                <div className="tp-input-wrap">
                  <FaBriefcase />

                  <input
                    type="text"
                    value={profile.experience}
                    disabled={!editing}
                    onChange={(e) =>
                      handleChange(
                        "experience",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

            </div>

          </div>

          {/* INTERESTS */}
          <div className="tp-card">

            <div className="tp-card-header">
              <div>
                <span className="tp-card-icon">
                  <FaHeart />
                </span>

                <div>
                  <h3>Interests</h3>
                  <p>Areas you are interested in learning</p>
                </div>
              </div>
            </div>

            {editing ? (
              <textarea
                value={profile.interests}
                onChange={(e) =>
                  handleChange("interests", e.target.value)
                }
              />
            ) : (
              <div className="tp-tags">
                {profile.interests
                  .split(",")
                  .map((interest, index) => (
                    <span key={index}>
                      {interest.trim()}
                    </span>
                  ))}
              </div>
            )}

          </div>

          {/* SKILLS */}
          <div className="tp-card">

            <div className="tp-card-header">
              <div>
                <span className="tp-card-icon">
                  <FaCode />
                </span>

                <div>
                  <h3>Skills</h3>
                  <p>Your technical and professional skills</p>
                </div>
              </div>
            </div>

            {editing ? (
              <textarea
                value={profile.skills}
                onChange={(e) =>
                  handleChange("skills", e.target.value)
                }
              />
            ) : (
              <div className="tp-tags">
                {profile.skills
                  .split(",")
                  .map((skill, index) => (
                    <span key={index}>
                      {skill.trim()}
                    </span>
                  ))}
              </div>
            )}

          </div>

        </section>

        {/* CERTIFICATES */}
        <section className="tp-card tp-certificates">

          <div className="tp-card-header">

            <div>
              <span className="tp-card-icon">
                <FaCertificate />
              </span>

              <div>
                <h3>Certificates</h3>
                <p>Your earned learning certificates</p>
              </div>
            </div>

            <button className="tp-view-all">
              View All
            </button>

          </div>

          <div className="tp-certificate-list">

            {certificates.map((certificate, index) => (

              <div
                className="tp-certificate"
                key={index}
              >

                <div className="tp-certificate-icon">
                  <FaCertificate />
                </div>

                <div className="tp-certificate-info">
                  <h4>{certificate.name}</h4>
                  <p>
                    Issued by {certificate.issuer}
                  </p>
                </div>

                <span className="tp-certificate-year">
                  {certificate.year}
                </span>

                <button className="tp-certificate-btn">
                  View
                </button>

              </div>

            ))}

          </div>

        </section>

      </main>
    </div>
  );
}

export default TraineeProfile;