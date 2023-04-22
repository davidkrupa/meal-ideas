import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import Meal from './pages/Meal';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      <Box maxWidth='1920px' mx='auto' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meal/:id' element={<Meal />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
