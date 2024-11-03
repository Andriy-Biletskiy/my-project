// components/Crossword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Crossword.module.css';
import data from '../bd';

const questions = data.crosswordData.questions;
const secretWord = data.crosswordData.secretWord;

function Crossword() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));
    const [isComplete, setIsComplete] = useState(false);
    const [userSecretWord, setUserSecretWord] = useState("");
    const [isSecretWordCorrect, setIsSecretWordCorrect] = useState(false);

    const handleAnswerChange = (e) => {
        const answer = e.target.value.toUpperCase();
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = answer;
        setUserAnswers(updatedAnswers);

        if (answer === questions[currentQuestionIndex].answer) {
            let nextIndex = getNextQuestionIndex();
            if (nextIndex !== -1) {
                setCurrentQuestionIndex(nextIndex);
            }
            if (updatedAnswers.every((ans) => ans !== "")) {
                setIsComplete(true);
            }
        }
    };

    const handleSecretWordChange = (e) => setUserSecretWord(e.target.value.toUpperCase());

    const checkSecretWord = () => {
        if (userSecretWord === secretWord) {
            setIsSecretWordCorrect(true);
        }
    };

    const goToNextQuestion = () => {
        let nextIndex = getNextQuestionIndex();
        if (nextIndex !== -1) {
            setCurrentQuestionIndex(nextIndex);
        }
    };

    const goToPreviousQuestion = () => {
        let previousIndex = getPreviousQuestionIndex();
        if (previousIndex !== -1) {
            setCurrentQuestionIndex(previousIndex);
        }
    };

    const getNextQuestionIndex = () => {
        for (let i = 1; i <= questions.length; i++) {
            let nextIndex = (currentQuestionIndex + i) % questions.length;
            if (userAnswers[nextIndex] === "") {
                return nextIndex;
            }
        }
        return -1; // Якщо всі питання вже були відповіді
    };

    const getPreviousQuestionIndex = () => {
        for (let i = 1; i <= questions.length; i++) {
            let previousIndex = (currentQuestionIndex - i + questions.length) % questions.length;
            if (userAnswers[previousIndex] === "") {
                return previousIndex;
            }
        }
        return -1;
    };

    return (
        <div className="crossword-container">
            <h2>Розв'яжіть кросворд</h2>
            <div className="crossword-grid">
                {questions.map((_, idx) => (
                    <div key={idx} className="crossword-cell">
                        {userAnswers[idx].split("").map((letter, letterIdx) => (
                            <span key={letterIdx} className="letter">
                                {letter}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            {!isComplete && (
                <div className="question-container">
                    <div className="navigation-buttons">
                        <button onClick={goToPreviousQuestion}>
                            Попереднє
                        </button>
                        <button onClick={goToNextQuestion}>
                            Наступне
                        </button>
                    </div>
                    <div className="question-box">{questions[currentQuestionIndex].question}</div>
                    <input
                        type="text"
                        value={userAnswers[currentQuestionIndex]}
                        onChange={handleAnswerChange}
                        placeholder="Ваша відповідь"
                        className="answer-input"
                    />
                </div>
            )}

            {isComplete && !isSecretWordCorrect && (
                <div className="secret-word-container">
                    <p>Введіть зашифроване слово:</p>
                    <input
                        type="text"
                        value={userSecretWord}
                        onChange={handleSecretWordChange}
                        placeholder="Слово"
                    />
                    <button onClick={checkSecretWord}>Перевірити</button>
                </div>
            )}

            {isSecretWordCorrect && (
                <div className="success-message">
                    Ви успішно пройшли кросворд))
                </div>
            )}
        </div>
    );
}

export default Crossword;
