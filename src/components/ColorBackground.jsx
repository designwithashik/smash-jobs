import { Flex } from '@chakra-ui/react';
import React from 'react';

const ColorBackground = ({children, justify}) => {
    return (
        <Flex bgColor='rgba(152, 115, 255, 0.05)' flexDir={{ base: 'column', md: 'row' }} justify={justify} align='center'  px={{ base: '23px', md: '50px', lg: '200px' }}>
            {children}
        </Flex>
    );
};

export default ColorBackground;