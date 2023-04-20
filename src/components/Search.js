import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, mealOptions } from '../utils/fetchData'

const Search = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchMealCategories = async () => {
      const mealCategories = await fetchData('https://themealdb.p.rapidapi.com/categories.php', mealOptions)
      console.log(mealCategories)
      setCategories(mealCategories)
    }    
    fetchMealCategories()
  }, [])

  return (
    <Box>
      <Stack direction='row' spacing={2}>
        <Stack>
          <Typography>Category 1</Typography>
        </Stack>
        <Stack>
          <Typography>Category 1</Typography>
        </Stack>
        <Stack>
          <Typography>Category 1</Typography>
        </Stack>
      </Stack>
      <Stack alignItems='center'>
        <Typography sx={{ fontSize: { lg: '36px', xs: '28px' } }}  >
          Search for Ideas!
        </Typography>
        <Stack direction="row" minWidth='80%' maxWidth='1200px' >
          <TextField variant="outlined" fullWidth/>
          <Button variant='contained' color='success' >Search</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Search