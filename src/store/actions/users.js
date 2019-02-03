import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./actionTypes";

import { getUsers } from "../../services/api";

export const fetchUserList = () => {
  return async dispatch => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const users = await getUsers();

      dispatch({
        type: FETCH_USERS_SUCCESS,
        users
      });
    } catch {
      dispatch({
        type: FETCH_USERS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};
