import PropTypes from 'prop-types';
import React from 'react';

const Tabs = ({ children, ...rest }) => {
    return <div {...rest}>{children}</div>;
};

Tabs.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.string, PropTypes.node),
    ]),
    id: PropTypes.string,
};
export default Tabs;
