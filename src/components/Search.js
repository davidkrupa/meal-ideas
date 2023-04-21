import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, mealOptions } from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'

const Search = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchMealCategories = async () => {
      const mealCategories = await fetchData('https://themealdb.p.rapidapi.com/categories.php', mealOptions)
      setCategories(mealCategories.categories)
    }    
    fetchMealCategories()
  }, [])

  console.log(categories)

  return (
    <Stack spacing={5} p='20px' >
      <HorizontalScrollbar categories={categories} />
      <Stack alignItems='center'>
        <Typography sx={{ fontSize: { lg: '36px', xs: '28px' } }}  >
          Search for Ideas!
        </Typography>
        <Stack direction="row" minWidth='80%' maxWidth='1200px' >
          <TextField variant="outlined" fullWidth/>
          <Button variant='contained' color='success' sx={{ padding: { lg: '0 60px', xs: 'auto' } }} >Search</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Search