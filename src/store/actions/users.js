import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SELECT_USER,
  FETCH_MY_PROFILE
} from "./actionTypes";

import { getUsers } from "../../services/api";

export const fetchMyProfile = () => {
  return async dispatch => {
    // Static data for simulating user's own profile
    const myProfile = {
      id: 999,
      name: "Andy Ho",
      username: "Andyhsh",
      email: "89andy@gmail.com",
      address: {
        street: "Granville Street",
        suite: "Apt. 123",
        city: "Vancouver",
        zipcode: "999"
      },
      phone: "1234-5678"
    };

    dispatch({
      type: FETCH_MY_PROFILE,
      myProfile: buildUserInfo(myProfile)
    });
  };
};

export const fetchUserList = () => {
  return async dispatch => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const users = await getUsers();

      dispatch({
        type: FETCH_USERS_SUCCESS,
        users: users.map(buildUserInfo)
      });
    } catch {
      dispatch({
        type: FETCH_USERS_FAILURE,
        error: "Something went wrong, please try again later."
      });
    }
  };
};

export const selectUser = user => {
  return {
    type: SELECT_USER,
    user: buildUserInfo(user)
  };
};

function buildUserInfo(user) {
  const { suite, street, city, zipcode } = user.address;
  const initials = user.name
    .split(" ")
    .map(n => n[0].toUpperCase())
    .join("");

  return {
    ...user,
    address: `${suite} ${street}, ${city} ${zipcode}`,
    initials
  };
}
