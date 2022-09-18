import React, { useState } from "react";

export const AddCategorie = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();
  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategorias([...categorias, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue || ""}
        onChange={onChangeInput}
      />
    </form>
  );
};
