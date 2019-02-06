import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

class Todo extends Component {
  render() {
    const { title, completed } = this.props;

    return (
      <View style={styles.todoContainer}>
        <View style={styles.todoBox}>
          {completed ? (
            <Icon name="check" size={14} color={colors.teal} />
          ) : null}
        </View>
        <Text style={styles.todoTitle}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  todoCompleted: {
    fontSize: fontSize.small,
    fontWeight: fontWeight.bold
  },
  todoTitle: {
    marginLeft: 20
  },
  todoBox: {
    height: 16,
    width: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.gray
  }
});

Todo.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
};

export default Todo;
