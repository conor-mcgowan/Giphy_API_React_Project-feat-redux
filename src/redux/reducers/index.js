import { combineReducers } from "redux";
import searchReducer from "./SearchReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
