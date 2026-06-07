import React, { useState } from 'react';
import CodeBlock from './CodeBlock';
import './QuestionViewer.css';

const QuestionViewer = ({ questions }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (questions.length === 0) {
    return (
      <div className="no-questions">
        <p>No questions found. Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="questions-container">
      {questions.map((q, index) => (
        <div key={q.id} className="question-card">
          <div 
            className="question-header"
            onClick={() => toggleExpand(q.id)}
          >
            <div className="question-meta">
              <span className={`difficulty-badge ${q.difficulty.toLowerCase()}`}>
                {q.difficulty}
              </span>
              <span className="question-number">Q{index + 1}</span>
            </div>
            <h3>{q.question}</h3>
            <span className={`expand-icon ${expandedId === q.id ? 'open' : ''}`}>
              ▼
            </span>
          </div>

          {expandedId === q.id && (
            <div className="answer-content">
              {/* Short Answer */}
              {q.shortAnswer && (
                <div className="answer-section">
                  <h4>💡 Quick Answer</h4>
                  <p>{q.shortAnswer}</p>
                </div>
              )}

              {/* Detailed Answer */}
              {q.detailedAnswer && (
                <div className="answer-section">
                  <h4>📚 Detailed Explanation</h4>
                  <div className="detailed-text">
                    {q.detailedAnswer.split('\n').map((paragraph, idx) => (
                      paragraph.trim() && <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Points */}
              {q.keyPoints && (
                <div className="answer-section">
                  <h4>✓ Key Points</h4>
                  <ul className="key-points">
                    {q.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Thinking Process */}
              {q.thinkingProcess && (
                <div className="answer-section thinking-section">
                  <h4>🧠 Thinking Process</h4>
                  <div className="thinking-content">
                    {q.thinkingProcess.split('\n').map((line, idx) => (
                      line.trim() && (
                        <div key={idx} className="thinking-step">
                          {line}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Code Example */}
              {q.codeExample && (
                <div className="answer-section">
                  <h4>💻 Code Example</h4>
                  <CodeBlock 
                    code={q.codeExample}
                    language={q.language || 'javascript'}
                  />
                </div>
              )}

              {/* Common Mistakes */}
              {q.commonMistakes && (
                <div className="answer-section warning-section">
                  <h4>⚠️ Common Mistakes to Avoid</h4>
                  <ul className="mistakes-list">
                    {q.commonMistakes.map((mistake, idx) => (
                      <li key={idx}>{mistake}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Real-world Application */}
              {q.realWorldApplication && (
                <div className="answer-section">
                  <h4>🌍 Real-world Application</h4>
                  <p>{q.realWorldApplication}</p>
                </div>
              )}

              {/* Interview Tip */}
              {q.interviewTip && (
                <div className="answer-section tip-section">
                  <h4>🎯 Interview Tip</h4>
                  <p>{q.interviewTip}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionViewer;