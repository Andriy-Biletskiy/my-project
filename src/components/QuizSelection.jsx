import React from 'react';
import { Link } from 'react-router-dom';

import data from '../bd';

const QuizSelection = () => {
    return (
        <div className="quiz-selection">
            <h2>Select a Quiz</h2>
            <ul>
                {data.quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        <Link to={`/quiz/${quiz.id}`}>
                            <button>{quiz.title}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizSelection;
