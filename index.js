import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
