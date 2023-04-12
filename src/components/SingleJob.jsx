import { Box, Button, Card, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, salary, location} = job
    return (
        <Card p='40px'>
            <Image mb='16px' borderRadius='8px' maxW='80px' src={companyLogo} />
            <Text fontSize='24px' fontWeight={700} >{jobTitle}</Text>
            <Text color='rgba(117, 117, 117, 1)'>{companyName}</Text>
            <Flex my='16px' gap={5} flexWrap='wrap'>
                <Button fontWeight={700} colorScheme='blue' variant='outline' color='rgba(152, 115, 255, 1)'>{remoteOrOnsite}</Button>
                <Button fontWeight={700} colorScheme='blue' variant='outline' color='rgba(152, 115, 255, 1)'>{fulltimeOrParttime}</Button>
            </Flex>
            <Flex mb='13px' gap={5} flexWrap='wrap' align='center'>
            <Flex gap={2} align='center'><Icon color='rgba(117, 117, 117, 1)' as={FaLocationArrow}> </Icon><Text color='rgba(117, 117, 117, 1)'>{location}</Text></Flex>
            <Flex gap={2} align='center'><Icon color='rgba(117, 117, 117, 1)' as={FaDollarSign}> </Icon><Text color='rgba(117, 117, 117, 1)'>Salary : {salary}</Text></Flex>
            
            </Flex>
            <Box><Link to={`/job/${id}`}><Button colorScheme='blue' bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))'
 >View Details</Button></Link></Box>
        </Card>
    );
};

export default SingleJob;