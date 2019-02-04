import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

class UserTodos extends Component {
  renderTodos = ({ item }) => {
    return (
      <View style={styles.todoContainer}>
        <View style={styles.todoBox}>
          {item.completed ? (
            <Icon name="check" size={14} color={colors.teal} />
          ) : null}
        </View>
        <Text style={styles.todoTitle}>{item.title}</Text>
      </View>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { todos, loading } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todos</Text>
        {!todos.length && !loading ? (
          <View style={styles.noTodosDescription}>
            <Text>No Todos found.</Text>
          </View>
        ) : (
          <FlatList
            data={todos}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => this.renderTodos({ item })}
            ItemSeparatorComponent={this.renderSeparator}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    marginBottom: 10
  },
  noTodosDescription: {
    height: 140,
    justifyContent: "center"
  },
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
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGray
  }
});

UserTodos.propTypes = {
  todos: PropTypes.array,
  onPress: PropTypes.func,
  loading: PropTypes.bool
};

export default UserTodos;
