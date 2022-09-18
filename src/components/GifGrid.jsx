import React, { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoria }) => {
  const { images, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h2>cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
