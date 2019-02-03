import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { getUsers } from "../services/api";

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile"
    };
  };

  render() {
    return (
      <View>
        <Text>User Profile details screen!</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("UserProfile")}
        />
      </View>
    );
  }
}

export { UserProfileScreen };
