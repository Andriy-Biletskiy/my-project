import React from 'react';
import { Link } from 'react-router-dom';
import './Home.module.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Online-crosswords</h1>
            <div className="home-buttons">
                <Link to="/login" className="link-button">
                    <button className="home-button login-button">Login</button>
                </Link>
                <Link to="/registr" className="link-button">
                    <button className="home-button register-button">Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
