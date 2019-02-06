import {
  FETCH_POST_COMMENTS_REQUEST,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  comments: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        loading: false
      };
    case FETCH_POST_COMMENTS_FAILURE:
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
