import { Card, Image, Text } from '@chakra-ui/react';
import React from 'react';

const SingleCategory = ({ category }) => {
    const { logo, name, jobsAvailable } = category;
    return (
        <Card maxW='311px' p='40px' variant='filled' bgColor='rgba(126, 144, 254, 0.05)'>
            <Image mx='auto' borderRadius={8} p={4} bgColor='rgba(152, 115, 255, 0.1)' w='70px' src={logo}></Image>
            <Text m='32px' mb='8px'fontWeight={700} fontSize='20px'>{name}</Text>
            <Text color='rgba(163, 163, 163, 1)'>{jobsAvailable}+ Jobs Available</Text>
        </Card>
    );
};

export default SingleCategory;