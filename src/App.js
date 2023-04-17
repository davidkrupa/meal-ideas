import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Meal from './pages/Meal';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/meal/:id' element={<Meal />} />
  </Routes>
  );
}

export default App;
