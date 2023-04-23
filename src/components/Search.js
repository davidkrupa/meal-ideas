import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, mealOptions } from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'

const Search = ({ setMeals, currentPage, setCurrentPage, setNumberOfPages, mealsPerPage }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchMealCategories = async () => {
      const mealCategories = await fetchData('https://themealdb.p.rapidapi.com/categories.php', mealOptions)
      setCategories(mealCategories.categories)
    }    
    fetchMealCategories()
  }, [])

  function handleCarouselClick(category) {
    const fetchCategoryMeals = async () => {
      // const firstCard = mealsPerPage * (currentPage - 1)
      // const lastCard = mealsPerPage * currentPage
      const res = await fetchData(`https://themealdb.p.rapidapi.com/filter.php?c=${category}`, mealOptions)
      // const currentPageData = res.meals.slice(firstCard, lastCard)
      //setNumberOfPages(Math.ceil(res.meals.length/mealsPerPage))
      setMeals(res.meals)
    }
    fetchCategoryMeals()
  }

  return (
    <Stack spacing={5} p='20px' >
      <HorizontalScrollbar categories={categories} handleClick={handleCarouselClick} />
      <Stack alignItems='center'>
        <Typography mb='30px' sx={{ fontSize: { lg: '36px', xs: '28px' } }}  >
          Search for Ideas!
        </Typography>
        <Stack direction="row" minWidth='80%' maxWidth='1200px' mb='80px' >
          <TextField variant="outlined" fullWidth/>
          <Button variant='contained' color='success' sx={{ padding: { lg: '0 60px', xs: 'auto' } }} >Search</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Search