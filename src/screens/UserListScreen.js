import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchUserList } from "../store/actions/index";
class UserListScreen extends Component {
  static navigationOptions = {
    title: "Friends"
  };

  componentDidMount() {
    this.props.onFetchUserList();
  }

  _keyExtractor = item => `${item.id}`;

  _renderUserRow = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    const { users } = this.props;

    return (
      <View>
        <FlatList
          data={users}
          renderItem={this._renderUserRow}
          keyExtractor={this._keyExtractor}
        />
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
