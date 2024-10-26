import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ children }) => <menu>{children}</menu>;

Menu.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.string, PropTypes.node),
    ]),
};

export default Menu;
