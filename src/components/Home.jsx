import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import model from '../assets/businessman-preview.png'
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';
const Home = () => {
    const {categoriesData, jobsData} = useLoaderData();
    console.log(jobsData)
    return (
        <>
            <Flex gap={10} bgColor='rgba(152, 115, 255, 0.05)' flexDir={{base:'column', md: 'row'}} justify='space-between' align='center' pb={5} px={{base: '10px', md: '50px', lg:'200px'}}>
                <Flex flexDir='column' gap='20px'>
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
            </Flex> 
            <Box my='130px' px={{base: '10px', md: '50px', lg:'200px'}}>
                <Heading textAlign='center'>Job Category List</Heading>
                <Text my='16px' textAlign='center'>Explore thousands of job opportunities with all the information you need. Its your future</Text>
                <Flex mt='32px' textAlign='center' flexWrap='wrap' justify='space-evenly' align='center' gap={4}>{categoriesData.map(category => <SingleCategory category={category}/>)}</Flex>
            </Box>
        </>
    );
};

export default Home;