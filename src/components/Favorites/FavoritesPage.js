import React from "react";
import { deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import "./FavoritesPage.css";
import GifDisplay from "../Gif/GifDisplay";

const FavoritesPage = (props) => {
  return (
    <>
      <h1 className="text-center">Favorites</h1>
      <div>
        {props.favorites.map((v) => (
          <GifDisplay
            gif={v}
            key={v.id}
            isFavorite={true}
            deleteFavorite={props.deleteFavorite}
          />
        ))}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  deleteFavorite,
};

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
