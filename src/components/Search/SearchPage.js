import React, { useState } from "react";
import { connect } from "react-redux";
import GifDisplay from "../Gif/GifDisplay.js";
import { setSearch } from "../../redux/actions";
import "./SearchPage.css";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("pg-13");
  const [limit, setLimit] = useState(25);
  // const [gifs, setGifs] = useState([]); NOW IN GLOBAL STATE
  const [error, setError] = useState("");

  async function getGifs(query, rating, limit) {
    const key = "srFHOhXtFpt5VtYfGapcbnWoKjhRzs2V";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}&rating=${rating}&lang=en`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      let resGifs = json.data.map((val) => {
        return { id: val.id, title: val.title, url: val.images.original.url };
      });
      props.setSearch(resGifs);
    } catch (e) {
      setError("Something went wrong! Please try again later.");
      setSearch([]);
    }
  }

  return (
    <>
      <div className="form">
        <div className="form-container">
          <label htmlFor="query">Search</label>
          <input
            type="text"
            id="query"
            class="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating"> Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
        </div>
        <div>
          <label htmlFor="limit"> Limit</label>
          <select
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <button
          className="search-button"
          onClick={() => getGifs(query, rating, limit)}
        >
          Search
        </button>
      </div>
      <main className="results-container">
        {error.length > 0 && <h1>{error}</h1>}
        {error.length === 0 &&
          props.gifs.map((v) => {
            return <GifDisplay gif={v} key={v.id} />;
          })}
      </main>
    </>
  );
};

const mapDispatchToProps = {
  setSearch,
};

function mapStateToProps(state) {
  return {
    globalState: state,
    gifs: state.search,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
