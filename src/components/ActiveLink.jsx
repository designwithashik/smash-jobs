import { Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => isActive ?
                <Text color='#7E90FE' fontWeight={700}>{children}</Text>: <Text color='#757575'>{children}</Text>}
        </NavLink>
    );
};

export default ActiveLink;