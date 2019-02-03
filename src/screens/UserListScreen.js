import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { fetchUserList } from "../store/actions/index";
class UserListScreen extends Component {
  static navigationOptions = {
    title: "Friends"
  };

  componentDidMount() {
    this.props.onFetchUserList();
  }

  render() {
    return (
      <View>
        <Text>UserList Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("UserProfile", {
              otherParam: "Param passed through user list screen"
            })
          }
        />
        <Text>{JSON.stringify(this.props.users, null, 2)}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserList: () => dispatch(fetchUserList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListScreen);
