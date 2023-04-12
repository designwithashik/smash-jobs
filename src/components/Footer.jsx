import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box py='30px' px={{ base: '23px', md: '50px', lg: '200px' }}>
            <Text color='gray.700' textAlign='center'>©2023 SmashJobs. All Rights Reserved</Text>
        </Box>
    );
};

export default Footer;