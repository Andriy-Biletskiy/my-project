import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onLogin(username, password)) {
            navigate('/mein-menu'); // Перенаправляємо на Mein Menu після успішного входу
        } else {
            setError('Invalid username or password');
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/registr');
    };

    return (
        <div className="login-container">
            <h1 className="title">Online Crosswords</h1>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Enter</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
                <p className="signup-link">
                    Not registered?{' '}
                    <button type="button" onClick={handleRegisterRedirect} className="register-button">
                        Create an Account
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;
