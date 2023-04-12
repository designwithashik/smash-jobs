import { Box, Button, Card, CardBody, CardHeader, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaCalendar, FaDollarSign, FaEnvelope, FaLocationArrow, FaMailBulk, FaMailchimp, FaPhone, FaVoicemail } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ColorBackground from './ColorBackground';

const JobDetails = () => {
    const {id, jobDescription, jobResponsibility,  jobTitle, location, salary, experiences, contactInformation, educationalRequirements } = useLoaderData();
    const handleApply = id => {
        let appliedBefore =[]
        const appliedJobs = localStorage.getItem('applied-jobs')
        
        if (appliedJobs) {
            appliedBefore = JSON.parse(appliedJobs);
            const checkApply = appliedBefore.find(jobId => jobId == id);
            if (checkApply) {
                toast.error('Already applied for this Job.');
            }
            else {
                appliedBefore.push(id)
            }
        }
        else {
            appliedBefore.push(id)
        }
        localStorage.setItem( 'applied-jobs', JSON.stringify(appliedBefore))
    }
    return (
        <><ColorBackground justify='center'>
        <Heading my='140px'>Job Details</Heading>
    </ColorBackground>
            <Grid my='130px' gap={5} px={{ base: '23px', md: '50px', lg: '200px' }} gridTemplateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: '3fr 1fr'}}>
                <Box>
                <Text mb='24px' color='rgba(117, 117, 117, 1)'><Text fontWeight={700} color='black' as='span'>Job Description: </Text>{jobDescription}</Text>
            <Text mb='24px' color='rgba(117, 117, 117, 1)'><Text fontWeight={700} color='black' as='span'>Job Responsibility: </Text>{jobResponsibility}</Text>
            <Text fontWeight={700} mb='16px'>Educational Requirements:</Text>
            <Text mb='24px' color='rgba(117, 117, 117, 1)'>{educationalRequirements}</Text>
            <Text fontWeight={700} mb='16px'>Experiences:</Text>
            <Text mb='24px' color='rgba(117, 117, 117, 1)'>{experiences}</Text>
                </Box>
                <Flex flexDir='column' gap='24px'>
                    <Card p='30px' variant='filled' bgColor='rgba(126, 144, 254, 0.05)'>
                        <Text mb='24px' fontWeight={700} fontSize='20px'>Job Details</Text>
                        <hr />
                        <Flex my='24px' gap={2} align='center'><Icon color='rgba(152, 115, 255, 1)' as={FaDollarSign}> </Icon><Text color='rgba(117, 117, 117, 1)'><Text as='span' fontWeight={700} color='rgba(71, 71, 71, 1)'>Salary : </Text>{salary} (Per Month)</Text></Flex>
                        <Flex gap={2} align='center'><Icon color='rgba(152, 115, 255, 1)' as={FaCalendar}> </Icon><Text color='rgba(117, 117, 117, 1)'><Text as='span' fontWeight={700} color='rgba(71, 71, 71, 1)'>Job Title : </Text>{jobTitle}</Text></Flex>



                        <Text my='24px' fontWeight={700} fontSize='20px'>Contact Information</Text>
                        <hr />
                        <Flex mt='24px' gap={2} align='center'><Icon color='rgba(152, 115, 255, 1)' as={FaPhone}> </Icon><Text color='rgba(117, 117, 117, 1)'><Text as='span' fontWeight={700} color='rgba(71, 71, 71, 1)'>Phone : </Text>{contactInformation.phone}</Text></Flex>
                        <Flex mt='24px' gap={2} align='center'><Icon color='rgba(152, 115, 255, 1)' as={FaEnvelope}> </Icon><Text color='rgba(117, 117, 117, 1)'><Text as='span' fontWeight={700} color='rgba(71, 71, 71, 1)'>Email : </Text>{contactInformation.email}</Text></Flex>
                        <Flex mt='24px' gap={2} align='center'><Icon color='rgba(152, 115, 255, 1)' as={FaLocationArrow}> </Icon><Text color='rgba(117, 117, 117, 1)'><Text as='span' fontWeight={700} color='rgba(71, 71, 71, 1)'>Address : </Text>{location}</Text></Flex>
                    </Card>
                    <Button onClick={()=>handleApply(id)}
                        colorScheme='blue' bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))'
 >Apply Now</Button>
                </Flex>
            </Grid>
        </>
    );
};

export default JobDetails;