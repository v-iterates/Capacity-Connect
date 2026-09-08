import React, { useState } from "react";
import {
  FaArrowLeft,
  FaClipboardList,
  FaPlus,
  FaTrash,
  FaSave,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import "./trainerAssessment.css";

function TrainerAssessment() {
  const [assessmentTitle, setAssessmentTitle] = useState("");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState("");

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [marks, setMarks] = useState("1");

  const [questions, setQuestions] = useState([]);
  const [message, setMessage] = useState("");

  // Add Question
  const addQuestion = () => {
    if (
      question.trim() === "" ||
      options.A.trim() === "" ||
      options.B.trim() === "" ||
      options.C.trim() === "" ||
      options.D.trim() === "" ||
      correctAnswer === ""
    ) {
      setMessage("Please complete all question fields.");
      return;
    }

    const newQuestion = {
      question: question.trim(),
      options: { ...options },
      correctAnswer,
      marks,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");

    setOptions({
      A: "",
      B: "",
      C: "",
      D: "",
    });

    setCorrectAnswer("");
    setMarks("1");
    setMessage("");
  };

  // Delete Question
  const removeQuestion = (index) => {
    setQuestions(
      questions.filter((_, i) => i !== index)
    );
  };

  // Update option
  const handleOptionChange = (option, value) => {
    setOptions({
      ...options,
      [option]: value,
    });
  };

  // Save Draft
  const saveDraft = () => {
    setMessage(
      "Assessment saved as draft successfully."
    );
  };

  // Publish Assessment
  const publishAssessment = () => {
    if (
      !assessmentTitle ||
      !course ||
      !subject ||
      !duration ||
      !deadline
    ) {
      setMessage(
        "Please complete all assessment information."
      );
      return;
    }

    if (questions.length === 0) {
      setMessage(
        "Please add at least one question."
      );
      return;
    }

    setMessage(
      "Assessment published successfully."
    );
  };

  return (
    <div className="trainer-assessment-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="trainer-assessment-sidebar">

        {/* Logo */}

        <div className="ta-logo">

          <div className="ta-logo-icon">
            <span>✦</span>
          </div>

          <div className="ta-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>

        </div>


        {/* Navigation */}

        <nav className="ta-nav">

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>▣</span>
            Dashboard
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>📚</span>
            My Courses
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>＋</span>
            Create Course
          </a>

          <a
            href="#"
            className="ta-nav-item active"
          >
            <span>📝</span>
            Assessments
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>👥</span>
            Trainees
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>📊</span>
            Performance
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>🏆</span>
            Certificates
          </a>

          <div className="ta-nav-divider"></div>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>👤</span>
            My Profile
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>⚙</span>
            Settings
          </a>

          <a
            href="#"
            className="ta-nav-item"
          >
            <span>?</span>
            Help
          </a>

        </nav>


        {/* Sidebar User */}

        <div className="ta-sidebar-user">

          <div className="ta-user-avatar">
            A
          </div>

          <div>
            <strong>User</strong>
            <span>Trainer</span>
          </div>

          <span className="ta-user-more">
            ⋮
          </span>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="trainer-assessment-main">


        {/* ================= TOPBAR ================= */}

        <header className="ta-topbar">

          <div className="ta-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search..."
            />

          </div>


          <div className="ta-top-right">

            <button className="ta-notification">
              🔔
              <span></span>
            </button>


            <div className="ta-profile">

              <div className="ta-profile-avatar">
                A
              </div>

              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>

              <span>⌄</span>

            </div>

          </div>

        </header>


        {/* ================= PAGE HEADER ================= */}

        <section className="ta-page-header">

          <div className="ta-header-left">

            <button className="ta-back-btn">
              <FaArrowLeft />
            </button>

            <div>

              <p>ASSESSMENT MANAGEMENT</p>

              <h1>
                Create Assessment
              </h1>

              <span>
                Create MCQ assessments and evaluate
                trainee knowledge.
              </span>

            </div>

          </div>


          <div className="ta-header-icon">
            <FaClipboardList />
          </div>

        </section>


        {/* ================= MESSAGE ================= */}

        {message && (

          <div className="ta-message">

            <FaCheckCircle />

            <span>
              {message}
            </span>

            <button
              onClick={() => setMessage("")}
            >
              ×
            </button>

          </div>

        )}


        {/* ================= ASSESSMENT INFORMATION ================= */}

        <section className="ta-card">

          <div className="ta-card-header">

            <div className="ta-section-number">
              01
            </div>

            <div>

              <h2>
                Assessment Information
              </h2>

              <p>
                Enter the basic details of the assessment.
              </p>

            </div>

          </div>


          <div className="ta-form-grid">


            {/* Title */}

            <div className="ta-form-group ta-full">

              <label>
                Assessment Title <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Python Fundamentals Assessment"
                value={assessmentTitle}
                onChange={(e) =>
                  setAssessmentTitle(e.target.value)
                }
              />

            </div>


            {/* Course */}

            <div className="ta-form-group">

              <label>
                Select Course <span>*</span>
              </label>

              <select
                value={course}
                onChange={(e) =>
                  setCourse(e.target.value)
                }
              >

                <option value="">
                  Select course
                </option>

                <option>
                  Python for Data Science
                </option>

                <option>
                  Web Development Fundamentals
                </option>

                <option>
                  Data Structures & Algorithms
                </option>

                <option>
                  Machine Learning Basics
                </option>

                <option>
                  Cloud Computing Essentials
                </option>

              </select>

            </div>


            {/* Subject */}

            <div className="ta-form-group">

              <label>
                Subject <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Python Basics"
                value={subject}
                onChange={(e) =>
                  setSubject(e.target.value)
                }
              />

            </div>


            {/* Duration */}

            <div className="ta-form-group">

              <label>
                Duration <span>*</span>
              </label>

              <div className="ta-input-with-unit">

                <input
                  type="number"
                  min="1"
                  placeholder="30"
                  value={duration}
                  onChange={(e) =>
                    setDuration(e.target.value)
                  }
                />

                <span>Minutes</span>

              </div>

            </div>


            {/* Deadline */}

            <div className="ta-form-group">

              <label>
                Submission Deadline <span>*</span>
              </label>

              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) =>
                  setDeadline(e.target.value)
                }
              />

            </div>

          </div>

        </section>


        {/* ================= ADD QUESTIONS ================= */}

        <section className="ta-card">

          <div className="ta-card-header">

            <div className="ta-section-number">
              02
            </div>

            <div>

              <h2>
                Add Questions
              </h2>

              <p>
                Create multiple-choice questions
                for your assessment.
              </p>

            </div>

          </div>


          {/* Question */}

          <div className="ta-form-group">

            <label>
              Question <span>*</span>
            </label>

            <textarea
              rows="3"
              placeholder="Enter your question..."
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
            ></textarea>

          </div>


          {/* Options */}

          <div className="ta-options-grid">

            {["A", "B", "C", "D"].map(
              (option) => (

                <div
                  className="ta-option-group"
                  key={option}
                >

                  <label>
                    Option {option}
                    <span>*</span>
                  </label>

                  <div className="ta-option-input">

                    <div className="ta-option-letter">
                      {option}
                    </div>

                    <input
                      type="text"
                      placeholder={`Enter option ${option}`}
                      value={options[option]}
                      onChange={(e) =>
                        handleOptionChange(
                          option,
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

              )
            )}

          </div>


          {/* Correct Answer + Marks */}

          <div className="ta-answer-row">


            <div className="ta-form-group">

              <label>
                Correct Answer <span>*</span>
              </label>

              <select
                value={correctAnswer}
                onChange={(e) =>
                  setCorrectAnswer(e.target.value)
                }
              >

                <option value="">
                  Select correct option
                </option>

                <option value="A">
                  Option A
                </option>

                <option value="B">
                  Option B
                </option>

                <option value="C">
                  Option C
                </option>

                <option value="D">
                  Option D
                </option>

              </select>

            </div>


            <div className="ta-form-group">

              <label>
                Marks
              </label>

              <input
                type="number"
                min="1"
                value={marks}
                onChange={(e) =>
                  setMarks(e.target.value)
                }
              />

            </div>


            <button
              className="ta-add-question-btn"
              onClick={addQuestion}
            >

              <FaPlus />

              Add Question

            </button>

          </div>

        </section>


        {/* ================= QUESTIONS LIST ================= */}

        {questions.length > 0 && (

          <section className="ta-card">

            <div className="ta-card-header">

              <div className="ta-section-number">
                03
              </div>

              <div>

                <h2>
                  Assessment Questions
                </h2>

                <p>
                  {questions.length} question
                  {questions.length !== 1
                    ? "s"
                    : ""} added
                </p>

              </div>

            </div>


            <div className="ta-question-list">

              {questions.map(
                (item, index) => (

                  <div
                    className="ta-question-item"
                    key={index}
                  >

                    <div className="ta-question-top">

                      <div className="ta-question-number">
                        Q{index + 1}
                      </div>

                      <div className="ta-question-text">
                        {item.question}
                      </div>

                      <div className="ta-question-marks">
                        {item.marks} mark
                        {item.marks !== "1"
                          ? "s"
                          : ""}
                      </div>

                      <button
                        className="ta-delete-question"
                        onClick={() =>
                          removeQuestion(index)
                        }
                      >
                        <FaTrash />
                      </button>

                    </div>


                    <div className="ta-saved-options">

                      {Object.entries(
                        item.options
                      ).map(
                        ([key, value]) => (

                          <div
                            className={`ta-saved-option ${
                              item.correctAnswer === key
                                ? "correct"
                                : ""
                            }`}
                            key={key}
                          >

                            <span>
                              {key}
                            </span>

                            <p>
                              {value}
                            </p>

                            {item.correctAnswer ===
                              key && (
                              <FaCheckCircle />
                            )}

                          </div>

                        )
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          </section>

        )}


        {/* ================= SUMMARY ================= */}

        <div className="ta-summary">

          <div className="ta-summary-item">

            <FaClipboardList />

            <div>
              <span>
                Questions
              </span>

              <strong>
                {questions.length}
              </strong>
            </div>

          </div>


          <div className="ta-summary-item">

            <FaClock />

            <div>
              <span>
                Duration
              </span>

              <strong>
                {duration
                  ? `${duration} min`
                  : "--"}
              </strong>
            </div>

          </div>


          <div className="ta-summary-item">

            <FaCheckCircle />

            <div>
              <span>
                Total Marks
              </span>

              <strong>
                {questions.reduce(
                  (total, item) =>
                    total + Number(item.marks),
                  0
                )}
              </strong>
            </div>

          </div>

        </div>


        {/* ================= ACTIONS ================= */}

        <section className="ta-actions">

          <button
            className="ta-save-btn"
            onClick={saveDraft}
          >

            <FaSave />

            Save as Draft

          </button>


          <button
            className="ta-publish-btn"
            onClick={publishAssessment}
          >

            <FaPaperPlane />

            Publish Assessment

          </button>

        </section>


        <p className="ta-footer-note">

          Published assessments will be
          available to enrolled trainees.

        </p>

      </main>

    </div>
  );
}

export default TrainerAssessment;