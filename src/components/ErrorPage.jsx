import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import ColorBackground from './ColorBackground';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const ErrorPage = () => {
    const error = useRouteError();
    const {status, statusText} = error
    return (
        <ColorBackground justify='center'>
            <Flex justify='center' flexDir='column'  align='center' height='100vh'>
                <Text fontSize='200px'>😵</Text>
                <Text fontSize='40px' fontWeight={700}>{status || '404'}</Text>
                <Text fontSize='40px' fontWeight={700}>{statusText || 'Not Found'}</Text>
                <Text fontSize='30px' fontWeight={700}><Link to='/'>Go to <Text color='violet' fontWeight={500} as='span' textDecoration='underline'> HomePage</Text></Link></Text>

            </Flex>
        </ColorBackground>
    );
};

export default ErrorPage;