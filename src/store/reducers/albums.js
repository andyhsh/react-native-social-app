import {
  FETCH_USER_ALBUMS_REQUEST,
  FETCH_USER_ALBUMS_SUCCESS,
  FETCH_USER_ALBUMS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  albums: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        loading: false
      };
    case FETCH_USER_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong, please try again later."
      };
    default:
      return state;
  }
};

export default reducer;
