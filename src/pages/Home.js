import React from 'react'

import Hero from '../components/Hero'
import Search from '../components/Search'
import Meals from '../components/Meals'

const Home = () => {
  return (
    <Box>
      <Hero />
      <Search />
      <Meals />
    </Box>
  )
}

export default Home