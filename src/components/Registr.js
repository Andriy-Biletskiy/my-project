import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registr.module.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        alert('User registered!');
    };

    return (
        <div className="register-page">
            <h2>Register</h2>
            <div className="register-box">
                <form onSubmit={handleRegister}>
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
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
            <p className="login-prompt">
                If you are authorized, please click <Link to="/login" className="login-link">login</Link>
            </p>
        </div>
    );
}

export default Register;
