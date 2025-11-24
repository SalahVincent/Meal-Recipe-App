import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealDetailsById } from '../services/meal.service'

const MealRecipe = () => {
    const navigate = useNavigate()
    const { id } = useParams
    const {data, isError, isLoading} = useQuery({
        queryKey: ['mealdetails', id ],
        queryFn: () => getMealDetailsById(id)
    })

    if (isLoading)
        return <span>isLoading...</span>

    if (isError)
        return <span>Error: {}</span>

    console.log(data);
    

  return (
    <></>
  )
}

export default MealRecipe