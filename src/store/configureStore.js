import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import usersReducer from "./reducers/users";
import albumsReducer from "./reducers/albums";
import postsReducer from "./reducers/posts";
import todosReducer from "./reducers/todos";
import commentsReducer from "./reducers/comments";

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  posts: postsReducer,
  todos: todosReducer,
  comments: commentsReducer
});

const middleware = [thunk];

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default configureStore;
