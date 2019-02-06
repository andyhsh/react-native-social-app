import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Spinner from "./Spinner";

class CommentsList extends Component {
  renderComments = ({ item }) => {
    return (
      <View style={styles.commentContainer}>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Name:</Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Email:</Text>
          <Text>{item.email}</Text>
        </View>
        <View style={styles.commentField}>
          <Text style={styles.commentLabel}>Comment:</Text>
          <Text>{item.body}</Text>
        </View>
      </View>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { comments, loading } = this.props;

    return (
      <View>
        <Text style={styles.title}>Comments</Text>
        <Spinner loading={loading} />
        {!loading && (
          <FlatList
            data={comments}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => this.renderComments({ item })}
            ItemSeparatorComponent={this.renderSeparator}
          />
        )}
        {!comments.length && !loading && (
          <View style={styles.noCommentsDescription}>
            <Text>No Comments found.</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    marginBottom: 10
  },
  noCommentsDescription: {
    height: 140,
    justifyContent: "center"
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGray
  },
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

CommentsList.propTypes = {
  comments: PropTypes.array,
  loading: PropTypes.bool
};

export default CommentsList;
