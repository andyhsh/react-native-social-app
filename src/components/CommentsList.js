import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Spinner from "./Spinner";
import Comment from "./Comment";

class CommentsList extends Component {
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
            renderItem={({ item }) => <Comment {...item} />}
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
  }
});

CommentsList.propTypes = {
  comments: PropTypes.array,
  loading: PropTypes.bool
};

export default CommentsList;
