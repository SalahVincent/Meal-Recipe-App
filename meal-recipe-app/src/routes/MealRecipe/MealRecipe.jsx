import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealDetailsById } from "../../services/meal.service";

const MealRecipe = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["mealdetails", id],
    queryFn: () => getMealDetailsById(id),
  });

  if (isLoading) return <span>isLoading...</span>;

  if (isError) return <span>Error: {error.message}</span>;

  console.log("Meal", data.meals);

  return (
    <>
      <h1>Meal Recipe</h1>
      <img src={data.meals[0].strMealThumb} alt="" />
      <p>{data.meals[0].strInstructions}</p>
      <a href="https://www.youtube.com/watch?v=4aZr5hZXP_s">
        <i>tutorial</i>
      </a>
    </>
  );
};

export default MealRecipe;
