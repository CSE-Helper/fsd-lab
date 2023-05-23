//App.js
import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "What is 2*(4+4)?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "What is 9*9?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      "George Washington",
      "John Adams",
      "John Quincy Adams",
      "Thomas Jefferson",
    ],
    correct: 0,
  },
  {
    question: "What state is Philadelphia in?",
    answers: [
      "Commonwealth of Pennsylvania",
      "New Jersey",
      "New York",
      "Massachusetts",
    ],
    correct: 0,
  },
  {
    question: "What are the two major political parties in the United States?",
    answers: [
      "Democratic Party & Republican Party",
      "Green Party & Red Party",
      "Bull Party & Moose Party",
      "Hamilton Party & Burr Party",
    ],
    correct: 0,
  },
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (currentQuestion, index) => {
    if (questions[currentQuestion].correct === index) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div style={{ margin: "auto", width: "30%" }}>
      {currentQuestion < questions.length && (
        <>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].answers.map((answer, index) => (
            <p onClick={() => handleAnswer(currentQuestion, index)}>{answer}</p>
          ))}
        </>
      )}
      {currentQuestion >= questions.length && (
        <p>{`You scored ${(score / questions.length) * 100}%`}</p>
      )}
    </div>
  );
};

export default App;
