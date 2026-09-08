import React, { useMemo, useState } from "react";
import {
  FaBell,
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
  FaPaperPlane,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaBullhorn,
} from "react-icons/fa";
import "./adminNotifications.css";

const initialAnnouncements = [
  {
    id: 1,
    title: "New Python for Data Science Course Available",
    message:
      "A new Python for Data Science course is now available. Trainees can enroll from the course section.",
    audience: "Trainees",
    type: "Course Update",
    date: "06 Sep 2026",
    time: "10:30 AM",
    status: "Published",
    author: "Admin",
  },
  {
    id: 2,
    title: "Assessment Deadline Reminder",
    message:
      "Python Fundamentals Assessment deadline is approaching. Please complete your assessment before the deadline.",
    audience: "Trainees",
    type: "Reminder",
    date: "06 Sep 2026",
    time: "09:00 AM",
    status: "Published",
    author: "Admin",
  },
  {
    id: 3,
    title: "Trainer Meeting - September",
    message:
      "All trainers are requested to attend the monthly trainer coordination meeting.",
    audience: "Trainers",
    type: "Announcement",
    date: "08 Sep 2026",
    time: "02:00 PM",
    status: "Scheduled",
    author: "Admin",
  },
  {
    id: 4,
    title: "Platform Maintenance Notice",
    message:
      "Capacity Connect will undergo scheduled maintenance. Users may experience temporary service interruption.",
    audience: "Everyone",
    type: "System Notice",
    date: "10 Sep 2026",
    time: "11:00 PM",
    status: "Scheduled",
    author: "Admin",
  },
  {
    id: 5,
    title: "Certificate Achievement Update",
    message:
      "Congratulations to all trainees who successfully completed their courses and received certificates.",
    audience: "Everyone",
    type: "Achievement",
    date: "03 Sep 2026",
    time: "04:30 PM",
    status: "Published",
    author: "Admin",
  },
];

function AdminNotifications() {
  const [announcements, setAnnouncements] = useState(
    initialAnnouncements
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [audienceFilter, setAudienceFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] =
    useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState(null);

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    audience: "Everyone",
    type: "Announcement",
    date: "",
    time: "",
    status: "Draft",
  });

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((item) => {
      const searchMatch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.message.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" || item.status === statusFilter;

      const audienceMatch =
        audienceFilter === "All" ||
        item.audience === audienceFilter;

      return searchMatch && statusMatch && audienceMatch;
    });
  }, [
    announcements,
    search,
    statusFilter,
    audienceFilter,
  ]);

  const totalAnnouncements = announcements.length;

  const publishedCount = announcements.filter(
    (item) => item.status === "Published"
  ).length;

  const scheduledCount = announcements.filter(
    (item) => item.status === "Scheduled"
  ).length;

  const draftCount = announcements.filter(
    (item) => item.status === "Draft"
  ).length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      message: "",
      audience: "Everyone",
      type: "Announcement",
      date: "",
      time: "",
      status: "Draft",
    });

    setEditingAnnouncement(null);
  };

  const openCreateForm = () => {
    resetForm();
    setShowForm(true);
  };

  const openEditForm = (announcement) => {
    setEditingAnnouncement(announcement);

    setFormData({
      title: announcement.title,
      message: announcement.message,
      audience: announcement.audience,
      type: announcement.type,
      date: announcement.date,
      time: announcement.time,
      status: announcement.status,
    });

    setShowForm(true);
  };

  const saveAnnouncement = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.message.trim()) {
      alert("Please enter announcement title and message.");
      return;
    }

    if (editingAnnouncement) {
      setAnnouncements((prev) =>
        prev.map((item) =>
          item.id === editingAnnouncement.id
            ? {
                ...item,
                ...formData,
              }
            : item
        )
      );
    } else {
      const newAnnouncement = {
        id: Date.now(),
        ...formData,
        author: "Admin",
        date:
          formData.date ||
          new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        time: formData.time || "Now",
      };

      setAnnouncements((prev) => [
        newAnnouncement,
        ...prev,
      ]);
    }

    setShowForm(false);
    resetForm();
  };

  const deleteAnnouncement = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this announcement?"
    );

    if (!confirmed) return;

    setAnnouncements((prev) =>
      prev.filter((item) => item.id !== id)
    );

    setSelectedAnnouncement(null);
  };

  const publishAnnouncement = (id) => {
    setAnnouncements((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Published",
            }
          : item
      )
    );
  };

  return (
    <div className="notifications-admin-page">
      {/* SIDEBAR */}
      <aside className="notifications-sidebar">
        <div className="notifications-logo">
          <div className="notifications-logo-icon">
            <span>✦</span>
          </div>

          <div className="notifications-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="notifications-nav">
          <p className="notifications-nav-title">MAIN</p>

          <a href="#" className="notifications-nav-item">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="#" className="notifications-nav-item">
            <span>♙</span>
            User Management
          </a>

          <a href="#" className="notifications-nav-item">
            <span>▣</span>
            Course Management
          </a>

          <a href="#" className="notifications-nav-item">
            <span>✓</span>
            Assessment Management
          </a>

          <a href="#" className="notifications-nav-item">
            <span>🏆</span>
            Certificate Management
          </a>

          <a
            href="#"
            className="notifications-nav-item notifications-nav-active"
          >
            <FaBell />
            Notifications
          </a>

          <p className="notifications-nav-title notifications-space">
            SYSTEM
          </p>

          <a href="#" className="notifications-nav-item">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="notifications-nav-item">
            <span>?</span>
            Help & Support
          </a>
        </nav>

        <div className="notifications-admin-profile">
          <div className="notifications-admin-avatar">
            A
          </div>

          <div>
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="notifications-main">
        {/* TOPBAR */}
        <header className="notifications-topbar">
          <div className="notifications-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search announcements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="notifications-top-actions">
            <button className="notifications-bell">
              <FaBell />
              <span>3</span>
            </button>

            <div className="notifications-user-info">
              <div className="notifications-user-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="notifications-content">
          <div className="notifications-page-header">
            <div>
              <span className="notifications-eyebrow">
                ADMINISTRATION
              </span>

              <h1>Notifications & Announcements</h1>

              <p>
                Create announcements and keep trainees and trainers
                informed.
              </p>
            </div>

            <button
              className="notifications-create-btn"
              onClick={openCreateForm}
            >
              <FaPlus />
              Create Announcement
            </button>
          </div>

          {/* STATS */}
          <div className="notifications-stats-grid">
            <div className="notifications-stat-card">
              <div className="notifications-stat-icon">
                <FaBullhorn />
              </div>

              <div>
                <span>Total Announcements</span>
                <strong>{totalAnnouncements}</strong>
                <small>All announcements</small>
              </div>
            </div>

            <div className="notifications-stat-card">
              <div className="notifications-stat-icon published">
                <FaCheckCircle />
              </div>

              <div>
                <span>Published</span>
                <strong>{publishedCount}</strong>
                <small>Currently visible</small>
              </div>
            </div>

            <div className="notifications-stat-card">
              <div className="notifications-stat-icon scheduled">
                <FaClock />
              </div>

              <div>
                <span>Scheduled</span>
                <strong>{scheduledCount}</strong>
                <small>Upcoming announcements</small>
              </div>
            </div>

            <div className="notifications-stat-card">
              <div className="notifications-stat-icon draft">
                <FaEdit />
              </div>

              <div>
                <span>Drafts</span>
                <strong>{draftCount}</strong>
                <small>Not published</small>
              </div>
            </div>
          </div>

          {/* TOOLBAR */}
          <div className="notifications-toolbar">
            <div className="notifications-toolbar-title">
              <FaBell />

              <div>
                <h2>All Announcements</h2>

                <span>
                  Showing {filteredAnnouncements.length}{" "}
                  announcements
                </span>
              </div>
            </div>

            <div className="notifications-filters">
              <select
                value={audienceFilter}
                onChange={(e) =>
                  setAudienceFilter(e.target.value)
                }
              >
                <option value="All">All Audiences</option>
                <option value="Everyone">Everyone</option>
                <option value="Trainees">Trainees</option>
                <option value="Trainers">Trainers</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
              >
                <option value="All">All Status</option>
                <option value="Published">Published</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          {/* ANNOUNCEMENT CARDS */}
          <div className="notifications-list">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <div
                  className="notification-card"
                  key={announcement.id}
                >
                  <div className="notification-card-icon">
                    <FaBell />
                  </div>

                  <div className="notification-card-content">
                    <div className="notification-card-top">
                      <div>
                        <span className="notification-type">
                          {announcement.type}
                        </span>

                        <h3>{announcement.title}</h3>
                      </div>

                      <span
                        className={`notification-status ${announcement.status.toLowerCase()}`}
                      >
                        {announcement.status}
                      </span>
                    </div>

                    <p>{announcement.message}</p>

                    <div className="notification-meta">
                      <span>
                        <FaUsers />
                        {announcement.audience}
                      </span>

                      <span>
                        <FaClock />
                        {announcement.date} ·{" "}
                        {announcement.time}
                      </span>

                      <span>
                        By {announcement.author}
                      </span>
                    </div>
                  </div>

                  <div className="notification-actions">
                    <button
                      className="notification-view"
                      title="View"
                      onClick={() =>
                        setSelectedAnnouncement(announcement)
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      className="notification-edit"
                      title="Edit"
                      onClick={() =>
                        openEditForm(announcement)
                      }
                    >
                      <FaEdit />
                    </button>

                    {announcement.status !== "Published" && (
                      <button
                        className="notification-publish"
                        title="Publish"
                        onClick={() =>
                          publishAnnouncement(
                            announcement.id
                          )
                        }
                      >
                        <FaPaperPlane />
                      </button>
                    )}

                    <button
                      className="notification-delete"
                      title="Delete"
                      onClick={() =>
                        deleteAnnouncement(announcement.id)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="notifications-empty">
                <FaBell />

                <h3>No announcements found</h3>

                <p>
                  Try changing your search or filter.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* CREATE / EDIT MODAL */}
      {showForm && (
        <div className="notifications-modal-overlay">
          <div className="notifications-form-modal">
            <div className="notifications-modal-header">
              <div>
                <span>ADMIN PANEL</span>

                <h2>
                  {editingAnnouncement
                    ? "Edit Announcement"
                    : "Create Announcement"}
                </h2>
              </div>

              <button
                className="notifications-close-btn"
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={saveAnnouncement}>
              <div className="notification-form-group">
                <label>Announcement Title</label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter announcement title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="notification-form-group">
                <label>Message</label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your announcement..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="notification-form-row">
                <div className="notification-form-group">
                  <label>Audience</label>

                  <select
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                  >
                    <option value="Everyone">
                      Everyone
                    </option>

                    <option value="Trainees">
                      Trainees
                    </option>

                    <option value="Trainers">
                      Trainers
                    </option>
                  </select>
                </div>

                <div className="notification-form-group">
                  <label>Type</label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="Announcement">
                      Announcement
                    </option>

                    <option value="Course Update">
                      Course Update
                    </option>

                    <option value="Reminder">
                      Reminder
                    </option>

                    <option value="System Notice">
                      System Notice
                    </option>

                    <option value="Achievement">
                      Achievement
                    </option>
                  </select>
                </div>
              </div>

              <div className="notification-form-row">
                <div className="notification-form-group">
                  <label>Date</label>

                  <input
                    type="text"
                    name="date"
                    placeholder="e.g. 10 Sep 2026"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="notification-form-group">
                  <label>Time</label>

                  <input
                    type="text"
                    name="time"
                    placeholder="e.g. 10:00 AM"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="notification-form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Draft">Draft</option>
                  <option value="Scheduled">
                    Scheduled
                  </option>
                  <option value="Published">
                    Published
                  </option>
                </select>
              </div>

              <div className="notification-form-actions">
                <button
                  type="button"
                  className="notification-cancel-btn"
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="notification-save-btn"
                >
                  <FaCheckCircle />

                  {editingAnnouncement
                    ? "Save Changes"
                    : "Create Announcement"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {selectedAnnouncement && (
        <div
          className="notifications-modal-overlay"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            className="notification-view-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="notifications-modal-header">
              <div>
                <span>ANNOUNCEMENT DETAILS</span>

                <h2>{selectedAnnouncement.title}</h2>
              </div>

              <button
                className="notifications-close-btn"
                onClick={() =>
                  setSelectedAnnouncement(null)
                }
              >
                ×
              </button>
            </div>

            <div className="notification-detail-icon">
              <FaBullhorn />
            </div>

            <p className="notification-detail-message">
              {selectedAnnouncement.message}
            </p>

            <div className="notification-detail-grid">
              <div>
                <span>Audience</span>
                <strong>
                  {selectedAnnouncement.audience}
                </strong>
              </div>

              <div>
                <span>Type</span>
                <strong>
                  {selectedAnnouncement.type}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedAnnouncement.status}
                </strong>
              </div>

              <div>
                <span>Date & Time</span>
                <strong>
                  {selectedAnnouncement.date} ·{" "}
                  {selectedAnnouncement.time}
                </strong>
              </div>

              <div>
                <span>Created By</span>
                <strong>
                  {selectedAnnouncement.author}
                </strong>
              </div>
            </div>

            <div className="notification-view-actions">
              {selectedAnnouncement.status !==
                "Published" && (
                <button
                  className="notification-modal-publish"
                  onClick={() => {
                    publishAnnouncement(
                      selectedAnnouncement.id
                    );
                    setSelectedAnnouncement(null);
                  }}
                >
                  <FaPaperPlane />
                  Publish
                </button>
              )}

              <button
                className="notification-modal-edit"
                onClick={() => {
                  openEditForm(selectedAnnouncement);
                  setSelectedAnnouncement(null);
                }}
              >
                <FaEdit />
                Edit
              </button>

              <button
                className="notification-modal-close"
                onClick={() =>
                  setSelectedAnnouncement(null)
                }
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

export default AdminNotifications;