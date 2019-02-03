import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { UserDetails } from "../components/UserDetails";

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "My Profile")
    };
  };

  render() {
    const { user, navigation, myProfile } = this.props;
    const isMyProfile = navigation.getParam("myProfile", true);
    const userDetails = isMyProfile ? myProfile : user;

    return (
      <View>
        <UserDetails
          initials={userDetails.initials}
          name={userDetails.name}
          email={userDetails.email}
          address={userDetails.address}
          phone={userDetails.phone}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.selectedUser,
    myProfile: state.users.myProfile
  };
};

export default connect(mapStateToProps)(UserProfileScreen);
