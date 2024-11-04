import React from 'react';
import { Link } from 'react-router-dom';
import './MeinMenu.module.css';

function MeinMenu({ onLogout }) {
    return (
        <div className="mein-menu">
            <header className="mein-menu-header">
                <h1 className="main-title">Головна сторінка</h1>
            </header>

            <div className="mein-menu-content">
                <p className="instruction-text">Якщо бажаєте створити кросворд, то натисніть <Link to="/crossword-creation" className="create-crossword-link">сюди</Link>.</p>
                <Link to="/crossword" className="my-crossword-button">Мій кросворд</Link>
            </div>

            <footer className="mein-menu-footer">
                <button onClick={onLogout} className="logout-button-style">Logout</button>
            </footer>
        </div>
    );
}

export default MeinMenu;
