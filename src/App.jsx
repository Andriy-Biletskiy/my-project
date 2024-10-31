import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import data from './bd';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Registr';
import MeinMenu from './components/MeinMenu';
import Crossword from './components/Crossword';
import CrosswordCreationMenu from './components/CrosswordCreationMenu';

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

    return (
        <Router>
            <div className="container">
                <NavBar isLoggedIn={isLoggedIn} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/mein-menu" element={<MeinMenu />} />
                        <Route path="/registr" element={<Register />} />
                        <Route path="/crossword" element={<Crossword />} />
                        <Route path="/crossword-creation" element={<CrosswordCreationMenu />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

function NavBar({ isLoggedIn }) {
    const location = useLocation();

    return (
        <nav className="menu">
            {isLoggedIn && location.pathname !== '/mein-menu' && (
                <Link to="/mein-menu">
                    <button>MeinMenu</button>
                </Link>
            )}
        </nav>
    );
}

export default App;
