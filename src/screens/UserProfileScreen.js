import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import {
  fetchUserAlbums,
  fetchUserPosts,
  fetchUserTodos
} from "../store/actions/index";
import { UserDetails } from "../components/UserDetails";
import UserAlbums from "../components/UserAlbums";
import UserPosts from "../components/UserPosts";
import UserTodos from "../components/UserTodos";

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "My Profile")
    };
  };

  constructor(props) {
    super(props);
    this.userDetails = this.getUserObject();
  }

  componentDidMount() {
    if (this.userDetails.id === 999) return;

    const {
      onFetchUserAlbums,
      onFetchUserPosts,
      onFetchUserTodos
    } = this.props;

    onFetchUserAlbums(this.userDetails.id);
    onFetchUserPosts(this.userDetails.id);
    onFetchUserTodos(this.userDetails.id);
  }

  onPressAlbum = ({ albumId }) => {
    console.log(albumId);
  };

  onPressPost = ({ postId }) => {
    console.log(postId);
  };

  getUserObject() {
    const { user, navigation, myProfile } = this.props;
    const isMyProfile = navigation.getParam("myProfile", true);
    return isMyProfile ? myProfile : user;
  }

  render() {
    const { albums, posts, todos } = this.props;

    return (
      <ScrollView>
        <View>
          <UserDetails
            initials={this.userDetails.initials}
            name={this.userDetails.name}
            email={this.userDetails.email}
            address={this.userDetails.address}
            phone={this.userDetails.phone}
          />
          <UserAlbums
            albums={this.userDetails.id === 999 ? [] : albums.albums}
            onPress={this.onPressAlbum}
            loading={albums.loading}
          />
          <UserPosts
            posts={this.userDetails.id === 999 ? [] : posts.posts}
            onPress={this.onPressPost}
            loading={posts.loading}
          />
          <UserTodos
            todos={this.userDetails.id === 999 ? [] : todos.todos}
            loading={todos.loading}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.selectedUser,
    myProfile: state.users.myProfile,
    albums: state.albums,
    posts: state.posts,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserAlbums: userId => dispatch(fetchUserAlbums(userId)),
    onFetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    onFetchUserTodos: userId => dispatch(fetchUserTodos(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileScreen);
