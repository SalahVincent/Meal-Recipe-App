import React from 'react'
import Search from './component/Search'
import Meals from './routes/Meals'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import MealRecipe from './routes/MealRecipe'

const App = () => {
  return (
    <>
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
    <Routes>
      <Route path = "/" element={<Search />} />
      <Route path = "/meals-page/:category" element={<Meals />} />
      <Route path = "/meal-recipe-page/:id" element={<MealRecipe />} />
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App