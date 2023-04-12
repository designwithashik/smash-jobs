import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ColorBackground from './ColorBackground';
import { Box, Heading, Text } from '@chakra-ui/react';
const assignments = [
    { name: "A 1", fullMark: 60, marks: 50 },
    { name: "A 2", fullMark: 60, marks: 59 },
    { name: "A 3", fullMark: 60, marks: 60 },
    { name: "A 4", fullMark: 60, marks: 59 },
    { name: "A 5", fullMark: 60, marks: 57 },
    { name: "A 6", fullMark: 60, marks: 60 },
    { name: "A 7", fullMark: 60, marks: 60 }
  ];
  
const Statistics = () => {
    return (
        <>
            <ColorBackground justify='center'>
                <Heading my='140px'>Statistics</Heading>
            </ColorBackground> 
            <Box px={{ base: '10px', md: '50px', lg: '200px' }}>
                <Heading mt='130px'>Assignment Marks Radar Chart</Heading>
                <Text mt='37px'>
                A radar chart showcasing the marks of Assignments 1 to 7, where the total mark for each assignment is 60. The chart uses a radial axis to represent the different assignments, and a series of concentric circles to represent the mark ranges. Each assignment is represented as a data point, with the distance from the center of the chart indicating the mark achieved by the students. 
                </Text>
                <ResponsiveContainer width='100%' height={500}>
                <RadarChart  cx="50%" cy="50%" outerRadius="80%" data={assignments}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Tooltip></Tooltip>
                    <Radar name="Marks" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
                </ResponsiveContainer>
            
            </Box>
        </>
    );
};

export default Statistics;