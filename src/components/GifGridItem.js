import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="contenedor animate__animated animate__rubberBand">
      <img className="imagen" src={url} alt={title} />
      <li className="titulo">{title}</li>
    </div>
  );
};
//class="card"
/*
Clases de css
- agregar estilo para visuliazar todos las imagenes del mismo tamaño
- que las imagenes no se deformen
- que se entienda la divicion de cada categoria
- que las categorias traigan los gif relacionados agregar
*/
