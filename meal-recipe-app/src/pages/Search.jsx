import React from "react";
import Categories from "../component/Categories/Categories";

const Search = () => {
  return (
    <>
      <h1>Search for Meals You Want To Prepare</h1>
      <form action="submit">
        <input type="text" placeholder="Search for meal category here" />
      </form>
      <Categories />
    </>
  );
};

export default Search;
