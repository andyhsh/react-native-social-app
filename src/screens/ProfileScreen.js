import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchMyProfile } from "../store/actions/index";
import UserDetails from "../components/UserDetails";
import Spinner from "../components/Spinner";

/**
 * Profile screen for the logged in user. Only shows hardcoded data as editing and
 * adding posts, albums or comments is out of the scope for this app
 */

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "My Profile"
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const { onFetchMyProfile } = this.props;
    onFetchMyProfile();
  };

  render() {
    const { users } = this.props;

    return (
      <ScrollView>
        <Spinner loading={users.loading} />
        {!users.loading && users.myProfile && (
          <View>
            <UserDetails
              initials={users.myProfile.initials}
              name={users.myProfile.name}
              email={users.myProfile.email}
              address={users.myProfile.address}
              phone={users.myProfile.phone}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMyProfile: () => dispatch(fetchMyProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
