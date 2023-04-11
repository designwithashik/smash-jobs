import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobsContext } from '../App';
import SingleAppliedJob from './SingleAppliedJob';
import { Box, Flex, Heading, Select, SelectField } from '@chakra-ui/react';

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

    const handleFilter = (event) => {
        let appliedJob = currentApplied.filter(job => job.remoteOrOnsite == event.target.value);
        console.log(event.target.value)
        if (appliedJob.length) {
            console.log('Inside 1st condition')

            setJobs(appliedJob);
        }
        else if (!event.target.value) {
            console.log('Inside 2nd Condition')
            setJobs(currentApplied);
        }
        else {
            console.log('inside third Condition')
            console.log(appliedJob)
            setJobs(appliedJob);
        }
    }

    return (
        
        <>
            
            <Flex mb='130px' gap={10} bgColor='rgba(152, 115, 255, 0.05)' flexDir={{ base: 'column', md: 'row' }} justify='center' align='center' pb={5} >
            <Heading my='140px'>Applied Jobs</Heading>
            </Flex>
            <Box pb='34px' px={{ base: '23px', md: '50px', lg: '200px' }}>
            <Flex mb='32px' justify='flex-end'>
                <Box><Select onChange={handleFilter} fontWeight={500} variant='filled' placeholder='Filter By'>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
            </Select></Box>
            </Flex>
            <Flex justify='center' align='flex-start' flexDir='column' gap={5} >
            {jobs.map(job=><SingleAppliedJob key={job.id} job={job}/>)}</Flex>
            </Box>
        </>
    );
};

export default AppliedJobs;