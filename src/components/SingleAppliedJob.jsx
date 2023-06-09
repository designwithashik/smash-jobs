import { Box, Button, Card, Flex, Icon, Image, Select, SelectField, Text } from '@chakra-ui/react';

import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SingleAppliedJob = ({job}) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, salary, location} = job

    return (
        <Card w='100%' flexDir={{ base: 'column', md: 'row' }} justify={{ base: 'center', md: 'space-between' }} align='center' display='flex' p='30px'>
            <Flex  flexDir={{base: 'column', md: 'row'}} gap='32px'>
            <Image borderRadius='8px' w='100%' h='100%' maxW='240px' src={companyLogo} />
            <Flex flexDir='column' justify='center'>
            <Text fontSize='24px' fontWeight={700} >{jobTitle}</Text>
            <Text color='rgba(117, 117, 117, 1)'>{companyName}</Text>
            <Flex my='16px' gap={5} flexWrap='wrap'>
                <Button fontWeight={700} colorScheme='blue' variant='outline' color='rgba(152, 115, 255, 1)'>{remoteOrOnsite}</Button>
                <Button fontWeight={700} colorScheme='blue' variant='outline' color='rgba(152, 115, 255, 1)'>{fulltimeOrParttime}</Button>
            </Flex>
            <Flex my='16px' gap={5} flexDir={{base: 'column', md: 'row'}} align='center'>
            <Flex gap={2} align='center'><Icon color='rgba(117, 117, 117, 1)' as={FaLocationArrow}> </Icon><Text color='rgba(117, 117, 117, 1)'>{location}</Text></Flex>
            <Flex gap={2} align='center'><Icon color='rgba(117, 117, 117, 1)' as={FaDollarSign}> </Icon><Text color='rgba(117, 117, 117, 1)'>Salary : {salary}</Text></Flex>
            
            </Flex>
            </Flex>
            </Flex>
            <Box><Link to={`/job/${id}`}><Button colorScheme='blue' bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))'
 >View Details</Button></Link></Box>
        </Card>
    );
};

export default SingleAppliedJob;