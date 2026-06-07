import React, { useState } from "react";
import { htmlQuestions } from "./data/html.js";
import { cssQuestions } from "./data/css.js";
import { jsQuestions } from "./data/js.js";
import { reactQuestions } from "./data/react.js";
import { nodeQuestions } from "./data/node.js";
import { mongoDBQuestions } from "./data/mongodb.js";
import { sqlQuestions } from "./data/sql.js";
import { firebaseQuestions } from "./data/firebase.js";
import { gitQuestions } from "./data/git.js";
import { phpQuestions } from "./data/php.js";
import { bootstrapQuestions } from "./data/bootstrap.js";
import { tailwindcssQuestions } from "./data/tailwindcss.js";
import { figmaQuestions } from "./data/figma.js";
import { agenticQuestions } from "./data/agentic_ai.js";
import { promptQuestions } from "./data/prompt_engineering.js";
import { vercelQuestions } from "./data/vercel.js";
import { hrQuestions } from "./data/hr_projects.js";
import TopicSelector from "./components/TopicSelector";
import QuestionViewer from "./components/QuestionViewer";

import "./App.css";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [theme, setTheme] = useState("light");

  const topics = [
    {
      id: "html",
      name: "HTML",
      icon: "🌐",
      color: "#E34C26",
      questions: htmlQuestions,
    },
    {
      id: "css",
      name: "CSS",
      icon: "🎨",
      color: "#1572B6",
      questions: cssQuestions,
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: "⚡",
      color: "#F7DF1E",
      questions: jsQuestions,
    },
    {
      id: "react",
      name: "React.js",
      icon: "⚛️",
      color: "#61DAFB",
      questions: reactQuestions,
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: "🟢",
      color: "#339933",
      questions: nodeQuestions,
    },
    {
      id: "MongoDB",
      name: "MongoDB",
      icon: "🍃",
      color: "#47A248",
      questions: mongoDBQuestions,
    },
    {
      id: "sql",
      name: "SQL",
      icon: "🗃️",
      color: "#336791",
      questions: sqlQuestions,
    },
    {
      id: "firebase",
      name: "Firebase",
      icon: "🔥",
      color: "#FFCA28",
      questions: firebaseQuestions,
    },
    {
      id: "git",
      name: "Git-Github",
      icon: "🐙",
      color: "#F05032",
      questions: gitQuestions,
    },
    {
      id: "php",
      name: "PHP",
      icon: "🐘",
      color: "#777BB4",
      questions: phpQuestions,
    },
    {
      id: "bootstrap",
      name: "BootStrap",
      icon: "🅱️",
      color: "#7952B3",
      questions: bootstrapQuestions,
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      icon: "💨",
      color: "#06B6D4",
      questions: tailwindcssQuestions,
    },
    {
      id: "figma-framer",
      name: "Figma-Framer",
      icon: "🎯",
      color: "#F24E1E",
      questions: figmaQuestions,
    },
    {
      id: "agenticai",
      name: "Agentic-AI",
      icon: "🤖",
      color: "#8B5CF6",
      questions: agenticQuestions,
    },
    {
      id: "promt_engineering",
      name: "Prompt Engineering",
      icon: "🧠",
      color: "#EC4899",
      questions: promptQuestions,
    },
    {
      id: "vercel",
      name: "Vercel",
      icon: "▲",
      color: "#000000",
      questions: vercelQuestions,
    },
    {
      id: "hr_projects",
      name: "HR-Projects",
      icon: "💼",
      color: "#520431",
      questions: hrQuestions,
    },
  ];

  const currentTopic = topics.find((t) => t.id === selectedTopic);
  const filteredQuestions =
    currentTopic?.questions.filter((q) => {
      const matchesSearch = q.question
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDifficulty =
        difficultyFilter === "all" || q.difficulty === difficultyFilter;
      return matchesSearch && matchesDifficulty;
    }) || [];

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <h1>💻 Full Stack Mastery</h1>
            <p>Your Complete Interview & Learning Preparation Guide</p>
          </div>
          <div className="header-stats">
            <span>
              Total Questions:{" "}
              <strong>
                {topics.reduce((sum, t) => sum + t.questions.length, 0)}
              </strong>
            </span>
          </div>
        </div>
      </header>

      {!selectedTopic ? (
        <TopicSelector topics={topics} onSelectTopic={setSelectedTopic} />
      ) : (
        <div className="content-section">
          <div className="back-button-container">
            <button
              className="back-button"
              onClick={() => {
                setSelectedTopic(null);
                setSearchTerm("");
                setDifficultyFilter("all");
              }}
            >
              ← Back to Topics
            </button>
          </div>

          <div className="topic-header">
            <h2>
              {currentTopic?.icon} {currentTopic?.name}
            </h2>
            <p>{filteredQuestions.length} questions available</p>
          </div>

          <div className="controls">
            <input
              type="text"
              placeholder="Search questions..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="difficulty-filters">
              {["all", "Basic", "Intermediate", "Advanced", "coding"].map(
                (level) => (
                  <button
                    key={level}
                    className={`filter-btn ${difficultyFilter === level ? "active" : ""}`}
                    onClick={() => setDifficultyFilter(level)}
                  >
                    {level === "all" ? "All Levels" : level}
                  </button>
                ),
              )}
            </div>
          </div>

          <QuestionViewer questions={filteredQuestions} />
        </div>
      )}
    </div>
  );
};

export default App;
