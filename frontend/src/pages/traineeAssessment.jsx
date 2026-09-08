import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPaperPlane,
  FaBookOpen,
} from "react-icons/fa";

import "./traineeAssessment.css";

function TraineeAssessment() {
  const assessment = {
    title: "Python Fundamentals Assessment",
    course: "Python for Data Science",
    subject: "Python Basics",
    duration: 10,
    deadline: "08 Sep 2026, 04:00 PM",
    questions: [
      {
        question: "Which of the following is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: "def",
        marks: 1,
      },
      {
        question: "Which data type is used to store True or False values?",
        options: ["String", "Integer", "Boolean", "Float"],
        answer: "Boolean",
        marks: 1,
      },
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/*", "--"],
        answer: "#",
        marks: 1,
      },
      {
        question: "Which of these is a Python list?",
        options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "<1, 2, 3>"],
        answer: "[1, 2, 3]",
        marks: 1,
      },
      {
        question: "Which keyword is used to create a class in Python?",
        options: ["object", "struct", "class", "create"],
        answer: "class",
        marks: 1,
      },
    ],
  };

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(assessment.duration * 60);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!started || submitted) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft, submitted]);

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let totalScore = 0;

    assessment.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        totalScore += question.marks;
      }
    });

    setScore(totalScore);
    setSubmitted(true);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  const question = assessment.questions[currentQuestion];

  // Result Screen
  if (submitted) {
    const percentage = Math.round(
      (score / assessment.questions.length) * 100
    );

    return (
      <div className="ta-page">
        <aside className="ta-sidebar">
          <div className="ta-logo">
            <div className="ta-logo-icon">✦</div>

            <div className="ta-logo-text">
              <h2>CAPACITY CONNECT</h2>
            </div>
          </div>

          <nav className="ta-nav">
            <div className="ta-nav-item">
              <span>⌂</span>
              Dashboard
            </div>

            <div className="ta-nav-item active">
              <span>▣</span>
              My Courses
            </div>

            <div className="ta-nav-item">
              <span>✓</span>
              Assessments
            </div>

            <div className="ta-nav-item">
              <span>🏆</span>
              Certificates
            </div>

            <div className="ta-nav-item">
              <span>👤</span>
              My Profile
            </div>

            <div className="ta-nav-item">
              <span>⚙</span>
              Settings
            </div>
          </nav>
        </aside>

        <main className="ta-main">
          <header className="ta-topbar">
            <div className="ta-search">
              Search courses, assessments...
            </div>

            <div className="ta-profile">
              <div className="ta-avatar">A</div>

              <div>
                <strong>User</strong>
                <small>Trainee</small>
              </div>
            </div>
          </header>

          <section className="ta-result-wrapper">
            <div className="ta-result-card">
              <div className="ta-result-icon">
                <FaCheckCircle />
              </div>

              <h1>Assessment Submitted!</h1>

              <p className="ta-result-subtitle">
                Your Python Fundamentals assessment has been successfully
                submitted.
              </p>

              <div className="ta-score">
                <span>Your Score</span>

                <strong>
                  {score}/{assessment.questions.length}
                </strong>

                <small>{percentage}%</small>
              </div>

              <div className="ta-result-stats">
                <div>
                  <strong>{assessment.questions.length}</strong>
                  <span>Total Questions</span>
                </div>

                <div>
                  <strong>{score}</strong>
                  <span>Correct Answers</span>
                </div>

                <div>
                  <strong>
                    {assessment.questions.length - score}
                  </strong>
                  <span>Incorrect Answers</span>
                </div>
              </div>

              <button
                className="ta-back-btn"
                onClick={() => window.location.reload()}
              >
                <FaArrowLeft />
                Back to Assessments
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Assessment Instructions Screen
  if (!started) {
    return (
      <div className="ta-page">
        <aside className="ta-sidebar">
          <div className="ta-logo">
            <div className="ta-logo-icon">✦</div>

            <div className="ta-logo-text">
              <h2>CAPACITY CONNECT</h2>
            </div>
          </div>

          <nav className="ta-nav">
            <div className="ta-nav-item">
              <span>⌂</span>
              Dashboard
            </div>

            <div className="ta-nav-item active">
              <span>▣</span>
              My Courses
            </div>

            <div className="ta-nav-item">
              <span>✓</span>
              Assessments
            </div>

            <div className="ta-nav-item">
              <span>🏆</span>
              Certificates
            </div>

            <div className="ta-nav-item">
              <span>👤</span>
              My Profile
            </div>

            <div className="ta-nav-item">
              <span>⚙</span>
              Settings
            </div>
          </nav>
        </aside>

        <main className="ta-main">
          <header className="ta-topbar">
            <div className="ta-search">
              Search courses, assessments...
            </div>

            <div className="ta-profile">
              <div className="ta-avatar">A</div>

              <div>
                <strong>User</strong>
                <small>Trainee</small>
              </div>
            </div>
          </header>

          <section className="ta-content">
            <button className="ta-back-link">
              <FaArrowLeft />
              Back to Assessments
            </button>

            <div className="ta-header">
              <div>
                <span className="ta-label">ASSESSMENT</span>

                <h1>{assessment.title}</h1>

                <p>
                  Test your knowledge and evaluate your understanding of
                  {` ${assessment.subject}`}.
                </p>
              </div>
            </div>

            <div className="ta-info-grid">
              <div className="ta-info-card">
                <FaBookOpen />
                <div>
                  <span>Course</span>
                  <strong>{assessment.course}</strong>
                </div>
              </div>

              <div className="ta-info-card">
                <FaClock />
                <div>
                  <span>Duration</span>
                  <strong>{assessment.duration} Minutes</strong>
                </div>
              </div>

              <div className="ta-info-card">
                <span className="ta-info-number">
                  {assessment.questions.length}
                </span>

                <div>
                  <span>Questions</span>
                  <strong>
                    {assessment.questions.length} MCQs
                  </strong>
                </div>
              </div>

              <div className="ta-info-card">
                <span className="ta-info-number">
                  {assessment.questions.length}
                </span>

                <div>
                  <span>Total Marks</span>
                  <strong>
                    {assessment.questions.length} Marks
                  </strong>
                </div>
              </div>
            </div>

            <div className="ta-instruction-card">
              <h2>Before You Start</h2>

              <ul>
                <li>
                  The assessment contains{" "}
                  <strong>
                    {assessment.questions.length} multiple-choice questions.
                  </strong>
                </li>

                <li>
                  You have{" "}
                  <strong>{assessment.duration} minutes</strong> to complete
                  the assessment.
                </li>

                <li>
                  Each question carries{" "}
                  <strong>1 mark.</strong>
                </li>

                <li>
                  You can navigate between questions before submitting.
                </li>

                <li>
                  Once submitted, your answers cannot be changed.
                </li>

                <li>
                  Make sure you have a stable internet connection.
                </li>
              </ul>
            </div>

            <div className="ta-deadline">
              <FaClock />

              <div>
                <span>Submission Deadline</span>
                <strong>{assessment.deadline}</strong>
              </div>
            </div>

            <div className="ta-start-section">
              <button
                className="ta-start-btn"
                onClick={() => setStarted(true)}
              >
                Start Assessment
                <FaChevronRight />
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Assessment Question Screen
  return (
    <div className="ta-page">
      <aside className="ta-sidebar">
        <div className="ta-logo">
          <div className="ta-logo-icon">✦</div>

          <div className="ta-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="ta-nav">
          <div className="ta-nav-item">
            <span>⌂</span>
            Dashboard
          </div>

          <div className="ta-nav-item active">
            <span>▣</span>
            My Courses
          </div>

          <div className="ta-nav-item">
            <span>✓</span>
            Assessments
          </div>

          <div className="ta-nav-item">
            <span>🏆</span>
            Certificates
          </div>

          <div className="ta-nav-item">
            <span>👤</span>
            My Profile
          </div>

          <div className="ta-nav-item">
            <span>⚙</span>
            Settings
          </div>
        </nav>
      </aside>

      <main className="ta-main">
        <header className="ta-topbar">
          <div className="ta-search">
            {assessment.title}
          </div>

          <div className="ta-timer">
            <FaClock />
            <span>{formatTime()}</span>
          </div>

          <div className="ta-profile">
            <div className="ta-avatar">A</div>

            <div>
              <strong>User</strong>
              <small>Trainee</small>
            </div>
          </div>
        </header>

        <section className="ta-exam-content">
          <div className="ta-exam-header">
            <div>
              <span>QUESTION {currentQuestion + 1} OF {assessment.questions.length}</span>

              <h1>{assessment.title}</h1>
            </div>

            <div className="ta-progress">
              {assessment.questions.map((_, index) => (
                <div
                  key={index}
                  className={`ta-progress-dot ${
                    index === currentQuestion
                      ? "current"
                      : answers[index]
                      ? "answered"
                      : ""
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="ta-question-card">
            <div className="ta-question-number">
              Question {currentQuestion + 1}
            </div>

            <h2>{question.question}</h2>

            <div className="ta-answer-options">
              {question.options.map((option, index) => (
                <label
                  key={option}
                  className={`ta-option ${
                    answers[currentQuestion] === option
                      ? "selected"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={() => handleAnswer(option)}
                  />

                  <span className="ta-option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="ta-option-text">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="ta-exam-footer">
            <button
              className="ta-secondary-btn"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <FaChevronLeft />
              Previous
            </button>

            <span>
              {Object.keys(answers).length} of{" "}
              {assessment.questions.length} answered
            </span>

            {currentQuestion === assessment.questions.length - 1 ? (
              <button
                className="ta-submit-btn"
                onClick={handleSubmit}
              >
                Submit Assessment
                <FaPaperPlane />
              </button>
            ) : (
              <button
                className="ta-next-btn"
                onClick={handleNext}
              >
                Next
                <FaChevronRight />
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default TraineeAssessment;