import {
  FETCH_USER_TODOS_REQUEST,
  FETCH_USER_TODOS_SUCCESS,
  FETCH_USER_TODOS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        loading: false
      };
    case FETCH_USER_TODOS_FAILURE:
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
