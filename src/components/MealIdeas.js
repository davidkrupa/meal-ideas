import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Box, Pagination } from "@mui/material";

import { mealOptions } from "../utils/fetchData";
import { fetchData } from "../utils/fetchData";
import burnedFood from "../assets/images/burned.jpg";

const MealIdeas = ({ meals, setMeals, currentPage, setCurrentPage }) => {
  const mealsPerPage = 6;
  const firstCard = mealsPerPage * (currentPage - 1);
  const lastCard = mealsPerPage * currentPage;
  const currentPageData = meals?.slice(firstCard, lastCard);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      const res = await fetchData(
        "https://themealdb.p.rapidapi.com/randomselection.php",
        mealOptions
      );
      setMeals(res.meals);
    };
    fetchMealIdeas();
  }, []);

  const handleChange = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: "1100", behavior: "smooth" });
  };

  const mealIdeasCards = currentPageData?.map((item) => {
    // console.log(item);
    return (
      <Box
        key={item.idMeal}
        m="10px"
        sx={{ width: { md: "400px", sm: "80%", xs: "90%" } }}
      >
        <Link to={`meal/${item.idMeal}`}>
          <Stack
            onClick={() => window.scrollTo({ top: "0", behavior: "auto" })}
            alignItems="center"
            p="40px 20px"
            m="40px 20px"
            spacing={3}
            boxShadow="0px 2px 15px 0px rgba(66, 68, 90, 1)"
            borderRadius="0.5em"
            sx={{
              cursor: "pointer",
              "&:hover": { boxShadow: "0px 2px 20px 3px rgba(66, 68, 90, 1)" },
            }}
          >
            <img
              className="meal-ideas-image"
              src={item.strMealThumb}
              alt="meal"
            />
            <Typography color="#222231" variant="h4">
              {item.strMeal}
            </Typography>
          </Stack>
        </Link>
      </Box>
    );
  });

  return (
    <Stack alignItems="center" id="meals">
      {mealIdeasCards && (
        <Typography textAlign="center" variant="h3">
          Meals for you!
        </Typography>
      )}
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {console.log(mealIdeasCards)}
        {mealIdeasCards ? (
          mealIdeasCards
        ) : (
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Typography color="#222231" variant="h4">
              Something went wrong...
            </Typography>
            <Typography color="#222231" variant="h6">
              Try some ideas: rice, eggs, pepper
            </Typography>
            <Box m="10px" sx={{ width: { md: "400px", sm: "80%", xs: "90%" } }}>
              <img
                className="meal-ideas-image"
                src={burnedFood}
                alt="burned-food"
              />
            </Box>
          </Stack>
        )}
      </Stack>
      {meals && (
        <Pagination
          defaultPage={1}
          count={Math.ceil(meals.length / mealsPerPage)}
          page={currentPage}
          onChange={handleChange}
        />
      )}
    </Stack>
  );
};

export default MealIdeas;
