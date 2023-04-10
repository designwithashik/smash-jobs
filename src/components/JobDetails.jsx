import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {jobDescription, jobResponsibility,  jobTitle, location, salary, experiences, contactInformation, educationalRequirements } = useLoaderData();
    // console.log(data)
    return (
        <><Flex gap={10} bgColor='rgba(152, 115, 255, 0.05)' flexDir={{ base: 'column', md: 'row' }} justify='center' align='center' pb={5} px={{ base: '23px', md: '50px', lg: '200px' }}>
            <Heading my='140px'>Job Details</Heading>
        </Flex>
        </>
    );
};

export default JobDetails;