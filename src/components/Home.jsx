import { Box, Button, Container, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import model from '../assets/businessman-preview.png'
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import SingleJob from './SingleJob';
import { CategoriesContext, JobsContext } from '../App';
import BannerBackground from './ColorBackground';
const Home = () => {
    const categoriesData = useContext(CategoriesContext);
    const jobsData = useContext(JobsContext)
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const firstShowJobs = jobsData.slice(0, 4);
        setJobs(firstShowJobs);

    },[])
    const handleShowAllJobs = (event) => {
        setJobs(jobsData);
        event.target.style.display = 'none'
    }
    return (
        <>
            <BannerBackground justify='space-between'>
            <Flex flexDir='column' gap='20px' my='20px'>
                    <Heading fontSize={{ base: '40px', md:'60px', lg:'80'}}>
                    Smash Your Job Search with <Text as="span" bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))' bgClip='text'>SmashJobs</Text>
                    </Heading>
                    <Text>Looking for a job can be frustrating, time-consuming, and downright exhausting. But it doesn't have to be that way. SmashJobs is here to help you take control of your job search and land your dream job faster than ever before.</Text>
                    <Box>
                    <Button colorScheme='blue' bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))'
 >Get Started</Button>
                    </Box>
                </Flex>
                <Image w='100%' src={model}/>
            </BannerBackground>
            <Box px={{base: '23px', md: '50px', lg:'200px'}}>
            <Box my='130px'>
                <Heading textAlign='center'>Job Category List</Heading>
                <Text my='16px' textAlign='center'>Explore thousands of job opportunities with all the information you need. Its your future</Text>
                <Flex mt='32px' textAlign='center' flexWrap='wrap' justify='space-evenly' align='center' gap={4}>{categoriesData.map(category => <SingleCategory key={category.id} category={category} />)}</Flex>
            </Box>
            <Box my='130px'>
                <Heading textAlign='center'>Featured Jobs</Heading>
                <Text my='16px' textAlign='center'>Explore thousands of job opportunities with all the information you need. Its your future</Text>
                <Grid mt='32px' gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={4}>{jobs.map(job => <SingleJob key={job.id} job={job} />)}</Grid>
                <Flex my={5}><Button onClick={handleShowAllJobs} mx='auto' colorScheme='blue' bgGradient='linear(to-r,rgba(126, 144, 254, 1), rgba(152, 115, 255, 1))'
 >See All Jobs</Button></Flex>
            </Box>
            </Box>
           
        </>
    );
};

export default Home;