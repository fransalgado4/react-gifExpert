import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onRemoveCategory }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(category);

  const handleRemoveClick = () => {
    onRemoveCategory(category);
  };

  return (
    <>
      <h3>{category}</h3>
      <button onClick={handleRemoveClick}>Borrar</button>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
