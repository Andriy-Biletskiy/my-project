import PropTypes from 'prop-types';
import React from 'react';

const List = ({ children }) => {
    return <ul>{children}</ul>;
};

List.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.string, PropTypes.node),
    ]),
};
export default List;
