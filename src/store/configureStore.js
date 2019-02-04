import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import usersReducer from "./reducers/users";
import albumsReducer from "./reducers/albums";

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer
});

const middleware = [thunk];

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default configureStore;
