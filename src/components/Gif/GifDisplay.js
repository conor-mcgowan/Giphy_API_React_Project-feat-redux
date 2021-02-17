import React from "react";

// <img key={v.id} src={v.url} />

const GifDisplay = ({ gif }) => {
  return (
    <div className="gif-container">
      <h3 className="result-title text-center">{gif.title}</h3>
      <img class="gif" src={gif.url} />
    </div>
  );
};

export default GifDisplay;
