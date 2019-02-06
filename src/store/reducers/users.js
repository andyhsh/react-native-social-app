import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SELECT_USER,
  FETCH_MY_PROFILE
} from "../actions/actionTypes";

const initialState = {
  users: [],
  myProfile: null,
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
    case FETCH_MY_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile
      };
    default:
      return state;
  }
};

export default reducer;
