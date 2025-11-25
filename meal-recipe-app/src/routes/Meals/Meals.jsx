import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getMealsByCategory } from "../../services/meal.service";
import { useNavigate } from "react-router-dom";

function Meals() {
  const navigate = useNavigate();
  const { category } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals", category],
    queryFn: () => getMealsByCategory(category),
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  console.log("Meals", data);

  return (
    <div>
      {data.meals.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => navigate(`/meal-recipe-page/${meal.idMeal}`)}
        >
          <img src={meal.strMealThumb} />
          <h2>{meal.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default Meals;
