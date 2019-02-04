import {
  FETCH_USER_ALBUMS_REQUEST,
  FETCH_USER_ALBUMS_SUCCESS,
  FETCH_USER_ALBUMS_FAILURE,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "./actionTypes";

import { getAlbums, getPhotos } from "../../services/api";

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

export const fetchAlbumPhotos = albumId => {
  return async dispatch => {
    dispatch({ type: FETCH_PHOTOS_REQUEST });
    try {
      const photos = await getPhotos(albumId);

      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        photos
      });
    } catch {
      dispatch({
        type: FETCH_PHOTOS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};
