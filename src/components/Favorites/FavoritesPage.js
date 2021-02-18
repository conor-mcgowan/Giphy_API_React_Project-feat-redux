import React, { useState } from "react";
import GifDisplay from "../Gif/GifDisplay";

const FavoritesPage = (props) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <h1 className="text-center">Favorites</h1>
      <button>Add to Favorites</button>
      <button>Remove from Favorites</button>
      <div>
        {favorites.map((v) => (
          <GifDisplay key={v.id} gif={v} />
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
