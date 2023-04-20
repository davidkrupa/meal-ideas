import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <Stack p='15px 30px' direction="row" spacing={2} bgcolor="gray">
      <Link to="/">Home</Link>
      <a href='#meals'>Meals</a>
    </Stack>
  )
}

export default Navbar