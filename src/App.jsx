import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

const App = () => {
  return (
    <Box>
      <Header />
      <Outlet/>
    </Box>
  );
};

export default App;