import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.css';

const Button = ({ children, isActive, ...restProperties }) => {
    let containerClassName = styles.container;
    if (isActive) {
        containerClassName = `${containerClassName} ${styles.active}`;
    }

    return (
        <button className={containerClassName} {...restProperties} >
            {children}
        </button>
    );
};

Button.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.string, PropTypes.node),
    ]),
};

export default Button;
