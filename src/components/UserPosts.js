import React, { Component } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

class UserPosts extends Component {
  renderPosts = ({ item }) => {
    const { onPress } = this.props;

    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text>{item.body}</Text>
        <TouchableOpacity
          style={styles.postCommentContainer}
          onPress={() => onPress({ post: item })}
        >
          <Icon style={styles.postCommentIcon} name="comment" size={14} />
          <Text style={styles.postCommentLink}>Comments</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { posts, loading } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Posts</Text>
        {!posts.length && !loading ? (
          <View style={styles.noPostsDescription}>
            <Text>No Posts found.</Text>
          </View>
        ) : (
          <FlatList
            data={posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => this.renderPosts({ item })}
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
  noPostsDescription: {
    height: 140,
    justifyContent: "center"
  },
  postContainer: {
    marginVertical: 10
  },
  postTitle: {
    fontSize: fontSize.small,
    fontWeight: fontWeight.bold,
    marginBottom: 5
  },
  postCommentContainer: {
    marginTop: 5,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  postCommentIcon: {
    color: colors.teal,
    marginRight: 5
  },
  postCommentLink: {
    color: colors.teal
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGray
  }
});

UserPosts.propTypes = {
  posts: PropTypes.array,
  onPress: PropTypes.func,
  loading: PropTypes.bool
};

export default UserPosts;
