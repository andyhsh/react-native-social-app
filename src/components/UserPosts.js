import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";
import Post from "./Post";

class UserPosts extends Component {
  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { posts, loading, onPress } = this.props;

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
            renderItem={({ item }) => <Post onPress={onPress} {...item} />}
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
