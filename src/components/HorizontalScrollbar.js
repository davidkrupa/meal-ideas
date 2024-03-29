import React from 'react'
import { Stack, Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HorizontalScrollbar = ({ categories, handleClick }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mealCards = categories.map(item => {
    return (
      <Stack 
        alignItems='center' 
        p='40px 20px' 
        m='40px 25px' 
        spacing={3}
        maxWidth='500px'
        boxShadow='0px 5px 20px 0px rgba(66, 68, 90, 1)'
        borderRadius='0.5em'
        sx={{ cursor: 'pointer', '&:hover': { boxShadow: '0px 5px 25px 5px rgba(66, 68, 90, 1)' } }}
        key={item.idCategory}
        onClick={() => handleClick(item.strCategory)}
      >
        <img className='card-image' src={item.strCategoryThumb} alt='category' />
        <Typography fontSize='24px' >
          {item.strCategory}
        </Typography>
      </Stack>
    )
  })

  return (
    <Carousel responsive={responsive} >
      {mealCards}
    </Carousel>
  )
}

export default HorizontalScrollbar