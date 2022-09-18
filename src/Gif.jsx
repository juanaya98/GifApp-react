import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";
import { GifGrid } from "./components/GifGrid";

export const Gif = () => {
  const [categorias, setCategorias] = useState(["dragon ball"]);
  const agregarCategoria = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([newCategory, ...categorias]);
  };
  return (
    <>
      <h1>Gif</h1>
      <AddCategorie
        onNewCategory={agregarCategoria}
        //   setCategorias={setCategorias} categorias={categorias}
      />
      <button onClick={agregarCategoria}>Agregar</button>
      {categorias.map((categoria) => {
        return <GifGrid key={categoria} categoria={categoria} />;
      })}
    </>
  );
};
