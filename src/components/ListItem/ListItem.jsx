import PropTypes from 'prop-types';
import React from 'react';

// import * as SC from './ListItem.styled';
import { StyledListItem } from './ListItem.styled';

// const ListItem = ({ children, ...rest }) => {
//     return <SC.StyledListItem {...rest}>{children}</SC.StyledListItem>;
// };
const ListItem = ({ children, ...rest }) => {
    return <StyledListItem {...rest}>{children}</StyledListItem>;
};

ListItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.string, PropTypes.node),
    ]),
    className: PropTypes.string,
};
export default ListItem;
