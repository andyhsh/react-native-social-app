import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import { UserListScreen } from "./src/screens/UserListScreen";
import { UserProfileScreen } from "./src/screens/UserProfileScreen";

const headerStyling = {
  headerStyle: {
    backgroundColor: "#4ccace"
  },
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const UserListStack = createStackNavigator(
  {
    UserList: {
      screen: UserListScreen
    },
    UserProfile: {
      screen: UserProfileScreen
    }
  },
  {
    initialRouteName: "UserList",
    defaultNavigationOptions: headerStyling
  }
);

const UserProfileStack = createStackNavigator(
  {
    UserProfile: {
      screen: UserProfileScreen
    }
  },
  {
    initialRouteName: "UserProfile",
    defaultNavigationOptions: headerStyling
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Friends: { screen: UserListStack },
    Profile: { screen: UserProfileStack }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#454f5b"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
