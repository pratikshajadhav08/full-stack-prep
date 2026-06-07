import React from 'react';
import './TopicSelector.css';

const TopicSelector = ({ topics, onSelectTopic }) => {
  return (
    <div className="topic-selector">
      <div className="intro-section">
        <h2>Select a Topic to Begin</h2>
        <p>Master full-stack development with comprehensive questions, answers, and coding solutions</p>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="topic-card"
            onClick={() => onSelectTopic(topic.id)}
            style={{ '--accent-color': topic.color }}
          >
            <div className="topic-icon">{topic.icon}</div>
            <h3>{topic.name}</h3>
            <p>{topic.questions.length} Questions</p>
            <div className="difficulty-distribution">
              {getDifficultyCount(topic.questions, 'Basic') > 0 && (
                <span className="diff-badge basic">
                  B: {getDifficultyCount(topic.questions, 'Basic')}
                </span>
              )}
              {getDifficultyCount(topic.questions, 'Intermediate') > 0 && (
                <span className="diff-badge intermediate">
                  I: {getDifficultyCount(topic.questions, 'Intermediate')}
                </span>
              )}
              {getDifficultyCount(topic.questions, 'Advanced') > 0 && (
                <span className="diff-badge advanced">
                  A: {getDifficultyCount(topic.questions, 'Advanced')}
                </span>
              )}
              {getDifficultyCount(topic.questions, 'coding') > 0 && (
                <span className="diff-badge coding">
                  C: {getDifficultyCount(topic.questions, 'coding')}
                </span>
              )}
            </div>
            <button className="start-btn">Start Learning →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const getDifficultyCount = (questions, difficulty) => {
  return questions.filter(q => q.difficulty === difficulty).length;
};

export default TopicSelector;