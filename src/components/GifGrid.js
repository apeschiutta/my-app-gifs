import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="pepeto animate__animated animate__rubberBand">
        {category}
      </h3>

      {loading && <p className="mensaje">"Cargado" </p>}
      {
        <ol>
          {data.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </ol>
      }
    </>
  );
};
