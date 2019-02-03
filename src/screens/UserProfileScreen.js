import React, { Component } from "react";
import { View } from "react-native";
import { UserDetails } from '../components/UserDetails';
class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile"
    };
  };

  render() {
    return (
      <View>
        <UserDetails
          initials="LG"
          name="Leanne Graham"
          email="Sincere@april.biz"
          address="Apt. 556 Kulas Light Gwenborough"
          phone="6042182731"
        />
      </View>
    );
  }
}

export { UserProfileScreen };
