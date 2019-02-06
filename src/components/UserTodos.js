import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Spinner from "./Spinner";
import Todo from "../components/Todo";

/**
 * Renders a list of todos
 */

class UserTodos extends Component {
  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { todos, loading } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todos</Text>
        <Spinner loading={loading} />
        {!loading && (
          <FlatList
            data={todos}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Todo {...item} />}
            ItemSeparatorComponent={this.renderSeparator}
          />
        )}
        {!todos.length && !loading && (
          <View style={styles.noTodosDescription}>
            <Text>No Todos found.</Text>
          </View>
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
