import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  SET_USER_POST
} from "../actions/actionTypes";

const initialState = {
  posts: [],
  currentPost: null,
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
    case SET_USER_POST:
      return {
        ...state,
        selectedUser: state.posts.find(post => {
          return post.id === action.postId;
        })
      };
    default:
      return state;
  }
};

export default reducer;
