import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, category }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSudmit = (e) => {
    e.preventDefault();
    const validar = category.find((evento) => evento === inputValue);
    if (inputValue === "") {
      alert("ADD A NEW GIFT");
    } else if (validar === inputValue) {
      alert("YOU ALREADY ADDED THAT GIFT");
    } else setCategories([inputValue, ...category]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSudmit}>
      <input type="text" onChange={handleChange} value={inputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
