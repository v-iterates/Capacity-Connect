import React, { useState } from "react";
import {
  FaArrowLeft,
  FaBookOpen,
  FaPlus,
  FaTrash,
  FaUpload,
  FaFileAlt,
  FaVideo,
  FaFilePowerpoint,
  FaSave,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import "./trainerCourse.css";

function TrainerCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const [objective, setObjective] = useState("");
  const [objectives, setObjectives] = useState([]);

  const [studyMaterials, setStudyMaterials] = useState([]);
  const [presentations, setPresentations] = useState([]);
  const [lectures, setLectures] = useState([]);

  const [message, setMessage] = useState("");

  const addObjective = () => {
    if (objective.trim() === "") return;

    setObjectives([...objectives, objective.trim()]);
    setObjective("");
  };

  const removeObjective = (index) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const handleFiles = (event, type) => {
    const selectedFiles = Array.from(event.target.files);

    if (type === "study") {
      setStudyMaterials([...studyMaterials, ...selectedFiles]);
    } else if (type === "presentation") {
      setPresentations([...presentations, ...selectedFiles]);
    } else if (type === "lecture") {
      setLectures([...lectures, ...selectedFiles]);
    }

    event.target.value = "";
  };

  const removeFile = (index, type) => {
    if (type === "study") {
      setStudyMaterials(studyMaterials.filter((_, i) => i !== index));
    } else if (type === "presentation") {
      setPresentations(presentations.filter((_, i) => i !== index));
    } else {
      setLectures(lectures.filter((_, i) => i !== index));
    }
  };

  const saveDraft = () => {
    setMessage("Course saved as draft successfully.");
  };

  const publishCourse = () => {
    if (!courseTitle || !category || !description || !duration || !level) {
      setMessage("Please complete all required course information.");
      return;
    }

    setMessage("Course published successfully.");
  };

  return (
    <div className="trainer-course-page">

      {/* SIDEBAR */}
      <aside className="trainer-course-sidebar">

        <div className="tc-logo">
          <div className="tc-logo-icon">
            <span>✦</span>
          </div>

          <div className="tc-logo-text">
            <h2>CAPACITY CONNECT</h2>
          </div>
        </div>

        <nav className="tc-nav">

          <a href="#" className="tc-nav-item">
            <span>▣</span>
            Dashboard
          </a>

          <a href="#" className="tc-nav-item">
            <span>📚</span>
            My Courses
          </a>

          <a href="#" className="tc-nav-item active">
            <span>＋</span>
            Create Course
          </a>

          <a href="#" className="tc-nav-item">
            <span>📝</span>
            Assessments
          </a>

          <a href="#" className="tc-nav-item">
            <span>👥</span>
            Trainees
          </a>

          <a href="#" className="tc-nav-item">
            <span>📊</span>
            Performance
          </a>

          <a href="#" className="tc-nav-item">
            <span>🏆</span>
            Certificates
          </a>

          <div className="tc-nav-divider"></div>

          <a href="#" className="tc-nav-item">
            <span>👤</span>
            My Profile
          </a>

          <a href="#" className="tc-nav-item">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="tc-nav-item">
            <span>?</span>
            Help
          </a>

        </nav>

        <div className="tc-sidebar-user">
          <div className="tc-user-avatar">A</div>

          <div>
            <strong>User</strong>
            <span>Trainer</span>
          </div>

          <span className="tc-user-more">⋮</span>
        </div>

      </aside>


      {/* MAIN */}
      <main className="trainer-course-main">

        {/* TOPBAR */}
        <header className="tc-topbar">

          <div className="tc-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="tc-top-right">

            <button className="tc-notification">
              🔔
              <span></span>
            </button>

            <div className="tc-profile">
              <div className="tc-profile-avatar">A</div>

              <div>
                <strong>User</strong>
                <small>Trainer</small>
              </div>

              <span>⌄</span>
            </div>

          </div>

        </header>


        {/* PAGE HEADER */}
        <section className="tc-page-header">

          <div className="tc-header-left">

            <button className="tc-back-btn">
              <FaArrowLeft />
            </button>

            <div>
              <p>COURSE MANAGEMENT</p>
              <h1>Create New Course</h1>
              <span>
                Create and publish a learning course for trainees.
              </span>
            </div>

          </div>

          <div className="tc-header-icon">
            <FaBookOpen />
          </div>

        </section>


        {/* SUCCESS / ERROR MESSAGE */}
        {message && (
          <div className="tc-message">
            <FaCheckCircle />
            <span>{message}</span>

            <button onClick={() => setMessage("")}>
              ×
            </button>
          </div>
        )}


        {/* COURSE INFORMATION */}
        <section className="tc-card">

          <div className="tc-card-header">
            <div className="tc-section-number">01</div>

            <div>
              <h2>Course Information</h2>
              <p>Provide the basic information about your course.</p>
            </div>
          </div>


          <div className="tc-form-grid">

            <div className="tc-form-group tc-full">
              <label>
                Course Title <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Enter course title"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>


            <div className="tc-form-group">
              <label>
                Category <span>*</span>
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option>Programming</option>
                <option>Data Science</option>
                <option>Web Development</option>
                <option>Artificial Intelligence</option>
                <option>Machine Learning</option>
                <option>Cloud Computing</option>
                <option>Cyber Security</option>
                <option>Meteorology</option>
                <option>Other</option>
              </select>
            </div>


            <div className="tc-form-group">
              <label>
                Difficulty Level <span>*</span>
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>


            <div className="tc-form-group">
              <label>
                Duration <span>*</span>
              </label>

              <div className="tc-input-with-unit">
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 8"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />

                <span>Weeks</span>
              </div>
            </div>


            <div className="tc-form-group tc-full">
              <label>
                Course Description <span>*</span>
              </label>

              <textarea
                rows="4"
                placeholder="Describe what trainees will learn in this course..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <small>
                Give trainees a clear overview of the course.
              </small>
            </div>

          </div>

        </section>


        {/* OBJECTIVES */}
        <section className="tc-card">

          <div className="tc-card-header">

            <div className="tc-section-number">02</div>

            <div>
              <h2>Learning Objectives</h2>
              <p>Define what trainees should achieve after completing the course.</p>
            </div>

          </div>


          <div className="tc-objective-input">

            <input
              type="text"
              placeholder="Enter a learning objective"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addObjective();
                }
              }}
            />

            <button
              type="button"
              onClick={addObjective}
            >
              <FaPlus />
              Add
            </button>

          </div>


          {objectives.length > 0 && (
            <div className="tc-objective-list">

              {objectives.map((item, index) => (

                <div className="tc-objective-item" key={index}>

                  <div className="tc-objective-check">
                    ✓
                  </div>

                  <span>{item}</span>

                  <button
                    onClick={() => removeObjective(index)}
                  >
                    <FaTrash />
                  </button>

                </div>

              ))}

            </div>
          )}

          {objectives.length === 0 && (
            <div className="tc-empty-objectives">
              <span>💡</span>
              Add at least 2–3 learning objectives for your course.
            </div>
          )}

        </section>


        {/* RESOURCES */}
        <section className="tc-card">

          <div className="tc-card-header">

            <div className="tc-section-number">03</div>

            <div>
              <h2>Course Resources</h2>
              <p>
                Upload study materials, presentations and recorded lectures.
              </p>
            </div>

          </div>


          <div className="tc-resource-grid">


            {/* STUDY MATERIAL */}
            <div className="tc-resource-box">

              <div className="tc-resource-icon">
                <FaFileAlt />
              </div>

              <div className="tc-resource-content">

                <h3>Study Materials</h3>

                <p>
                  Upload PDFs, documents or reading materials.
                </p>

                <label className="tc-upload-btn">
                  <FaUpload />
                  Choose Files

                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={(e) => handleFiles(e, "study")}
                  />
                </label>

              </div>

            </div>


            {/* PRESENTATIONS */}
            <div className="tc-resource-box">

              <div className="tc-resource-icon">
                <FaFilePowerpoint />
              </div>

              <div className="tc-resource-content">

                <h3>Presentations</h3>

                <p>
                  Upload PowerPoint presentations.
                </p>

                <label className="tc-upload-btn">
                  <FaUpload />
                  Choose Files

                  <input
                    type="file"
                    multiple
                    accept=".ppt,.pptx,.pdf"
                    onChange={(e) => handleFiles(e, "presentation")}
                  />
                </label>

              </div>

            </div>


            {/* LECTURES */}
            <div className="tc-resource-box">

              <div className="tc-resource-icon">
                <FaVideo />
              </div>

              <div className="tc-resource-content">

                <h3>Recorded Lectures</h3>

                <p>
                  Upload recorded video lectures.
                </p>

                <label className="tc-upload-btn">
                  <FaUpload />
                  Choose Videos

                  <input
                    type="file"
                    multiple
                    accept="video/*"
                    onChange={(e) => handleFiles(e, "lecture")}
                  />
                </label>

              </div>

            </div>

          </div>


          {/* SELECTED FILES */}

          {(studyMaterials.length > 0 ||
            presentations.length > 0 ||
            lectures.length > 0) && (

            <div className="tc-selected-files">

              <h3>Selected Resources</h3>


              {studyMaterials.map((file, index) => (
                <div className="tc-file-row" key={`study-${index}`}>

                  <FaFileAlt />

                  <span>{file.name}</span>

                  <button
                    onClick={() => removeFile(index, "study")}
                  >
                    ×
                  </button>

                </div>
              ))}


              {presentations.map((file, index) => (
                <div className="tc-file-row" key={`presentation-${index}`}>

                  <FaFilePowerpoint />

                  <span>{file.name}</span>

                  <button
                    onClick={() => removeFile(index, "presentation")}
                  >
                    ×
                  </button>

                </div>
              ))}


              {lectures.map((file, index) => (
                <div className="tc-file-row" key={`lecture-${index}`}>

                  <FaVideo />

                  <span>{file.name}</span>

                  <button
                    onClick={() => removeFile(index, "lecture")}
                  >
                    ×
                  </button>

                </div>
              ))}

            </div>
          )}

        </section>


        {/* ACTIONS */}
        <section className="tc-actions">

          <button
            className="tc-save-btn"
            onClick={saveDraft}
          >
            <FaSave />
            Save as Draft
          </button>


          <button
            className="tc-publish-btn"
            onClick={publishCourse}
          >
            <FaPaperPlane />
            Publish Course
          </button>

        </section>


        <p className="tc-footer-note">
          You can edit your course content after saving it as a draft.
        </p>

      </main>

    </div>
  );
}

export default TrainerCourse;