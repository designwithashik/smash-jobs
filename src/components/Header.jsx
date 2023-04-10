import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <nav>
            <Text />
            <Container>
                <ActiveLink to='/home'>Home</ActiveLink>
            </Container>
        </nav>
    );
};

export default Header;