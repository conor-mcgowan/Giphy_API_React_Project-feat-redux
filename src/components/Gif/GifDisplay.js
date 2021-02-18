import React from "react";

// <img key={v.id} src={v.url} />

const GifDisplay = ({ gif, isFavorite, addFavorite, deleteFavorite }) => {
  return (
    <div className="gif-container">
      <h3 className="result-title text-center">{gif.title}</h3>
      <img class="gif" src={gif.url} />
      {!isFavorite && (
        <button className="favorite" onClick={() => addFavorite(gif)}>
          Add Favorite
        </button>
      )}
      {isFavorite && (
        <button className="favorite" onClick={() => deleteFavorite(gif.id)}>
          Remove Favorite
        </button>
      )}
    </div>
  );
};

export default GifDisplay;
