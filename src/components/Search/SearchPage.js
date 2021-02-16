import React from "react";

const SearchPage = (props) => {
  return (
    <>
      <h1>SearchPage Works</h1>
      <form>
        {/* query, rating, limit, gifs */}
        <label htmlFor="query">Search</label>
        <input type="text" id="query" />
        <label htmlFor="rating"> Rating</label>
        <input type="text" id="rating" />
        <label htmlFor="limit"> Limit</label>
        <input type="text" id="limit" />
        <br />
        <button>Search</button>
      </form>
      <main></main>
    </>
  );
};

export default SearchPage;
