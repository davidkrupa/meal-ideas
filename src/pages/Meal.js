import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography, Box, Chip } from '@mui/material'

import { fetchData, mealOptions } from '../utils/fetchData'

const Meal = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()
  const paragraphLength = 300

  useEffect(() => { 
    const fetchMealDetails = async () => {
      const mealDetails = await fetchData(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, mealOptions)
      setDetails(mealDetails.meals[0])
    }
    fetchMealDetails()
  }, [id])

  const ingredientsKeys = Object.keys(details).filter(key => 
    key.includes('strIngredient') && details[key] !== "" && details[key] !== null
  )
  const ingredients = ingredientsKeys.map(key => {
    return (
      <Typography key={key} variant='h6' >
        <li>{details[key]}</li>
      </Typography>
    )
  })

  const mealTags = details.strTags?.split(',').map(tag => {
    return (
      <Chip label={tag} color='success' variant='filled' key={tag} sx={{ fontWeight: '400', fontSize: '14px', color: 'white', letterSpacing: '0.05em'}} />
    )
  })

  // formatting plain text
  const sentences = details.strInstructions?.split('.').map(sentence => sentence + '.')
  let paragraphs = []
  if(sentences) {
      for (let i = 0; i < sentences.length; i++) {
        if(i === 0) {
          paragraphs[0] = sentences[i]
        } else if(paragraphs[paragraphs.length - 1].length + sentences[i].length < paragraphLength) {
          paragraphs[paragraphs.length - 1] = paragraphs[paragraphs.length - 1] + sentences[i]
        } else {
          paragraphs[paragraphs.length] = sentences[i]
        }
      }
  }

  const instructions = paragraphs.map((sentence, index) => {
    return(
      <Stack key={index} spacing={2} mt='10px' >
        <Typography fontSize='1.5em' fontWeight='500' >
          {`Step ${index + 1}`}
        </Typography>
        <Typography fontSize='1em' letterSpacing='0.03em' lineHeight='1.5em' >
          {sentence}
        </Typography>
      </Stack>
    )
  })

  return (
    <Stack alignItems='center' mt='50px' spacing={7}  >
      <Stack direction='row' spacing={8} sx={{ flexDirection: { md: 'row', xs: 'column' } }} >
        <Box 
          mx='auto'
          sx={{ 
            width: { xl: '700px', lg: '550px', md: '450px', sm: '80%', xs: '90%' },
            height: 'auto'
            }} >
          <img src={details.strMealThumb} alt={details.strMeal} className='meal-page-image' />
        </Box>
        <Stack spacing={3}>
          <Typography variant='h3' sx={{ marginTop: { md: '0', xs: '30px' } }} >
            {details.strMeal}
          </Typography>
          <Stack direction='row' flexWrap='wrap' mb='20px' spacing={1}>
            {mealTags && mealTags}
          </Stack>
          <Typography variant='h5' sx={{ textDecoration: 'underline' }} >
            Ingredients:
          </Typography>
          <Stack pl='15px' >
            {ingredients}
          </Stack>
        </Stack>
      </Stack>
      <Box px='40px' maxWidth='800px' >
        <Stack spacing={3}>
          <Typography variant='h5' sx={{ textDecoration: 'underline' }} >
            Preparation:
          </Typography>
          {instructions}
        </Stack>
      </Box>
    </Stack>
  )
}

export default Meal