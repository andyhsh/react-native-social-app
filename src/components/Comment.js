import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { fontWeight } from "../styles/theme";

class Comment extends Component {
  render() {
    const { name, email, body } = this.props;

    return (
      <View style={styles.commentContainer}>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Name:</Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Email:</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Comment:</Text>
          <Text>{body}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    marginVertical: 10
  },
  commentField: {
    marginBottom: 10
  },
  commentLabel: {
    fontWeight: fontWeight.bold,
    marginRight: 10
  }
});

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
