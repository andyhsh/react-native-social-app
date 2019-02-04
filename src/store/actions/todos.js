import {
  FETCH_USER_TODOS_REQUEST,
  FETCH_USER_TODOS_SUCCESS,
  FETCH_USER_TODOS_FAILURE
} from "./actionTypes";

import { getTodos } from "../../services/api";

export const fetchUserTodos = userId => {
  return async dispatch => {
    dispatch({ type: FETCH_USER_TODOS_REQUEST });
    try {
      const todos = await getTodos(userId);

      dispatch({
        type: FETCH_USER_TODOS_SUCCESS,
        todos
      });
    } catch {
      dispatch({
        type: FETCH_USER_TODOS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};
