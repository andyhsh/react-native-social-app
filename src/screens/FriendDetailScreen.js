import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import {
  fetchUserAlbums,
  fetchUserPosts,
  fetchUserTodos,
  selectPost
} from "../store/actions/index";
import { UserDetails } from "../components/UserDetails";
import UserAlbums from "../components/UserAlbums";
import UserPosts from "../components/UserPosts";
import UserTodos from "../components/UserTodos";
import Spinner from "../components/Spinner";

class FriendDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const {
      onFetchUserAlbums,
      onFetchUserPosts,
      onFetchUserTodos,
      users
    } = this.props;

    onFetchUserAlbums(users.selectedUser.id);
    onFetchUserPosts(users.selectedUser.id);
    onFetchUserTodos(users.selectedUser.id);
  };

  onPressAlbum = ({ album }) => {
    const { navigation } = this.props;
    navigation.navigate("UserAlbum", { title: album.title, albumId: album.id });
  };

  onPressPost = ({ post }) => {
    const { navigation, onSelectPost } = this.props;
    onSelectPost(post.id);
    navigation.navigate("UserPostDetails", { title: post.title });
  };

  render() {
    const { albums, posts, todos, users } = this.props;

    return (
      <ScrollView>
        <Spinner loading={users.loading} />
        {!users.loading && users.selectedUser && (
          <View>
            <UserDetails
              initials={users.selectedUser.initials}
              name={users.selectedUser.name}
              email={users.selectedUser.email}
              address={users.selectedUser.address}
              phone={users.selectedUser.phone}
            />
            <UserAlbums
              albums={albums.albums}
              onPress={this.onPressAlbum}
              loading={albums.loading}
            />
            <UserPosts
              posts={posts.posts}
              onPress={this.onPressPost}
              loading={posts.loading}
            />
            <UserTodos todos={todos.todos} loading={todos.loading} />
          </View>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    albums: state.albums,
    posts: state.posts,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserAlbums: userId => dispatch(fetchUserAlbums(userId)),
    onFetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    onFetchUserTodos: userId => dispatch(fetchUserTodos(userId)),
    onFetchAlbumPhotos: albumId => dispatch(fetchAlbumPhotos(albumId)),
    onSelectPost: postId => dispatch(selectPost(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetailScreen);
