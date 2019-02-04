import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchUserAlbums, fetchUserPosts } from "../store/actions/index";
import { UserDetails } from "../components/UserDetails";
import UserAlbums from "../components/UserAlbums";
import UserPosts from "../components/UserPosts";

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
    const { onFetchUserAlbums, onFetchUserPosts } = this.props;
    onFetchUserAlbums(this.userDetails.id);
    onFetchUserPosts(this.userDetails.id);
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
    const { albums, posts } = this.props;

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
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserAlbums: userId => dispatch(fetchUserAlbums(userId)),
    onFetchUserPosts: userId => dispatch(fetchUserPosts(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileScreen);
