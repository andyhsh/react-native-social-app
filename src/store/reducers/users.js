import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SELECT_USER
} from "../actions/actionTypes";

// Static data for simulating user's own profile
const myProfile = {
  id: 999,
  initials: "AH",
  name: "Andy Ho",
  username: "Andyhsh",
  email: "89andy@gmail.com",
  address: "Apartment Street City Zip",
  phone: "1234-5678"
};

const initialState = {
  users: [],
  myProfile,
  selectedUser: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong, please try again later."
      };
    case SELECT_USER:
      return {
        ...state,
        selectedUser: state.users.find(user => {
          return user.id === action.user.id;
        })
      };
    default:
      return state;
  }
};

export default reducer;
