import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import data from '../bd';

const Quiz = () => {
    const { id } = useParams();
    const quiz = data.quizzes.find((quiz) => quiz.id === Number.parseInt(id));

    if (!quiz) {
        return <div>Quiz not found!</div>;
    }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextQuestion = () => {
        if (selectedOption === quiz.questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption('');
        } else {
            setIsQuizFinished(true);
        }
    };

    return (
        <div className="quiz">
            <h2>{quiz.title}</h2>
            {isQuizFinished ? (
                <div>
                    <h3>Quiz Finished!</h3>
                    <p>Your score: {score} out of {quiz.questions.length}</p>
                </div>
            ) : (
                <div className="question-container">
                    <h3>Question {currentQuestionIndex + 1}:</h3>
                    <p>{quiz.questions[currentQuestionIndex].questionText}</p>
                    <div className="options">
                        {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                            <div key={index} className="option">
                                <input
                                    type="radio"
                                    id={option}
                                    name="quizOption"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNextQuestion} disabled={!selectedOption}>
                        Next Question
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;