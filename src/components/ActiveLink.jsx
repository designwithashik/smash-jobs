import { Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => isActive ?
                <Text color='red.300'>{children}</Text>: <Text color='blue.300'>{children}</Text>}
        </NavLink>
    );
};

export default ActiveLink;