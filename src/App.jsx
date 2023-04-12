import React, { createContext, useContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import Footer from './components/Footer';

export const JobsContext = createContext([]);
  export const CategoriesContext = createContext([]);
const App = () => {
  const { categoriesData, jobsData } = useLoaderData();
  
  
  return (
    <JobsContext.Provider value={jobsData}>
      <CategoriesContext.Provider value={categoriesData}>
      <Box>
      <Header />
      <Outlet/>
      </Box>
      <Footer/>
      </CategoriesContext.Provider>
    </JobsContext.Provider>
  );
};

export default App;