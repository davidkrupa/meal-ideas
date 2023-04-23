import React, { useState } from 'react'
import { Box } from '@mui/material'

import Hero from '../components/Hero'
import Search from '../components/Search'
import MealIdeas from '../components/MealIdeas'

const Home = () => {
  const [meals, setMeals] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const mealsPerPage = 6

  return (
    <Box>
      <Hero />
      <Search 
        setMeals={setMeals} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setNumberOfPages={setNumberOfPages}
        mealsPerPage={mealsPerPage}
      />
      <MealIdeas 
        meals={meals}
        setMeals={setMeals} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        numberOfPages={numberOfPages}
        setNumberOfPages={setNumberOfPages}
        mealsPerPage={mealsPerPage}
      />
    </Box>
  )
}

export default Home