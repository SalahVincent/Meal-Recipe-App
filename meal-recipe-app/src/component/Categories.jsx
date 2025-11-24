import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getMealCategories } from "../services/meal.service";

const Categories = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getMealCategories,
  });

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <>
      <section>
        <h2>Meal Categories</h2>
        <div>
          <ul>
            {data.categories.map((category) => (
              <li key={category.idCategory}  onClick={() => navigate(`/meals-page/${category.strCategory}`)}>
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                  <h3>{category.strCategory}</h3>
                  <p>{category.strCategoryDescription}</p>
                
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
