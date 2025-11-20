import React from 'react'
import Search from './component/Search'
import Categories from './component/Categories'


const App = () => {
  return (
    <>
    <header>
      <h1>Search for Meals You Can Prepare</h1>
      <Search />
    </header>
    <section>
      <h2>Meal Categories</h2>
      <Categories />
    </section>
    <footer>

    </footer>
    </>
  )
}

export default App