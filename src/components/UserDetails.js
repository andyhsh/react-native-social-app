import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../styles/theme";

/**
 * A reusable card that renders the details of a user
 */

class UserDetails extends Component {
  render() {
    const { initials, name, email, address } = this.props;

    return (
      <View style={styles.userCard}>
        <View style={styles.userIcon}>
          <Text style={styles.userInitials}>{initials}</Text>
        </View>
        <View style={styles.userInfo}>
          {name && <Text style={styles.userLabel}>{name}</Text>}
          {email && <Text style={styles.userLabel}>{email}</Text>}
          {address && <Text style={styles.userLabel}>{address}</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    padding: 20
  },
  userIcon: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray
  },
  userInitials: {
    color: colors.white,
    fontSize: fontSize.extraLarge
  },
  userInfo: {
    flex: 1
  },
  userLabel: {
    marginBottom: 5
  }
});

export default UserDetails;
