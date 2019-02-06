import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { fontSize, fontWeight } from "../styles/theme";
import Spinner from "./Spinner";
import Album from "./Album";

/**
 * Renders a horizontal list of albums
 */

class UserAlbums extends Component {
  render() {
    const { albums, loading, onPress } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Albums</Text>
        <Spinner loading={loading} />
        {!loading && (
          <FlatList
            horizontal={true}
            data={albums}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Album onPress={onPress} {...item} />}
          />
        )}
        {!albums.length && !loading && (
          <View style={styles.noAlbumsDescription}>
            <Text>No Albums found.</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    marginLeft: 20
  },
  noAlbumsDescription: {
    height: 140,
    justifyContent: "center",
    marginLeft: 20
  }
});

UserAlbums.propTypes = {
  albums: PropTypes.array,
  onPress: PropTypes.func,
  loading: PropTypes.bool
};

export default UserAlbums;
