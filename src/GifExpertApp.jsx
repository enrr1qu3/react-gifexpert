// Importacion de React
import React, { useState } from 'react';


// Importacion de Componentes
import { AddCategory, GifGrid } from './components';


// Componente Funcional
export const GifExpertApp = () => {

  //Hook de estado
  const[ categories, setCategories ] = useState([ 'Destiny2' ]);

  //Funcion para Agregar un nuevo valor al arreglo
  const onAddCategory = ( newCategory ) =>{

    // Valida que la categoria nueva no exista en la categories 
    if( categories.includes( newCategory ) ) return;
    
    // hace un nuevo arreglo, agregando la nueva categoria
    const newCate = [newCategory, ...categories];

    // agrega el nuevo arreglo al hook de estado categories
    setCategories(newCate);

    // otra forma de hacer esto es 
    // sett Categories( newcate => [ ...newcate, 'Valorant']);
  }

  return(
    <>
     {/*Titulo */}
     <h1>GifExpertApp</h1>

     {/* Input */}
     <AddCategory
      onNewCategory={ newCategory => onAddCategory( newCategory ) }
      // setCategories={ setCategories }
       />

     {/* Listado de Gif */}
      <ol>
          { categories.map( ( category ) => (
            
            <GifGrid
             key={ category } 
             category= { category }
             />       
            )) 
          }

      </ol>
    </>
  );
}