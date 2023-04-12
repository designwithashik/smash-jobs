import React from 'react';
import ColorBackground from './ColorBackground';
import { Box, Heading, Text } from '@chakra-ui/react';

const Blog = () => {
    return (
        <>
            <ColorBackground justify='center'>
                <Heading my='140px'>Blog</Heading>
            </ColorBackground>
            <Box px={{ base: '10px', md: '50px', lg: '200px' }}>
            <Heading mt='130px'>1. When should you use context API?</Heading>
                <Text my='37px'>
                <Text fontWeight={500} color='rgba(126, 144, 254, 1)' as='span'>Ans : </Text>Context API gives a parent component to give access to the children components and even more inside levels to pass data. When it is a necessary to pass same data and access to different nesting levels it should be used.
                </Text>
            <Heading>2. What is a custom hook?</Heading>
                <Text my='37px'>
                <Text fontWeight={500} color='rgba(126, 144, 254, 1)' as='span'>Ans : </Text>We can create custom hooks with creating a function starting with 'use' Word. It is a special javascript function which can be used to call other hooks.
                </Text>
            <Heading>3. What is useRef?</Heading>
                <Text my='37px'>
                <Text fontWeight={500} color='rgba(126, 144, 254, 1)' as='span'>Ans : </Text>useRef is a react Hook which allows to access DOM element directly without causing re-rendering when the value has been changed. To be simple to avoid re-rendering useRef is used to access the DOM elements and change value.
                </Text>
            <Heading>4. What is useMemo?</Heading>
                <Text my='37px'>
                <Text fontWeight={500} color='rgba(126, 144, 254, 1)' as='span'>Ans : </Text>useMemo is a react Hook which returns a memorized value when it's dependency is updated. It can be used to keep expensive functions easily running.
                </Text>
            </Box>
            
        </>
    );
};

export default Blog;