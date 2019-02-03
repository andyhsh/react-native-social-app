import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../styles/theme";

class UserListItem extends Component {
  render() {
    const { id, name, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress({id, name})}>
        <View>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 30,
    backgroundColor: colors.white,
  }
});

UserListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onPress: PropTypes.func
};

export default UserListItem;
