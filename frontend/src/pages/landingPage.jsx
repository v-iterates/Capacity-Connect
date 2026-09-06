
import "./LandingPage.css";
import heroBg from "../assets/hero-bg.png";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">✦</div>
            <span>CAPACITY CONNECT</span>
          </div>

          {/* Navigation */}
          <nav className="nav-links">
            <a href="#home" className="active">
              Home
            </a>

            <a href="#features">
              Features
            </a>

            <a href="#about">
              About
            </a>
          </nav>

          {/* Login */}
          <button className="login-btn">
            Login
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >

        {/* Very light overlay */}
        <div className="hero-overlay"></div>

        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-badge">
              AI-POWERED SKILL DEVELOPMENT
            </div>

            <h1>
              Build Your Skills.
              <br />
              <span>Unlock Your Potential.</span>
            </h1>

            <p>
              Capacity Connect helps trainees discover their skill gaps,
              learn the right skills, connect with trainers, and grow their
              careers through personalized learning.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Get Started
                <span>→</span>
              </button>

              <button className="secondary-btn">
                Explore Features
              </button>

            </div>

          </div>


          {/* RIGHT COMPETENCY CARD */}
          <div className="hero-visual">

            <div className="competency-card">

              <div className="card-header">
                <span>Competency Score</span>
                <strong>78%</strong>
              </div>

              <div className="main-progress">
                <div
                  className="main-progress-fill"
                  style={{ width: "78%" }}
                ></div>
              </div>


              {/* Technical Skills */}
              <div className="skill-item">

                <div className="skill-top">
                  <span>Technical Skills</span>
                  <strong>85%</strong>
                </div>

                <div className="skill-progress">
                  <div
                    className="skill-fill technical"
                    style={{ width: "85%" }}
                  ></div>
                </div>

              </div>


              {/* Communication */}
              <div className="skill-item">

                <div className="skill-top">
                  <span>Communication</span>
                  <strong>72%</strong>
                </div>

                <div className="skill-progress">
                  <div
                    className="skill-fill communication"
                    style={{ width: "72%" }}
                  ></div>
                </div>

              </div>


              {/* Problem Solving */}
              <div className="skill-item">

                <div className="skill-top">
                  <span>Problem Solving</span>
                  <strong>76%</strong>
                </div>

                <div className="skill-progress">
                  <div
                    className="skill-fill problem"
                    style={{ width: "76%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section id="features" className="features-section">

        <div className="section-heading">

          <span>OUR PLATFORM</span>

          <h2>
            Everything you need to grow
          </h2>

          <p>
            A complete ecosystem for skill development,
            competency assessment, and career growth.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🎯</div>

            <h3>Skill Assessment</h3>

            <p>
              Identify your strengths and discover
              the skills you need to improve.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📖</div>

            <h3>Personalized Learning</h3>

            <p>
              Get learning recommendations based
              on your competency and goals.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🤖</div>

            <h3>AI Recommendations</h3>

            <p>
              Intelligent recommendations help you
              choose the right learning path.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">👥</div>

            <h3>Trainer Matching</h3>

            <p>
              Connect with trainers who match your
              learning requirements.
            </p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        <div className="about-content">

          <span>ABOUT CAPACITY CONNECT</span>

          <h2>
            Turning skills into opportunities.
          </h2>

          <p>
            Capacity Connect brings trainees, trainers,
            learning resources, and competency analytics
            together on one platform.
          </p>

          <p>
            Our goal is simple — help every learner
            understand where they are, where they need
            to go, and how to get there.
          </p>

        </div>

      </section>

    </div>
  );
} {
<div className="scroll-indicator">
  <span>Scroll to explore</span>
  <div className="scroll-line"></div>
</div> }
<div className="hero-stats">
  <div className="stat">
    <strong>500+</strong>
    <span>Skills</span>
  </div>

  <div className="stat">
    <strong>10K+</strong>
    <span>Learners</span>
  </div>

  <div className="stat">
    <strong>95%</strong>
    <span>Progress</span>
  </div>
</div>

export default LandingPage;


      