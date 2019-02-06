import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from "react-redux";
import { fetchPostComments } from "../store/actions/index";

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
    const { comments } = this.props;

    return (
      <View>
        <Text>{JSON.stringify(comments.comments, null, 2)}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostComments: postId => dispatch(fetchPostComments(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostDetailsScreen);
