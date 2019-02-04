import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";

class UserAlbumScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Album")
    };
  };

  render() {
    return (
      <View>
        <Text>Album</Text>
      </View>
    );
  }
}

export default UserAlbumScreen;
