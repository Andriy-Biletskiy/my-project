import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import data from './bd';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Registr';
import Quiz from './components/Quiz';
import QuizSelection from './components/QuizSelection';
import MeinMenu from './components/MeinMenu';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        const user = data.users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div className="container">
                <nav className="menu">
                    <Link to="/">
                        <button>Back</button>
                    </Link>

                    {isLoggedIn && (
                        <Link to="/quiz-selection">
                            <button>Select a Online-crossword</button>
                        </Link>
                    )}

                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    )}
                </nav>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={<Login onLogin={handleLogin} />}
                        />
                        <Route path="/mein-menu" element={<MeinMenu />} />
                        <Route path="/registr" element={<Register />} />
                        <Route
                            path="/quiz-selection"
                            element={
                                isLoggedIn ? <QuizSelection /> : <Home />
                            }
                        />
                        <Route
                            path="/quiz/:id"
                            element={
                                isLoggedIn ? <Quiz /> : <Home />
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
