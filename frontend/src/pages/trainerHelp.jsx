import React, { useState } from "react";
import {
  FaHome,
  FaBookOpen,
  FaPlusCircle,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCertificate,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSearch,
  FaBell,
  FaChevronDown,
  FaChevronUp,
  FaHeadset,
  FaBook,
  FaExclamationCircle,
  FaEnvelope,
  FaPhone,
  FaLifeRing,
} from "react-icons/fa";
import "./trainerHelp.css";

function TrainerHelp() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [message, setMessage] = useState("");

  const faqs = [
    {
      question: "How can I create a new course?",
      answer:
        "Go to My Courses from the sidebar and select Create Course. Add the course information, learning objectives and resources, then save it as a draft or publish it.",
    },
    {
      question: "How can I create an assessment?",
      answer:
        "Open Assessments from the sidebar and choose Create Assessment. Add the assessment details and MCQ questions, select the correct answers, and publish the assessment.",
    },
    {
      question: "How can I monitor trainee performance?",
      answer:
        "Open Trainees or Performance from the sidebar. You can search trainees, view course progress, assessment scores and identify trainees who may need additional support.",
    },
    {
      question: "How do I upload learning resources?",
      answer:
        "While creating or editing a course, use the Course Resources section to upload study materials, presentations and recorded lectures.",
    },
    {
      question: "How are certificates issued?",
      answer:
        "Open Certificates from the sidebar to view eligible trainees. You can review their performance and issue certificates when they meet the required criteria.",
    },
    {
      question: "What should I do if I find a technical issue?",
      answer:
        "Use the Contact Support section below to report the issue. Include a short description and relevant details so the support team can assist you quickly.",
    },
  ];

  const guides = [
    {
      icon: <FaBook />,
      title: "Getting Started",
      text: "Learn the basics of managing your trainer account.",
    },
    {
      icon: <FaBookOpen />,
      title: "Course Management",
      text: "Learn how to create courses and manage learning resources.",
    },
    {
      icon: <FaClipboardList />,
      title: "Assessment Guide",
      text: "Learn how to create MCQ assessments and track submissions.",
    },
    {
      icon: <FaUsers />,
      title: "Trainee Management",
      text: "Learn how to monitor trainee progress and performance.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleSupport = () => {
    setMessage(
      "Support request started. Our support team will contact you shortly."
    );

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="trainer-help-page">
      {/* Sidebar */}
      <aside className="trainer-help-sidebar">
        <div className="th-logo">
          <div className="th-logo-icon">✦</div>
          <div className="th-logo-text">CAPACITY CONNECT</div>
        </div>

        <nav className="th-nav">
          <div className="th-nav-section">MAIN</div>

          <a href="#" className="th-nav-item">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaBookOpen />
            <span>My Courses</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaPlusCircle />
            <span>Create Course</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaClipboardList />
            <span>Assessments</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaUsers />
            <span>Trainees</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaChartBar />
            <span>Performance</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaCertificate />
            <span>Certificates</span>
          </a>

          <div className="th-nav-section">ACCOUNT</div>

          <a href="#" className="th-nav-item">
            <FaUser />
            <span>My Profile</span>
          </a>

          <a href="#" className="th-nav-item">
            <FaCog />
            <span>Settings</span>
          </a>

          <a href="#" className="th-nav-item active">
            <FaQuestionCircle />
            <span>Help</span>
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="trainer-help-main">
        {/* Topbar */}
        <header className="th-topbar">
          <div className="th-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search help..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="th-topbar-right">
            <button className="th-notification">
              <FaBell />
              <span>3</span>
            </button>

            <div className="th-profile">
              <div className="th-avatar">A</div>
              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>
              <FaChevronDown />
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="th-content">
          <div className="th-page-heading">
            <div>
              <span className="th-eyebrow">SUPPORT CENTER</span>
              <h1>Help & Support</h1>
              <p>
                Find answers, explore guides and get help with your trainer
                account.
              </p>
            </div>

            <div className="th-help-icon">
              <FaLifeRing />
            </div>
          </div>

          {/* Search */}
          <div className="th-big-search">
            <FaSearch />
            <input
              type="text"
              placeholder="What can we help you with?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Quick Guides */}
          <section className="th-section">
            <div className="th-section-title">
              <div>
                <h2>Trainer Guides</h2>
                <p>Quick resources to help you use Capacity Connect.</p>
              </div>
            </div>

            <div className="th-guides-grid">
              {guides.map((guide, index) => (
                <div className="th-guide-card" key={index}>
                  <div className="th-guide-icon">{guide.icon}</div>
                  <div>
                    <h3>{guide.title}</h3>
                    <p>{guide.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="th-section">
            <div className="th-section-title">
              <div>
                <h2>Frequently Asked Questions</h2>
                <p>Find quick answers to common trainer questions.</p>
              </div>
            </div>

            <div className="th-faq-list">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    className={`th-faq-item ${
                      openFaq === index ? "open" : ""
                    }`}
                    key={index}
                  >
                    <button
                      className="th-faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>

                    {openFaq === index && (
                      <div className="th-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="th-no-results">
                  <FaQuestionCircle />
                  <p>No help articles found for "{search}".</p>
                </div>
              )}
            </div>
          </section>

          {/* Support */}
          <section className="th-support-card">
            <div className="th-support-left">
              <div className="th-support-icon">
                <FaHeadset />
              </div>

              <div>
                <span>NEED MORE HELP?</span>
                <h2>Contact Support</h2>
                <p>
                  Can't find what you're looking for? Our support team is here
                  to help.
                </p>
              </div>
            </div>

            <button className="th-support-button" onClick={handleSupport}>
              Contact Support
            </button>
          </section>

          {/* Contact Options */}
          <section className="th-contact-grid">
            <div className="th-contact-card">
              <div className="th-contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email Support</h3>
                <p>support@capacityconnect.com</p>
              </div>
            </div>

            <div className="th-contact-card">
              <div className="th-contact-icon">
                <FaPhone />
              </div>
              <div>
                <h3>Phone Support</h3>
                <p>+91 1800-123-4567</p>
              </div>
            </div>

            <div className="th-contact-card">
              <div className="th-contact-icon">
                <FaExclamationCircle />
              </div>
              <div>
                <h3>Report an Issue</h3>
                <p>Report a technical problem</p>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Toast */}
      {message && <div className="th-toast">{message}</div>}
    </div>
  );
}

export default TrainerHelp;