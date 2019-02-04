import React, { Component } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import { colors, fontSize, fontWeight } from "../styles/theme";

class UserAlbums extends Component {
  renderAlbum = ({ item }) => {
    const { onPress } = this.props;

    return (
      <View style={styles.albumContainer}>
        <TouchableOpacity onPress={() => onPress({ albumId: item.id })}>
          <View style={styles.albumThumbnail} />
          <Text style={styles.albumTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { albums, loading } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Albums</Text>
        {!albums.length && !loading ? (
          <View style={styles.noAlbumsDescription}>
            <Text>No Albums found.</Text>
          </View>
        ) : (
          <FlatList
            horizontal={true}
            data={albums}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => this.renderAlbum({ item })}
          />
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
  },
  albumContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  albumThumbnail: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightGray
  },
  albumTitle: {
    width: 100
  }
});

UserAlbums.propTypes = {
  albums: PropTypes.array,
  onPress: PropTypes.func,
  loading: PropTypes.bool
};

export default UserAlbums;
