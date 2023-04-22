import React from 'react'
import { Box } from '@mui/material'

import Hero from '../components/Hero'
import Search from '../components/Search'
import MealIdeas from '../components/MealIdeas'

const Home = () => {
  return (
    <Box>
      <Hero />
      <Search />
      <MealIdeas />
    </Box>
  )
}

export default Home