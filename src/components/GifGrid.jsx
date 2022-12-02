
// Importacion de Componente
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'


// Componente Funcional con props = category
export const GifGrid = ({ category }) => {

  // Hook de estado 
  const { images, isLoading } = useFetchGifs ( category );

  return(
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }
     

      <div className="card-grid">
        {
          images.map( ( image ) => (
            // <li key={ image.id }> { image.title } </li>
            <GifItem 
            key={ image.id } 
            // image = { image }
            { ...image }
            />
          )
          )
        }
       
      </div>

    </>
  );
};