import {
  FETCH_POST_COMMENTS_REQUEST,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_FAILURE
} from "./actionTypes";

import { getComments } from "../../services/api";

export const fetchPostComments = postId => {
  return async dispatch => {
    dispatch({ type: FETCH_POST_COMMENTS_REQUEST });
    try {
      const comments = await getComments(postId);

      dispatch({
        type: FETCH_POST_COMMENTS_SUCCESS,
        comments
      });
    } catch {
      dispatch({
        type: FETCH_POST_COMMENTS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};
