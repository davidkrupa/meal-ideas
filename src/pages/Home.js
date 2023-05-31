import React, { useState } from "react";
import { Box } from "@mui/material";

import Hero from "../components/Hero";
import Search from "../components/Search";
import MealIdeas from "../components/MealIdeas";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <Box>
      <Hero />
      <Search
        setMeals={setMeals}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MealIdeas
        meals={meals}
        setMeals={setMeals}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default Home;
