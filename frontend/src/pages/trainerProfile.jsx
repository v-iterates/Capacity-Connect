import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaCode,
  FaCertificate,
  FaEdit,
  FaSave,
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaBookOpen,
} from "react-icons/fa";
import "./trainerProfile.css";

function TrainerProfile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Dr. Anil Kumar",
    email: "anil.kumar@example.com",
    phone: "+91 98765 12345",
    location: "New Delhi, India",
    qualification: "Ph.D. in Computer Science",
    experience: "8 Years",
    specialization: "Python, Data Science, Machine Learning",
    skills: "Python, Machine Learning, SQL, Data Science, React",
    bio: "Experienced technology trainer focused on practical learning, data science and modern software development.",
  });

  const certificates = [
    {
      name: "Advanced Python Programming",
      issuer: "Infosys Springboard",
      year: "2025",
    },
    {
      name: "Machine Learning Professional",
      issuer: "Google",
      year: "2025",
    },
    {
      name: "Data Science Certification",
      issuer: "Microsoft",
      year: "2024",
    },
  ];

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
    <div className="trp-page">

      {/* SIDEBAR */}
      <aside className="trp-sidebar">

        <div className="trp-logo">
          <div className="trp-logo-icon">✦</div>
          <h2>CAPACITY CONNECT</h2>
        </div>

        <nav className="trp-nav">

          <div className="trp-nav-item">
            <span>⌂</span>
            Dashboard
          </div>

          <div className="trp-nav-item">
            <span>▣</span>
            My Courses
          </div>

          <div className="trp-nav-item">
            <span>＋</span>
            Create Course
          </div>

          <div className="trp-nav-item">
            <span>◉</span>
            Assessments
          </div>

          <div className="trp-nav-item">
            <span>♙</span>
            Trainees
          </div>

          <div className="trp-nav-item">
            <span>▤</span>
            Performance
          </div>

          <div className="trp-nav-item">
            <span>🏆</span>
            Certificates
          </div>

          <div className="trp-nav-item active">
            <span>♙</span>
            My Profile
          </div>

          <div className="trp-nav-item">
            <span>⚙</span>
            Settings
          </div>

          <div className="trp-nav-item">
            <span>?</span>
            Help
          </div>

        </nav>

        <div className="trp-sidebar-bottom">
          <div className="trp-logout">
            <FaSignOutAlt />
            Logout
          </div>
        </div>

      </aside>

      {/* MAIN */}
      <main className="trp-main">

        {/* TOPBAR */}
        <header className="trp-topbar">

          <div className="trp-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search courses, trainees..."
            />
          </div>

          <div className="trp-top-actions">

            <div className="trp-notification">
              <FaBell />
              <span>3</span>
            </div>

            <div className="trp-user">

              <div className="trp-avatar-small">
                A
              </div>

              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>

            </div>

          </div>

        </header>

        {/* HEADER */}
        <section className="trp-header">

          <div>
            <div className="trp-heading">

              <span>TRAINER PROFILE</span>

              <h1>My Profile</h1>

              <p>
                Manage your professional information,
                expertise and certifications.
              </p>

            </div>
          </div>

          {!editing ? (
            <button
              className="trp-edit-btn"
              onClick={() => setEditing(true)}
            >
              <FaEdit />
              Edit Profile
            </button>
          ) : (
            <button
              className="trp-save-btn"
              onClick={handleSave}
            >
              <FaSave />
              Save Changes
            </button>
          )}

        </section>

        {/* PROFILE SUMMARY */}
        <section className="trp-profile-card">

          <div className="trp-profile-left">

            <div className="trp-profile-avatar">
              AK
            </div>

            <div>

              <h2>{profile.name}</h2>

              <p>
                <FaBriefcase />
                Senior Technology Trainer
              </p>

              <span className="trp-status">
                Verified Trainer
              </span>

            </div>

          </div>

          <div className="trp-profile-stat">
            <strong>08</strong>
            <span>Courses</span>
          </div>

          <div className="trp-profile-stat">
            <strong>156</strong>
            <span>Trainees</span>
          </div>

          <div className="trp-profile-stat">
            <strong>4.8</strong>
            <span>Rating</span>
          </div>

        </section>

        {/* CONTENT */}
        <section className="trp-content-grid">

          {/* PERSONAL INFORMATION */}
          <div className="trp-card">

            <div className="trp-card-header">

              <div>
                <span className="trp-card-icon">
                  <FaUser />
                </span>

                <div>
                  <h3>Personal Information</h3>
                  <p>Your basic contact information</p>
                </div>
              </div>

            </div>

            <div className="trp-form-grid">

              <div className="trp-field">

                <label>Full Name</label>

                <div className="trp-input-wrap">
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

              <div className="trp-field">

                <label>Email Address</label>

                <div className="trp-input-wrap">
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

              <div className="trp-field">

                <label>Phone Number</label>

                <div className="trp-input-wrap">
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

              <div className="trp-field">

                <label>Location</label>

                <div className="trp-input-wrap">
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
          <div className="trp-card">

            <div className="trp-card-header">

              <div>
                <span className="trp-card-icon">
                  <FaGraduationCap />
                </span>

                <div>
                  <h3>Professional Information</h3>
                  <p>Education and professional experience</p>
                </div>
              </div>

            </div>

            <div className="trp-form-grid">

              <div className="trp-field">

                <label>Highest Qualification</label>

                <div className="trp-input-wrap">
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

              <div className="trp-field">

                <label>Experience</label>

                <div className="trp-input-wrap">
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

          {/* SPECIALIZATION */}
          <div className="trp-card">

            <div className="trp-card-header">

              <div>
                <span className="trp-card-icon">
                  <FaBookOpen />
                </span>

                <div>
                  <h3>Specialization</h3>
                  <p>Areas of professional expertise</p>
                </div>
              </div>

            </div>

            {editing ? (
              <textarea
                value={profile.specialization}
                onChange={(e) =>
                  handleChange(
                    "specialization",
                    e.target.value
                  )
                }
              />
            ) : (
              <div className="trp-tags">
                {profile.specialization
                  .split(",")
                  .map((item, index) => (
                    <span key={index}>
                      {item.trim()}
                    </span>
                  ))}
              </div>
            )}

          </div>

          {/* SKILLS */}
          <div className="trp-card">

            <div className="trp-card-header">

              <div>
                <span className="trp-card-icon">
                  <FaCode />
                </span>

                <div>
                  <h3>Skills</h3>
                  <p>Technical and professional skills</p>
                </div>
              </div>

            </div>

            {editing ? (
              <textarea
                value={profile.skills}
                onChange={(e) =>
                  handleChange(
                    "skills",
                    e.target.value
                  )
                }
              />
            ) : (
              <div className="trp-tags">
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

        {/* BIO */}
        <section className="trp-card trp-bio-card">

          <div className="trp-card-header">

            <div>
              <span className="trp-card-icon">
                <FaUser />
              </span>

              <div>
                <h3>Professional Bio</h3>
                <p>Short description about your expertise</p>
              </div>
            </div>

          </div>

          {editing ? (
            <textarea
              value={profile.bio}
              onChange={(e) =>
                handleChange("bio", e.target.value)
              }
            />
          ) : (
            <p className="trp-bio">
              {profile.bio}
            </p>
          )}

        </section>

        {/* CERTIFICATES */}
        <section className="trp-card trp-certificates">

          <div className="trp-card-header">

            <div>
              <span className="trp-card-icon">
                <FaCertificate />
              </span>

              <div>
                <h3>Professional Certifications</h3>
                <p>Your qualifications and certifications</p>
              </div>
            </div>

          </div>

          <div className="trp-certificate-list">

            {certificates.map((certificate, index) => (

              <div
                className="trp-certificate"
                key={index}
              >

                <div className="trp-certificate-icon">
                  <FaCertificate />
                </div>

                <div className="trp-certificate-info">

                  <h4>{certificate.name}</h4>

                  <p>
                    Issued by {certificate.issuer}
                  </p>

                </div>

                <span className="trp-certificate-year">
                  {certificate.year}
                </span>

                <button className="trp-certificate-btn">
                  View
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* EXPERTISE */}
        <section className="trp-expertise-card">

          <div className="trp-expertise-item">
            <FaStar />
            <div>
              <strong>4.8 / 5</strong>
              <span>Trainer Rating</span>
            </div>
          </div>

          <div className="trp-expertise-item">
            <FaBookOpen />
            <div>
              <strong>08</strong>
              <span>Courses Created</span>
            </div>
          </div>

          <div className="trp-expertise-item">
            <FaUser />
            <div>
              <strong>156</strong>
              <span>Trainees Guided</span>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default TrainerProfile;