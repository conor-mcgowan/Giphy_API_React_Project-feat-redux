import { combineReducers } from "redux";
import searchReducer from "./SearchReducer";
import userReducer from "./UserReducer";
import favoritesReducer from "./FavoritesReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
