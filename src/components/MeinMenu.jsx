import React from 'react';
import { Link } from 'react-router-dom';
import './MeinMenu.css';

function MeinMenu() {
    return (
        <div className="mein-menu">
            <header className="mein-menu-header">
                <h1>Main Menu</h1>
                <Link to="/crossword-creation" className="create-crossword-link">+</Link>
            </header>

            <div className="mein-menu-content">
                {/* Ліва панель */}
                <section className="sidebar-left">
                    <div className="list-section passed">
                        <h2>Пройдені кросворди</h2>
                        <div className="crossword-list">
                            <div className="crossword-item">Кросворд 1</div>
                            <div className="crossword-item">Кросворд 2</div>
                            <div className="crossword-item">Кросворд 3</div>
                            <div className="crossword-item">Кросворд 4</div>
                        </div>
                    </div>
                    <div className="list-section failed">
                        <h2>Незавершені кросворди</h2>
                        <div className="crossword-list">
                            <div className="crossword-item">Кросворд 5</div>
                            <div className="crossword-item">Кросворд 6</div>
                            <div className="crossword-item">Кросворд 7</div>
                            <div className="crossword-item">Кросворд 8</div>
                        </div>
                    </div>
                </section>

                {/* Центральна секція */}
                <section className="center-section">
                    <h2>Кросворди від інших користувачів</h2>
                    <div className="popular-crosswords">
                        <div className="crossword-thumbnail">
                            <img src="example.jpg" alt="thumbnail" />
                            <button className="nickname-button">Нікнейм</button>
                        </div>
                        {/* Додайте більше елементів за потреби */}
                    </div>
                </section>

                {/* Права панель */}
                <section className="sidebar-right">
                    <h2>Кросворди, створені користувачем</h2>
                    <div className="user-crosswords">
                        <div className="crossword-item">№1 <button className="delete-btn">✖</button></div>
                        <div className="crossword-item">№2 <button className="delete-btn">✖</button></div>
                        <div className="crossword-item">№3 <button className="delete-btn">✖</button></div>
                        <div className="crossword-item">№4 <button className="delete-btn">✖</button></div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MeinMenu;
