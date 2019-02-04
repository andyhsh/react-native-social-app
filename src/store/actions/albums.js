import {
  FETCH_USER_ALBUMS_REQUEST,
  FETCH_USER_ALBUMS_SUCCESS,
  FETCH_USER_ALBUMS_FAILURE
} from "./actionTypes";

import { getAlbums } from "../../services/api";

export const fetchUserAlbums = userId => {
  return async dispatch => {
    dispatch({ type: FETCH_USER_ALBUMS_REQUEST });
    try {
      const albums = await getAlbums(userId);

      dispatch({
        type: FETCH_USER_ALBUMS_SUCCESS,
        albums
      });
    } catch {
      dispatch({
        type: FETCH_USER_ALBUMS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};
