import React from 'react'
import { Stack, Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HorizontalScrollbar = ({ categories }) => {

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
        mx='20px' 
        spacing={3}
        bgcolor='gray' 
        borderRadius='0.5em'
        key={item.idCategory}
      >
        <img className='card-image' src={item.strCategoryThumb} />
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