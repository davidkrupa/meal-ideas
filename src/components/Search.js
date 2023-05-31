import React, { useEffect, useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, mealOptions } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const Search = ({ setMeals, setCurrentPage, searchQuery, setSearchQuery }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMealCategories = async () => {
      const mealCategories = await fetchData(
        "https://themealdb.p.rapidapi.com/categories.php",
        mealOptions
      );
      setCategories(mealCategories.categories);
    };
    fetchMealCategories();
  }, []);

  function handleCarouselClick(category) {
    const fetchCategoryMeals = async () => {
      const res = await fetchData(
        `https://themealdb.p.rapidapi.com/filter.php?c=${category}`,
        mealOptions
      );
      setMeals(res.meals);
      setCurrentPage(1);
    };
    fetchCategoryMeals();
    window.scrollTo({ top: "1100", behavior: "smooth" });
  }

  function handleSearch() {
    try {
      const fetchCategoryMeals = async () => {
        const res = await fetchData(
          `https://themealdb.p.rapidapi.com/filter.php?i=${searchQuery}`,
          mealOptions
        );
        setMeals(res.meals);
        setCurrentPage(1);
        window.scrollTo({ top: "1100", behavior: "smooth" });
      };
      fetchCategoryMeals();
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <Stack spacing={12} p="20px" mt="80px" mb="120px">
      <HorizontalScrollbar
        categories={categories}
        handleClick={handleCarouselClick}
      />
      <Stack alignItems="center">
        <Typography variant="h3">Search for Ideas!</Typography>
        <Stack direction="row" minWidth="80%" maxWidth="1200px" mt="30px">
          <TextField
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            onClick={() => handleSearch()}
            variant="contained"
            color="success"
            sx={{ padding: { md: "0 60px", xs: "auto" } }}
          >
            Search
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Search;
