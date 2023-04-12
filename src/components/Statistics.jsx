import React from 'react';
import ColorBackground from './ColorBackground';
import { Box, Heading } from '@chakra-ui/react';
const assignments = [
    { name: "Assignment 1", marks: 50 },
    { name: "Assignment 2", marks: 59 },
    { name: "Assignment 3", marks: 60 },
    { name: "Assignment 4", marks: 59 },
    { name: "Assignment 5", marks: 57 },
    { name: "Assignment 6", marks: 60 },
    { name: "Assignment 7", marks: 60 }
  ];
  
const Statistics = () => {
    return (
        <>
            <ColorBackground justify='center'>
                <Heading my='140px'>Statistics</Heading>
            </ColorBackground>
            <Box bgColor='rgba(152, 115, 255, 0.05)' px={{base: '10px', md: '50px', lg:'200px'}}></Box>
        </>
    );
};

export default Statistics;