import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchUserList, selectUser } from "../store/actions/index";
import { colors } from "../styles/theme";
import UserListItem from "../components/UserListItem";

/**
 * Screen that shows a listing of the user's friends
 */

class FriendsListScreen extends Component {
  static navigationOptions = {
    title: "Friends"
  };

  componentDidMount() {
    const { onFetchUserList } = this.props;
    onFetchUserList();
  }

  onPressUserRow = ({ user }) => {
    const { navigation, onSelectUser } = this.props;
    navigation.navigate("FriendDetail", { title: user.name });
    onSelectUser(user);
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { users } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <UserListItem user={item} onPress={this.onPressUserRow} />
          )}
          keyExtractor={item => `${item.id}`}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGray
  }
});

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserList: () => dispatch(fetchUserList()),
    onSelectUser: user => dispatch(selectUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsListScreen);
