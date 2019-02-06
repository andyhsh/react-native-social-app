import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  SET_USER_POST
} from "./actionTypes";

import { getPosts } from "../../services/api";

export const fetchUserPosts = userId => {
  return async dispatch => {
    dispatch({ type: FETCH_USER_POSTS_REQUEST });
    try {
      const posts = await getPosts(userId);

      dispatch({
        type: FETCH_USER_POSTS_SUCCESS,
        posts
      });
    } catch {
      dispatch({
        type: FETCH_USER_POSTS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};

export const selectPost = postId => {
  return {
    type: SET_USER_POST,
    postId
  };
};
