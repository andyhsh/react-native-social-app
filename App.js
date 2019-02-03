import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import UserListScreen from "./src/screens/UserListScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import { colors } from "./src/styles/theme";

const headerStyling = {
  headerStyle: {
    backgroundColor: colors.teal
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const FriendsStack = createStackNavigator(
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

const ProfileStack = createStackNavigator(
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
    Friends: { screen: FriendsStack },
    Profile: { screen: ProfileStack }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.black,
      inactiveTintColor: colors.gray
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
