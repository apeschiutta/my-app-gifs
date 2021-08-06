import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(["pokemon"]);
  return (
    <>
      <h2>GIF SEARCH</h2>
      <hr />
      <AddCategory category={categories} setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
