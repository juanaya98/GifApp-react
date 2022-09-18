import React, { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGifs";

export const useFetchGifs = (categoria) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const getImages = async () => {
    const newImages = await GetGif(categoria);
    setImages(newImages);
    setisLoading(false)
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
