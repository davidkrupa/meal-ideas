import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import heroImage from '../assets/images/hero-image.jpg'

const Hero = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <img src={heroImage} className='hero-image' />
      <Box sx={{ position: 'absolute', top: '40%', left: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography  fontSize='36px' mb='10px'>
          Find delicious meal for today!
        </Typography>
        <Button variant='contained' color='success' size='large'>Check Meals</Button>
      </Box>
    </Box>
  )
}

export default Hero