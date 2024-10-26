import PropTypes from 'prop-types';
import React from 'react';

import styles from './Header.css';

const Header = ({ title, subTitle }) => {
    return (
        <header className={styles.container}>
            <div>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default Header;

// export { Header } // named export
