import { Button, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Flex justifyContent='space-between' align='center'>
            <Link to='/'><Text fontWeight={800} fontSize={32}>SmashJobs</Text></Link>
            <Flex gap='5'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </Flex>
            <Button my='50px' colorScheme='teal' bgColor='#7E90FE' >Start Applying</Button>
        </Flex>
    );
};

export default Header;