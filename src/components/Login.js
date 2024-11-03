import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.module.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (onLogin(username, password)) {
            navigate('/mein-menu');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <div className="login-box">
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
            <p className="register-prompt">
                If you are not authorized, please click <Link to="/registr" className="register-link">register</Link>
            </p>
        </div>
    );
}

export default Login;