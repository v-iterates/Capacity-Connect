import { useState } from "react";
import "./signup.css";
import heroBg from "../assets/hero-bg.png";
import {
  FaCheck,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaUser,
  FaGoogle,
} from "react-icons/fa";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "trainee",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    setError("");

    console.log("Signup submitted:", formData);

    // Backend registration will be connected here later.
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");

    // Real Google OAuth will be connected here later.
  };

  const handleLogin = () => {
    console.log("Login clicked");

    // Later we will navigate to /login using React Router.
  };

  return (
    <div
      className="signup-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="signup-container">

        {/* ================= LEFT BRAND SECTION ================= */}

        <div className="signup-brand">

          <div className="signup-logo">
            <div className="signup-logo-icon">
              ✦
            </div>

            <span>CAPACITY CONNECT</span>
          </div>

          <div className="signup-brand-content">

            <span className="signup-badge">
              AI-POWERED SKILL DEVELOPMENT
            </span>

            <h1>
              Start Your Journey.
              <br />
              <span>Grow Your Potential.</span>
            </h1>

            <p>
              Join Capacity Connect and discover learning
              opportunities, expert trainers, and resources
              designed to help you build your career.
            </p>

            <div className="signup-benefits">

              <div className="signup-benefit">
                <span className="benefit-icon">
                  <FaCheck />
                </span>
                <span>Learn from expert trainers</span>
              </div>

              <div className="signup-benefit">
                <span className="benefit-icon">
                  <FaCheck />
                </span>
                <span>Build industry-ready skills</span>
              </div>

              <div className="signup-benefit">
                <span className="benefit-icon">
                  <FaCheck />
                </span>
                <span>Track your learning progress</span>
              </div>

            </div>

          </div>

        </div>


        {/* ================= SIGNUP CARD ================= */}

        <div className="signup-card">

          <div className="signup-header">

            <h2>
              Create Account
            </h2>

            <p>
              Join Capacity Connect today
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* ================= FULL NAME ================= */}

            <div className="signup-form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  <FaUser />
                </span>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* ================= EMAIL ================= */}

            <div className="signup-form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  <FaEnvelope />
                </span>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* ================= ROLE ================= */}

            <div className="signup-form-group">

              <label>
                I am a
              </label>

              <div className="role-selection">

                <button
                  type="button"
                  className={
                    formData.role === "trainee"
                      ? "role-btn active"
                      : "role-btn"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      role: "trainee",
                    })
                  }
                >
                  Trainee
                </button>

                <button
                  type="button"
                  className={
                    formData.role === "trainer"
                      ? "role-btn active"
                      : "role-btn"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      role: "trainer",
                    })
                  }
                >
                  Trainer
                </button>

              </div>

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="signup-form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  <FaLock />
                </span>

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>


            {/* ================= CONFIRM PASSWORD ================= */}

            <div className="signup-form-group">

              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="signup-input-wrapper">

                <span className="signup-input-icon">
                  <FaLock />
                </span>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>


            {/* ================= TERMS ================= */}

            <label className="terms-checkbox">

              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) =>
                  setAgreeTerms(e.target.checked)
                }
              />

              <span className="terms-custom-checkbox">

                {agreeTerms && <FaCheck />}

              </span>

              <span className="terms-text">
                I agree to the{" "}
                <button
                  type="button"
                  className="terms-link"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(
                      "Terms & Conditions clicked"
                    );
                  }}
                >
                  Terms & Conditions
                </button>
              </span>

            </label>


            {/* ================= ERROR ================= */}

            {error && (
              <div className="signup-error">
                {error}
              </div>
            )}


            {/* ================= CREATE ACCOUNT ================= */}

            <button
              type="submit"
              className="signup-submit-btn"
            >
              Create Account

              <span>
                →
              </span>

            </button>

          </form>


          {/* ================= DIVIDER ================= */}

          <div className="signup-divider">
            <span>or</span>
          </div>


          {/* ================= GOOGLE ================= */}

          <button
            type="button"
            className="google-signup-btn"
            onClick={handleGoogleSignup}
          >
            <FaGoogle />

            <span>
              Continue with Google
            </span>
          </button>


          {/* ================= LOGIN ================= */}

          <div className="login-redirect">

            <span>
              Already have an account?
            </span>

            <button
              type="button"
              className="login-link"
              onClick={handleLogin}
            >
              Login
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Signup;