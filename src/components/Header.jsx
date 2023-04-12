import { Button, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import ColorBackground from './ColorBackground';

const Header = () => {
    return (
        
        <ColorBackground justify={{base: 'center', md: 'space-between'}}>
            <Link to='/'><Text fontWeight={800} fontSize={32} py='15px'>SmashJobs</Text></Link>
            <Flex flexDir={{base:'column', md: 'row'}} gap='5' my='20px'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </Flex>
            <Button  my={{ base: '20px', md: '50px' }} colorScheme='blue' bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))'
 >Start Applying</Button>
            </ColorBackground>
        
    );
};

export default Header;