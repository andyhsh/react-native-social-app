import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import ProfileScreen from './src/screens/ProfileScreen';
import FriendsListScreen from "./src/screens/FriendsListScreen";
import FriendDetailScreen from "./src/screens/FriendDetailScreen";
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
    FriendsList: {
      screen: FriendsListScreen
    },
    FriendDetail: {
      screen: FriendDetailScreen
    },
    UserAlbum: {
      screen: UserAlbumScreen
    },
    UserPostDetails: {
      screen: UserPostDetailsScreen
    }
  },
  {
    initialRouteName: "FriendsList",
    defaultNavigationOptions: headerStyling
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: "Profile",
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
