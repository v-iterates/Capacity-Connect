import { useState } from "react";
import "./login.css";
import heroBg from "../assets/hero-bg.png";
import { FaCheck } from "react-icons/fa";

function Login() {
  const [role, setRole] = useState("trainee");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const roleInfo = {
    admin: {
      title: "Admin Login",
      description: "Manage users, courses, trainers, and platform activities.",
    },

    trainer: {
      title: "Trainer Login",
      description: "Manage your courses, learners, assessments, and resources.",
    },

    trainee: {
      title: "Trainee Login",
      description: "Continue your learning journey and track your progress.",
    },
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");

    // Temporary frontend login
    console.log("Login submitted:", {
      role,
      email,
      password,
      rememberMe,
    });

    /*
      Later we will replace this with the backend API.

      Example:

      POST /api/auth/login

      {
        email,
        password,
        role
      }
    */
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleCreateAccount = () => {
    console.log("Create account clicked");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked for:", role);
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="login-container">

        {/* =================================================
            LEFT BRAND SECTION
        ================================================= */}

        <div className="login-brand">

          <div className="login-logo">

            <div className="login-logo-icon">
              ✦
            </div>

            <span>
              CAPACITY CONNECT
            </span>

          </div>


          <div className="login-brand-content">

            <span className="login-badge">
              AI-POWERED SKILL DEVELOPMENT
            </span>

            <h1>
              Build Your Skills.
              <br />
              <span>
                Unlock Your Potential.
              </span>
            </h1>

            <p>
              Connect with the right learning opportunities,
              trainers, and resources to grow your career.
            </p>

          </div>

        </div>


        {/* =================================================
            LOGIN CARD
        ================================================= */}

        <div className="login-card">

          {/* Header */}

          <div className="login-header">

            <h2>
              {roleInfo[role].title}
            </h2>

            <p>
              {roleInfo[role].description}
            </p>

          </div>


          {/* =================================================
              ROLE SELECTOR
          ================================================= */}

          <div className="role-login-section">

            <label>
              Login as
            </label>

            <div className="login-role-selector">

              {/* ADMIN */}

              <button
                type="button"
                className={
                  role === "admin"
                    ? "login-role-btn active"
                    : "login-role-btn"
                }
                onClick={() =>
                  handleRoleChange("admin")
                }
              >
                <span className="role-symbol">
                  A
                </span>

                <span>
                  Admin
                </span>
              </button>


              {/* TRAINER */}

              <button
                type="button"
                className={
                  role === "trainer"
                    ? "login-role-btn active"
                    : "login-role-btn"
                }
                onClick={() =>
                  handleRoleChange("trainer")
                }
              >
                <span className="role-symbol">
                  T
                </span>

                <span>
                  Trainer
                </span>
              </button>


              {/* TRAINEE */}

              <button
                type="button"
                className={
                  role === "trainee"
                    ? "login-role-btn active"
                    : "login-role-btn"
                }
                onClick={() =>
                  handleRoleChange("trainee")
                }
              >
                <span className="role-symbol">
                  L
                </span>

                <span>
                  Trainee
                </span>
              </button>

            </div>

          </div>


          {/* =================================================
              LOGIN FORM
          ================================================= */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="form-group">

              <div className="password-label-row">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>

              </div>


              <div className="input-wrapper">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* REMEMBER ME */}

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span className="custom-checkbox">

                  {rememberMe && (
                    <FaCheck />
                  )}

                </span>

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit-btn"
            >
              Login as{" "}
              {role.charAt(0).toUpperCase() +
                role.slice(1)}

              <span>
                →
              </span>
            </button>

          </form>


          {/* =================================================
              SIGNUP
          ================================================= */}

          {role !== "admin" && (
            <div className="signup-section">

              <span>
                Don't have an account?
              </span>

              <button
                type="button"
                className="signup-link"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>

            </div>
          )}


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="login-divider">
            <span>
              or
            </span>
          </div>


          {/* GOOGLE */}

          <button
            type="button"
            className="google-login-btn"
            onClick={handleGoogleLogin}
          >

            <span className="google-icon">
              G
            </span>

            Continue with Google

          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;