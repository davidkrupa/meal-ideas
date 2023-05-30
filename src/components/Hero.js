import React from "react";
import { Box, Button, Typography } from "@mui/material";

import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", mb: "70px" }}>
      <img src={heroImage} className="hero-image" alt="background" />
      <Box
        sx={{
          position: { lg: "absolute", xs: "unset" },
          top: { lg: "40%", xs: "" },
          left: { lg: "5%", xs: "" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="600"
          mb="20px"
          mx="20px"
          sx={{ mt: { lg: "auto", xs: "50px" } }}
        >
          Find delicious meal <br /> for today!
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: { lg: "auto", xs: "30px" } }}
          href="#meals"
        >
          Check Meals
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
