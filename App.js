import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import UserListScreen from "./src/screens/UserListScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import UserAlbumScreen from "./src/screens/UserAlbumScreen";
import UserPostDetailsScreen from "./src/screens/UserPostDetailsScreen";
import { colors } from "./src/styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

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
    },
    UserAlbum: {
      screen: UserAlbumScreen
    },
    UserPostDetails: {
      screen: UserPostDetailsScreen
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
    Friends: {
      screen: FriendsStack,
      navigationOptions: {
        tabBarIcon: <Icon name="people" size={16} />
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: <Icon name="person" size={16} />
      }
    }
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
