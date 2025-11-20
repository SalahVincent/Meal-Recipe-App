import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getMealCategories } from '../services/mealServices'

const Categories = () => {
    const {data, error, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: getMealCategories,
    })

    if (isLoading) {
        return <div>Loading categories...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    console.log(data);

  return (
    <>
    <div>
        <ul>
            {data.categories.map((category) => (
                <li key={category.idCategory}>
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    <h1>{category.strCategory}</h1>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Categories