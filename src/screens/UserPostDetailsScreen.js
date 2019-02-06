import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchPostComments } from "../store/actions/index";
import Post from "../components/Post";
import CommentsList from "../components/CommentsList";

/**
 * A screen showing a list of comments from a specific post.
 */

class UserPostDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Post")
    };
  };

  componentDidMount() {
    const { onFetchPostComments, posts } = this.props;
    onFetchPostComments(posts.currentPost.id);
  }

  render() {
    const { comments, posts } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Post
          commentsCount={comments.comments.length}
          disabled={true}
          {...posts.currentPost}
        />
        <CommentsList comments={comments.comments} loading={comments.loading} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20
  }
})

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostComments: postId => dispatch(fetchPostComments(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostDetailsScreen);
