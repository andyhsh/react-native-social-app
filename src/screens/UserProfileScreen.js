import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { fetchUserAlbums } from "../store/actions/index";
import { UserDetails } from "../components/UserDetails";
import UserAlbums from "../components/UserAlbums";

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
    const { onFetchUserAlbums } = this.props;
    onFetchUserAlbums(this.userDetails.id);
  }

  onPressAlbum = ({ albumId }) => {
    console.log(albumId);
  };

  getUserObject() {
    const { user, navigation, myProfile } = this.props;
    const isMyProfile = navigation.getParam("myProfile", true);
    return isMyProfile ? myProfile : user;
  }

  render() {
    const { albums } = this.props;

    return (
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.selectedUser,
    myProfile: state.users.myProfile,
    albums: state.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserAlbums: userId => dispatch(fetchUserAlbums(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileScreen);
