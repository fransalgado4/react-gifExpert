import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (category) => {
    setCategories(categories.filter((item) => item !== category));
  };

  const handleRemoveAll = () => {
    setCategories([]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.length > 0 && (
        <button onClick={handleRemoveAll}>Borrar todos</button>
      )}
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onRemoveCategory={onRemoveCategory}
        />
      ))}
    </>
  );
};
