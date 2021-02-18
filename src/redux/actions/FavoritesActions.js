export const ADD_FAVORITE = "Add Favorite";
export const DELETE_FAVORITE = "Delete Favorite";

export function addFavorite(gif) {
  return { type: ADD_FAVORITE, favorite: gif };
}

export function deleteFavorite(id) {
  return { type: DELETE_FAVORITE, id: id };
}
