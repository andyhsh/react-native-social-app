import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { getUsers } from "../services/api";

class UserListScreen extends Component {
  static navigationOptions = {
    title: "Friends"
  };

  render() {
    return (
      <View>
        <Text>UserList Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("UserProfile", {
              otherParam: "Param passed through user list screen"
            })
          }
        />
      </View>
    );
  }
}

export { UserListScreen };
