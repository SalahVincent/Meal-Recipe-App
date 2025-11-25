import React from "react";
import Categories from "../component/Categories/Categories";
import './Search.css'

const Search = () => {
  return (
    <div className="first-page">
      <h1>PrepareApp</h1>
      <form className="search-bar" action="submit">
        <input type="text" placeholder="Search for meal category here" />
        <button className="search-btn">Search</button>
      </form>
      <Categories />
    </div>
  );
};

export default Search;
