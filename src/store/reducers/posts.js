import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  posts: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false
      };
    case FETCH_USER_POSTS_FAILURE:
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
