import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography, Box } from '@mui/material'

import { fetchData, mealOptions } from '../utils/fetchData'

const Meal = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()

  useEffect(() => { 
    const fetchMealDetails = async () => {
      const mealDetails = await fetchData(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, mealOptions)
      setDetails(mealDetails.meals[0])
    }
    fetchMealDetails()
  }, [id])

  const ingredientsKeys = Object.keys(details).filter(key => key.includes('strIngredient') && details[key] !== "")
  const ingredients = ingredientsKeys.map(key => {
    return (
      <Typography key={key} variant='h6' >
        {details[key]}
      </Typography>
    )
  })

  return (
    <Stack alignItems='center' m='30px' spacing={7} >
      <Stack direction='row' spacing={5} sx={{ flexDirection: { md: 'row', xs: 'column' } }} >
        <Box 
          mx='auto'
          sx={{ 
            width: { xl: '600px', lg: '500px', md: '400px', sm: '450px', xs: '90%' },
            height: 'auto'
            }} >
          <img src={details.strMealThumb} alt={details.strMeal} className='meal-page-image' />
        </Box>
        <Stack>
          <Typography variant='h3' >
            {details.strMeal}
          </Typography>
          <Stack>
            {ingredients}
          </Stack>
        </Stack>
      </Stack>
      <Box px='20px' maxWidth='800px' >
        <Typography>
          {details.strInstructions}
        </Typography>
      </Box>
    </Stack>
  )
}

export default Meal