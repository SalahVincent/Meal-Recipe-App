import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { getMealCategories } from '../services/mealServices'

const Categories = () => {
    const {data, error, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: getMealCategories,
    })

  return (
    <>
    <div>
        <ul>
        </ul>
    </div>
    </>
  )
}

export default Categories