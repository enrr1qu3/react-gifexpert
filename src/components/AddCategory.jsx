// Importacion de React
import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
  //Hook de estado 
  const[ inputValue, setInputValue ]= useState( '' );
  //////////////////////////////////////////////////

  // Para reescribir y ver que se esta escribiendo en el input
  const onInputChange = ( e ) => {

    // Imprimir lo en la consolo lo que se esta escribiendo en el input
    console.log( e.target.value );

    // reescribir el valor de inputValue con el nuevo valor colocado en el input 
    setInputValue( e.target.value );
  }
  //////////////////////////////////////////////////////////////////////////////////

  // Para enviar lo que escribieron en el input
  const onSubmit = ( e ) => {

    // para evitar el comportamiento predeterminado del evento
    e.preventDefault();

    // Para validar que el input no esta vacio o es menor a 1
    if( inputValue.trim().length <= 1 ) return;

    // setCategories( categories => [...categories, inputValue ]);

    // Limpiar los datos, quitando los espacios vacios a los lados 
    onNewCategory( inputValue.trim() );
    
    // Reiniciar el input a un estado vacio 
    setInputValue('');
  }
  ///////////////////////////////////////////////////////////////////////////////////

  return(
   <form onSubmit={ onSubmit }>
    <input 
      type='text'
      placeholder='Buscar Gifs'
      value={ inputValue }
      onChange={ onInputChange }
    />
   </form>
  );
}