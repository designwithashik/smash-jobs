import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobsContext } from '../App';
import SingleAppliedJob from './SingleAppliedJob';
import { Flex, Heading } from '@chakra-ui/react';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([])
    const jobsData = useContext(JobsContext)
    const appliedJobsFromStorage = localStorage.getItem('applied-jobs');
    const jobsId = JSON.parse(appliedJobsFromStorage);
    let currentApplied = []
    for (const id of jobsId) {
        const appliedJob = jobsData.find(job => job.id == id);
        if (appliedJob) {
            currentApplied.push(appliedJob);
        }
    }
    
	useEffect(()=>{
		setJobs(currentApplied)
	}, [])

    

    return (
        
        <>
            <Flex mb='130px' gap={10} bgColor='rgba(152, 115, 255, 0.05)' flexDir={{ base: 'column', md: 'row' }} justify='center' align='center' pb={5} px={{ base: '23px', md: '50px', lg: '200px' }}>
            <Heading my='140px'>Applied Jobs</Heading>
            </Flex>
            <Flex justify='center' align='flex-start' flexDir='column' gap={5} px={{base: '23px', md: '50px', lg:'200px'}}>
            {jobs.map(job=><SingleAppliedJob job={job}/>)}</Flex>
        </>
    );
};

export default AppliedJobs;