import React from 'react'
import { Box } from '@mui/material'

const Navbar = () => {
  return (
    <Box p='15px 30px' bgcolor='gray' sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <a href='/'>Home</a>
      <a href='#'>Meals</a>
    </Box>
  )
}

export default Navbar