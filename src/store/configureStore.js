import { createStore, combineReducers } from "redux";

import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
  users: usersReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
