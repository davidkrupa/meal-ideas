import React, { useState, useEffect } from 'react'
import { Stack, Typography, Box, Pagination } from '@mui/material'

import { mealOptions } from '../utils/fetchData'
import { fetchData } from '../utils/fetchData'

const MealIdeas = () => {
  const [meals, setMeals] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const mealsPerPage = 6

  useEffect(() => {
    const fetchMealIdeas = async () => {
      const firstCard = mealsPerPage * (currentPage - 1)
      const lastCard = mealsPerPage * currentPage
      const res = await fetchData('https://themealdb.p.rapidapi.com/randomselection.php', mealOptions)
      const currentPageData = res.meals.slice(firstCard, lastCard)
      setNumberOfPages(Math.ceil(res.meals.length/mealsPerPage))
      setMeals(currentPageData)
    }
    fetchMealIdeas()
  }, [currentPage])

  const handleChange = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: '1100', behavior: 'smooth' })
  }

  const mealIdeasCards = meals.map(item => {
    return (
      <Box m='10px' sx={{ width: { lg: '400px', sm:'350px', xs: '80%' } }} >
        <Stack
          alignItems='center' 
          p='40px 20px' 
          m='40px 20px' 
          spacing={3}
          boxShadow='0px 2px 15px 0px rgba(66, 68, 90, 1)'
          borderRadius='0.5em'
        >
          <img className='meal-ideas-image' src={item.strMealThumb} />
          <Typography fontSize='18px' >
            {item.strMeal}
          </Typography>
        </Stack>
      </Box>
    )
  })

  return (
    <Stack alignItems='center' >
      <Stack direction='row' flexWrap='wrap' justifyContent='center' >
        {mealIdeasCards}
      </Stack>
      <Pagination 
        defaultPage={1}
        count={numberOfPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  )
}

export default MealIdeas


