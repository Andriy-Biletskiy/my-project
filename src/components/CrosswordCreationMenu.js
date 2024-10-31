import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CrosswordCreationMenu.css';

function CrosswordCreationMenu() {
    const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
    const navigate = useNavigate();

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = value.toUpperCase();
        setQuestions(newQuestions);
    };

    const addNewQuestion = () => setQuestions([...questions, { question: "", answer: "" }]);

    const saveCrossword = () => {
        alert("Кросворд було збережено");
        navigate("/mein-menu");
    };

    return (
        <div className="crossword-creation-container">
            <h2>Створення кросворду</h2>
            {questions.map((qa, idx) => (
                <div key={idx} className="qa-pair">
                    <input
                        type="text"
                        placeholder="Питання"
                        value={qa.question}
                        onChange={(e) => handleQuestionChange(idx, "question", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Відповідь "
                        value={qa.answer}
                        onChange={(e) => handleQuestionChange(idx, "answer", e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addNewQuestion}>Додати нове питання</button>
            <button onClick={saveCrossword} className="save-button">Зберегти кросворд</button>
        </div>
    );
}

export default CrosswordCreationMenu;
