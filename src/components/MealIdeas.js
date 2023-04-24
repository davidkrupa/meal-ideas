import React, { useEffect } from 'react'
import { Stack, Typography, Box, Pagination } from '@mui/material'

import { mealOptions } from '../utils/fetchData'
import { fetchData } from '../utils/fetchData'

const MealIdeas = ({ meals, setMeals, currentPage, setCurrentPage }) => {
  const mealsPerPage = 6
  const firstCard = mealsPerPage * (currentPage - 1)
  const lastCard = mealsPerPage * currentPage
  const currentPageData = meals.slice(firstCard, lastCard)
  
  useEffect(() => {
    const fetchMealIdeas = async () => {
      const res = await fetchData('https://themealdb.p.rapidapi.com/randomselection.php', mealOptions)
      setMeals(res.meals)
    }
    fetchMealIdeas()
  }, [])

  const handleChange = (value) => {
    setCurrentPage(value)
    window.scrollTo({ top: '1100', behavior: 'smooth' })
  }

  const mealIdeasCards = currentPageData.map(item => {
    return (
      <Box key={item.idMeal} m='10px' sx={{ width: { lg: '400px', sm:'350px', xs: '80%' } }} >
        <Stack
          alignItems='center' 
          p='40px 20px' 
          m='40px 20px' 
          spacing={3}
          boxShadow='0px 2px 15px 0px rgba(66, 68, 90, 1)'
          borderRadius='0.5em'
          sx={{ cursor:'pointer', '&:hover': { boxShadow: '0px 2px 20px 3px rgba(66, 68, 90, 1)' } }}
        >
          <img className='meal-ideas-image' src={item.strMealThumb} alt='meal' />
          <Typography fontSize='18px' >
            {item.strMeal}
          </Typography>
        </Stack>
      </Box>
    )
  })

  return (
    <Stack alignItems='center' id='meals' >
      <Stack direction='row' flexWrap='wrap' justifyContent='center' >
        {mealIdeasCards}
      </Stack>
      <Pagination 
        defaultPage={1}
        count={Math.ceil(meals.length/mealsPerPage)}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  )
}

export default MealIdeas


