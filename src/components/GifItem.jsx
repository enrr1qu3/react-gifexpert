// Importacion de React
import React from 'react';


// componente Funcional
export const GifItem = ( { title, url } ) => {
    


  return(
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div >
  );
};
