import { FAVOURITE_CARD_ERROR, FAVOURITE_CARD_SUCCESS } from "./actionTypes";
import api from '../utils/api';

export const UpdateFavouriteMovies = (userID, favouriteMovies) => {
  return async (dispatch) => {
    await api.patch(`/api/users/${userID}`, favouriteMovies)
      .then((docs) =>
        dispatch({ type: FAVOURITE_CARD_SUCCESS, payload: docs.data })
      )
      .catch((error) => dispatch({ type: FAVOURITE_CARD_ERROR, error }));
  };
};

